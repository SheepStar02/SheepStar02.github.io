function App () {

    const [solved, setSolved] = React.useState(false);
    const [steps, setSteps] = React.useState([]);
    const showStep = React.useRef(null);

    return (
        <div className="content-wrap solver-scroll">
            <div className="main-container">
                <Sudoku setSolved = {setSolved} solved = {solved} setSteps = {setSteps} showStep = {showStep} steps = {steps}/>
                <Solution solved = {solved} steps = {steps} showStep = {showStep}/>
            </div>
        </div>
    )
}

class Sudoku extends React.Component {

    animationDetails = ["None", "Basic", "Detailed", "Everything"];
    coordinateValues = [["A", "B", "C", "D", "E", "F", "G", "H", "I"],["1", "2", "3", "4", "5", "6", "7", "8", "9"]]

    constructor (props) {
        super(props);
        this.state = {
            board: (new Array(9)).fill().map(() => {return new Array(9).fill(0)}),
            activeCell : -1,
            originalIndex : [],
            originalBoard : (new Array(9)).fill().map(() => {return new Array(9).fill(0)}),
            animate: false,
            details: 1,
            speed: 50,
            showPossible: false,
            showCoordinates: false,
            errorCells: [],
            errorValues: [],
            solving: false,
            boardRef: React.createRef(null)
        }

        // setTimeout(() => {
        //     let date = Date.now();
        //     let b = 0;
        //     console.log("starting now")
        //     for (let i = 0; i < 81; i++) {b = this.solve([], this.state.board, []);break}
        //     let newDate = Date.now();
        //     console.log("ending now")
        //     console.log(newDate-date)
        // }, 1000)

        this.addWarning = React.createRef(null);
        this.props.showStep.current = this.loadBoardStep;

        window.onkeydown = event => { 

            if (this.state.activeCell === -1) {return}

            if (event.key === "Delete" || event.key === "Backspace") {
                this.changeCell(this.state.activeCell, 0, false);
                return;
            }

            if (isNaN(event.key)) {return}

            let value = parseInt(event.key), cellNum = this.state.activeCell, error = this.findDuplicate(cellNum, value, this.state.board)
            this.changeCell(this.state.activeCell, parseInt(event.key), false);
            if (error) {
                this.updateErrors(error.type, error.lineNum, error.index, cellNum);
                return;
            }   else {
                this.clearErrors();
            }
        }

        window.onmousedown = event => {
            if (!event.target.dataset.cellnum) {return}
            this.setState({activeCell: parseInt(event.target.dataset.cellnum)});
        }
    }

    toggleCoordinates = () => {
        this.setState({showCoordinates:!this.state.showCoordinates})
    }

    togglePossible = () => {
        this.setState({showPossible:!this.state.showPossible})
    }

    toggleSpeed = (speed) => {
        this.setState({speed:speed})
    }

    toggleDetails = () => {
        this.state.details < this.animationDetails.length-1 ? this.setState({details: this.state.details+1}) : this.setState({details: 0})
    }

    toggleAnimate = () => {
        this.setState({animate: !this.state.animate})
    }

    cancel = (loadFinal) => {
        this.setState({solving: false});
        if (loadFinal) {this.loadBoardStep(this.props.steps)}
    }

    clear = () => {
        this.setState({
            board : (new Array(9)).fill().map(() => {return new Array(9).fill(0)}),
            originalIndex : [],
            errorCells : [],
            errorValues : []
        })
    }

    solveBoard = () => {
        let board = this.state.board.map(function(arr) {return arr.slice()}), originalBoard = this.state.board.map(function(arr) {return arr.slice()}), originalIndex = [];

        if (!this.legalBoard(board)) {
            this.addWarning.current("Illegal Puzzle","Careful checking that each box, row, and column contains no duplicate values.");
            return;
        }

        board.forEach((value, index) => {
            value.forEach((cell, cellNum) => {
                if (cell !== 0) {originalIndex.push(index * board.length + cellNum)}
            })
        })

        this.setState({originalIndex:originalIndex, solving:this.state.animate});

        let steps = [], final = this.solve([0], board, steps);

        
        if (final) {
            if (this.state.animate) {this.animateSolution(steps)} else {this.setState({board:final})}
            this.setState({originalBoard:originalBoard})
            this.props.setSolved(true);
            this.props.setSteps(steps);
        } else {
            this.addWarning.current("Unsolvable Puzzle","This puzzle has no solution. Make sure you've entered the correct values.");
            this.setState({solving:false});
            return;
        }

    }

    animateSolution (steps) {

        let newSteps = [].concat(...steps);

        if (newSteps.length === 0) {
            this.setState({solving:false});
            return;
        }

        let counter = -1;
        const interval = setInterval(() => {

            counter++;

            if (counter >= newSteps.length) {
                this.setState({solving:false});
            }

            if (counter >= newSteps.length || !this.state.solving) {
                if (!this.props.solved) {this.props.setSolved(true)}
                clearInterval(interval);
                return;
            }

            if (newSteps[counter].type === "backtrack") {
                this.setState({board:newSteps[counter].board});
            } else {
                let board = this.state.board.map(function(arr) {return arr.slice()});
                this.changeCell(newSteps[counter].cellNum, newSteps[counter].value, board);
                this.setState({board:board})
            }


        }, 1010 - this.state.speed * 10);
    }

    loadBoardStep = (steps, step) => {
        let newBoard = this.state.originalBoard.map(function(arr) {return arr.slice()});
        let newSteps = [].concat(...steps);

        if (isNaN(step)) {step = newSteps.length-1}

        for (let i = 0; i <= step; i++) {
            if (newSteps[i].type === "backtrack") {
                newBoard = newSteps[i].board;
            } else {
                this.changeCell(newSteps[i].cellNum, newSteps[i].value, newBoard);
            }
        }
        this.cancel(false);
        this.setState({board:newBoard});
        this.state.boardRef.current.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }

    updateErrors (type, lineNum, indexes, cellNum) {
        this.setState({
            errorCells: this.getLineIndexes(type, lineNum),
            errorValues: indexes.concat(cellNum)
        })   
    }

    legalBoard (board) {
        let copy = board.map(function(arr) {return arr.slice()});
        for (let i = 0; i < copy.length ** 2; i++) {
            let value = copy[Math.floor(i/9)][i%9];
            this.changeCell(i, 0, copy);
            if (this.findDuplicate(i, value, copy, true)) {return false}
            this.changeCell(i, value, copy);
        }
        return true
    } 

    clearErrors () {
        this.setState({
            errorCells:[],
            errorValues:[]
        })
    }

    changeCell (cell, value, board) {  

        if (board) {
            board[Math.floor(cell/board.length)][cell%board.length] = value;
            return;
        }

        let newBoard = this.state.board;
        newBoard[Math.floor(cell/newBoard.length)][cell%newBoard.length] = value;
        this.setState({board:newBoard})
    }

    getPossibleValues (board, cellNum) {
        let possible = [];
        for (let i = 1; i < board.length+1; i++) {
            if (this.isAllowed(cellNum, i, board, false)) {
                possible.push(i)
            }
        }
        return possible;
    }

    eliminationMethod (board, steps) {
        for (let a = 0; a < board.length ** 2; a++) {
            if (board[Math.floor(a/board.length)][a%board.length] !== 0) {continue}
            let possible = this.getPossibleValues(board, a)
            if (possible.length === 1) {
                this.changeCell(a, possible[0], board);
                this.addStep(steps, {
                    type : "elimination",
                    cellNum : a,
                    value: possible[0]
                })
                return a;
            } else if (possible.length === 0){
                return 0;
            }
        }
    }

    insertionMethod (board, steps) {
        for (let type of ["ROW", "COL", "BOX"]) {
            for (let line = 0; line < board.length; line++) {
                for (let num = 1; num < board.length+1; num++) {
                    let possible = [];
                    for (let i of this.getLineIndexes(type, line)) {
                        if (this.isAllowed(i, num, board, false)) {
                            possible.push(i)
                        }
                    }
                    if (possible.length === 1) {
                        this.changeCell(possible[0], num, board);
                        this.addStep(steps, {
                            type : "insert",
                            cellNum : possible[0],
                            value: num,
                            lineType: type,
                            linNum: line
                        })
                        return possible[0];
                    }
                }
            }
        }
    }

    solve (guesses, board, steps) {

        do {

            let changedIndex = this.eliminationMethod(board, steps);
            if (changedIndex === 0) {
                return false;
            }

            if (changedIndex !== undefined) {continue}
        

            if (this.insertionMethod(board, steps) !== undefined) {continue}
            
            if (this.boardSolved(board)) {return board}

            let copy = board.map(function(arr) {return arr.slice()});
            let solution = this.newPredict(guesses, copy, steps);
            let newCopy = board.map(function(arr) {return arr.slice()}), saveCopy;
            newCopy[Math.floor(guesses[guesses.length-1]/board.length)][guesses[guesses.length-1]%board.length] = copy[Math.floor(guesses[guesses.length-1]/board.length)][guesses[guesses.length-1]%board.length]   
            
            if (solution) {
                return solution
            } else {
                do {
                    this.addStep(steps, {
                        type:"backtrack",
                        board:board,
                        cellNum:guesses[guesses.length-1]
                    })
                    if (saveCopy) {
                        saveCopy[Math.floor(guesses[guesses.length-1]/board.length)][guesses[guesses.length-1]%board.length] = newCopy[Math.floor(guesses[guesses.length-1]/board.length)][guesses[guesses.length-1]%board.length];
                        newCopy = saveCopy.map(function(arr) {return arr.slice()})
                    }
                    saveCopy = newCopy.map(function(arr) {return arr.slice()})
                    var prediction = this.predict(guesses[guesses.length-1], guesses, newCopy, steps);
                    let newSolution = this.solve(guesses, newCopy, steps);
                    if (prediction && newSolution) {return newSolution}
                } while (prediction)
                guesses.pop();
                return false;
            }

        } while (true);
    }

    newPredict (guesses, board, steps) {
        let lowest = board.length, cellNum = 0;

        for (let a = 0; a < board.length**2; a++) {
            if (guesses.includes(a) || board[Math.floor(a/board.length)][a%board.length] !== 0) {continue}
            if (this.getPossibleValues(board, a).length < lowest) {cellNum = a; lowest = this.getPossibleValues(board, a).length}
        }
        
        if (!this.predict(cellNum, guesses, board, steps)){return false}
        return this.solve(guesses, board, steps);
    }

    predict (cellNum, guesses, board, steps) {
        for (let i = board[Math.floor(cellNum/board.length)][cellNum%board.length]+1; i < board.length+1; i++) {
            if (this.isAllowed(cellNum, i, board, true)) {
                this.changeCell(cellNum, i, board);
                this.addStep(steps, {
                    type : "predict",
                    cellNum : cellNum,
                    value: i
                })

                if (!guesses.includes(cellNum)) {guesses.push(cellNum)}
                return true;
            }
        }
        return false;
    }

    boardSolved (board) {
        for (let box of board) {
            if (box.includes(0)) {return false}
        }
        return true;
    }

    addStep (steps, step) {
        if (steps.length === 0) {step.stepNum = 0} else {step.stepNum = steps[steps.length-1][steps[steps.length-1].length-1].stepNum+1}
        if (steps.length === 0 || steps[steps.length-1][steps[steps.length-1].length-1].type !== step.type) {
            steps.push([step]);
            return;
        }

        steps[steps.length-1].push(step)
    }

    getLine(type, lineNum, board) {
        if (type === "BOX") {return board[lineNum]}
        return board.filter((group, index) => {
            return Math.floor(lineNum/3) === (type === "ROW" ? Math.floor(index/3) : index%3)
        }).reduce((previous, current) => {
            return previous.concat(current.filter((cell, index) => {
                return Math.floor(lineNum%3) === (type === "ROW" ? Math.floor(index/3) : index%3)
            }))
        }, []);
    }
 
    getLineNum(type, cellNum) {
        switch (type) {
            case "ROW" :
                return Math.floor(cellNum/27)*3+Math.floor(cellNum%9/3);
            case "COL" :
                return Math.floor(cellNum/9)%3*3+Math.floor(cellNum%3);
        }
    }

    getLineIndexes(type, lineNum) {
        return new Array(9).fill().map((item, index) => {
            switch (type) {
                case "BOX" :
                    return index + lineNum * 9
                case "ROW" :
                    return index % 3 + Math.floor(index/3) * 9 + lineNum % 3 * 3 + Math.floor(lineNum/3) * 27
                case "COL" :
                    return index % 3 * 3 + Math.floor(index/3) * 27 + Math.floor(lineNum/3) * 9 + lineNum % 3
            }
        })
    }

    isAllowed = (cellNum, value, board, isPredict) => {
        if (!board) {board = this.state.board}
        return ((
            !this.getLine("ROW", this.getLineNum("ROW", cellNum), board).includes(value) &&
            !this.getLine("COL", this.getLineNum("COL", cellNum), board).includes(value) &&
            !this.getLine("BOX", Math.floor(cellNum/9), board).includes(value)
        ) && (board[Math.floor(cellNum/9)][cellNum%9] === 0 || isPredict))
    }

    findDuplicate(cellNum, value, board) {
        if (value === 0) {return false}
        if (this.getLine("ROW", this.getLineNum("ROW", cellNum), board).includes(value)) {return {type:"ROW",lineNum:this.getLineNum("ROW", cellNum),index:this.getLineIndexes("ROW", this.getLineNum("ROW", cellNum), board).reduce((a, e) => {if (this.state.board[Math.floor(e/9)][e%9] === value) {a.push(e)} return a}, [])}}
        if (this.getLine("COL", this.getLineNum("COL", cellNum), board).includes(value)) {return {type:"COL",lineNum:this.getLineNum("COL", cellNum),index:this.getLineIndexes("COL", this.getLineNum("COL", cellNum), board).reduce((a, e) => {if (this.state.board[Math.floor(e/9)][e%9] === value) {a.push(e)} return a}, [])}}
        if (this.getLine("BOX", Math.floor(cellNum/9), board).includes(value)) {return {type:"BOX",lineNum:Math.floor(cellNum/9),index:this.getLineIndexes("BOX", Math.floor(cellNum/9), board).reduce((a, e) => {if (this.state.board[Math.floor(e/9)][e%9] === value) {a.push(e)}return a}, [])}}
        return false;
    }

    render () {
        return (
            <div className = "sudoku" ref={this.state.boardRef}>
                <Control solve={this.solveBoard} clear={this.clear} cancel={this.cancel} toggleAnimate={this.toggleAnimate} toggleDetails={this.toggleDetails} solving={this.state.solving} animate={this.state.animate} toggleSpeed={this.toggleSpeed} togglePossible={this.togglePossible} details={this.state.details} animationDetails={this.animationDetails} speed={this.state.speed} showPossible={this.state.showPossible} toggleCoordinates={this.toggleCoordinates}/>
                <div className="sudoku-board-container">
                    <div className="sudoku-board-wrap">
                    <div className={`sudoku-board${!this.state.showPossible && " hide-possible-values" || ""}`}>
                        {this.state.board.map((row, index) => (
                            <CellGroup values={row} group={index} active={this.state.activeCell} originalIndex={this.state.originalIndex} errorCells = {this.state.errorCells} errorValues = {this.state.errorValues} isAllowed={this.isAllowed}/>
                        ))}
                    </div>
                    </div>
                    <div className={`sudoku-coordinates horizontal-coordinates${(this.state.showCoordinates && " show" || "")}`}>
                        {this.coordinateValues[0].map((value) => (
                            <span>{value}</span>
                        ))}
                    </div>
                    <div className={`sudoku-coordinates verticle-coordinates${(this.state.showCoordinates && " show" || "")}`}>
                        {this.coordinateValues[1].map((value) => (
                            <span>{value}</span>
                        ))}
                    </div>
                </div>
                <Warning addWarning = {this.addWarning}/>
            </div>
        )
    }
}

function CellGroup (props) {
    return (
        <div className="sudoku-group">
            {props.values.map((cell, index) => (<Cell value={cell} active={props.active} cellNum={props.group*9+index} originalIndex = {props.originalIndex} errorCells = {props.errorCells} errorValues = {props.errorValues} isAllowed={props.isAllowed}/>))}
        </div>
    )
}

function Cell (props) {
    return (
        <div className={`sudoku-cell${((props.cellNum === props.active) && " active" || "")}${(props.errorCells.includes(props.cellNum) && " error-cell" || "")}${(props.value !==0 && " filled" || "")}`} data-cellnum={props.cellNum}>
            <span className={`sudoku-value${((props.originalIndex.includes(props.cellNum)) && " original" || "")}${(props.errorValues.includes(props.cellNum) && " error-value" || "")}`}>{(props.value !== 0 && props.value || "")}</span>
            <div className="possible-values">
                {   
                    Array(9).fill().map((value, index) => {
                        if (props.isAllowed(props.cellNum, index+1, false, false)) {
                            return (<span>{index+1}</span>)
                        }
                    })
                }
            </div>
        </div>
    )
}

function Warning ({ addWarning }) {

    const [warnings, setWarnings] = React.useState([]);
    const [deleted, setDeleted] = React.useState([]);

    React.useEffect(() => {
        addWarning.current = newWarning;
    })

    function newWarning (type, message) {
        setWarnings([...warnings, {
            type:type,
            message:message
        }])
    }

    const clearWarning = (warning) => {
        setDeleted([...deleted, warning]);  
        setTimeout(() => {
            setDeleted(deleted.filter(item => item !== warning))
            setWarnings(warnings.filter(item => item !== warning))
        }, 200)
    }

    return (
        <div className="warning-container">
            {
                warnings.map((warning) => (
                    <div className={`warning${(deleted.includes(warning) && " fade-out" || "")}`}>
                        <div className="warning-content">
                            <h3>{warning.type}</h3>
                            <p>{warning.message}</p>
                        </div>
                        <button className="close-warning" onClick = {() => {clearWarning(warning)}}><div></div><div></div></button>
                    </div>
                ))
            }
        </div>
    )
}

class Control extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={`solver-options solver-scroll${(this.props.solving && " solving" || "")}`}>
                <h1>Sudoku Solver</h1>
                <p>Visualize the algorithm behind the classic japanese logic puzzle</p>
                <div className="solver-methods">
                    <button className="solve-board" onClick = {() => {this.props.solve()}}>Solve</button>
                    <button className="clear-board" onClick = {() => {this.props.clear()}}>Clear</button>
                    <button className="cancel-solve" onClick = {() => {this.props.cancel(true)}}>Skip Animation</button>
                </div>
                <h1>Advanced Settings</h1>
                <div className="animation-setting-container disable-while-solving">
                    <label className="setting-wrap"><span>Possible Values</span>
                            <label className="toggle-button toggle-possible">
                                <input type="checkbox" onClick={() => {this.props.togglePossible()}}></input>
                                <span className="checkbox"></span>
                            </label>
                        </label>
                    <label className="setting-wrap"><span>Coordinates</span>
                        <label className="toggle-button toggle-coordinates">
                            <input type="checkbox" onClick={() => {this.props.toggleCoordinates()}}></input>
                            <span className="checkbox"></span>
                        </label>
                    </label>
                    <label className="setting-wrap disable-while-solving"><span>Animate</span>
                        <label className="toggle-button toggle-animate">
                            <input type="checkbox" checked={this.props.animate} onClick={() => {this.props.toggleAnimate()}}></input>
                            <span className="checkbox"></span>
                        </label>
                    </label>
                    <div className={`animation-settings${(this.props.animate) && " show" || ""}`}>
                        <hr></hr>
                        <div className="setting-wrap disable-while-solving">Animation Speed {`(${this.props.speed}%)`}
                            <div><span>slow</span><input className="animation-speed" type="range" max="100" min="1" defaultValue="50" onChange={(event) => {this.props.toggleSpeed(parseInt(event.target.value))}}></input><span>fast</span></div>
                        </div>
                        <div className="setting-wrap disable-while-solving">Animation Details
                        <button className="highlight-cells" onClick={() => {this.props.toggleDetails()}}>{this.props.animationDetails[this.props.details]}</button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

class Solution extends React.Component {

    stepsPerPage = 50;

    constructor (props) {
        super(props);

        this.state = {
            pageNum: 1
        }
    }

    getCoordinates (cellNum, tostring) {
        let coordinates = [["A", "B", "C", "D", "E", "F", "G", "H", "I"][Math.floor(cellNum/9)%3*3+Math.floor(cellNum%3)],Math.floor(cellNum/27)*3+Math.floor(cellNum%9/3)+1]; 
        if (tostring) {return coordinates[0] + coordinates[1]}
        return coordinates;
    }
    
    createCellRef (cellNum) {
        return (
            <span data-cell={this.getCoordinates(cellNum, true)}>{this.getCoordinates(cellNum, true)}</span>
        )
    }

    getBreakdown () {
        let results = {"elimination" : 0, "insert" : 0, "predict" : 0, "backtrack" : 0}
        let steps = [].concat(...this.props.steps);

        for (let step of steps) {
            results[step.type]++
        }

        return `Unique Steps: ${steps.length} | Elimination: ${results.elimination} | Insertion: ${results.insert} | Prediction: ${results.predict} `
    }

    render () {
        return (
            <div className="solution">
                <div className={`description${(!this.props.solved && " show" || "")}`}>
                    <h1 className="title"><span>How It Works</span></h1>
                    <ul>
                        <li>This sukoku solver is created with the purpose to demonstrate the algorithm behind the solution of the classic japanese puzzle game: sudoku.</li>
                        <li>There are 3 methods used by this solver and is relatively optimzed to solve every puzzle within 3 seconds</li>
                        <li>The animation will highlight the technique used to solve each individual cell and described in the report to better understand why each method was used.</li>
                    </ul>
                    <h2 className="title"><span>Solving Methods</span></h2>
                    <div className="solving-methods">
                        <div>
                            <h4>Elimination</h4>
                            <p>Every cell is evaluated for which numbers that can exist. If any given cell can only have one possible value, it must be the correct value. However, not always will there be a cell with only one solution and another method will be required.</p>
                        </div>
                        <div>
                            <h4>Insertion</h4>
                            <p>Each row, column and box is evaluated for which cells each number (1-9) can exist. If any number is only allowed in one cell, it must be the correct value. Think of this as the opposite of elimination method.</p>
                        </div>
                        <div>
                            <h4>Recursion</h4>
                            <p>Recursion is one of the more challenge concepts in algorithms. To make this simple, a prediction is made when none of the other methods can be used. If said prediction leads to an impossible solution, the method creates a new prediction until the puzzle is solved.</p>
                        </div>
                    </div>
                    <p className="footer">Disclaimer: Algorithms used in this solver is not 100% optimized but created with the intent to demonstrate and simplify the solution. ©</p>
                </div> 
                <div className={`report${(this.props.solved && " show" || "")}`}>
                    <h1 className="title"><span>Solution Report</span></h1>
                    <h2>{this.getBreakdown()}</h2>
                    <ol className="report-tree">
                        {this.props.steps.map((step, index) => {
                            if (index >= this.stepsPerPage * this.state.pageNum) {return}
                            return (
                                <li className={`step${step.length !== 1 && " step-tree" || ""}`}>
                                <h3><h4 data-type={step[0].type} onClick = {() => {this.props.showStep.current(this.props.steps, step[0].stepNum)}}><SolutionStep step = {step} showStep = {this.props.showStep} getCoordinates = {this.getCoordinates}/></h4>
                                    {(step.length !== 1 && <ol className="substep">
                                        {step.map((substep, index) => {
                                            if (step.length === 1) {return}
                                            return (
                                                <li onClick = {() => {this.props.showStep.current(this.props.steps, substep.stepNum)}}><SolutionSubstep substep = {substep} showStep = {this.props.showStep} getCoordinates = {this.getCoordinates} /></li>
                                            )
                                        })}
                                    </ol>)}
                                </h3>
                                </li>
                            )
                        })}
                    </ol>
                    <div className="footer">
                        <button className={`increase-page${(this.state.pageNum*this.stepsPerPage >= this.props.steps.length && " hide" || "")}`} onClick = {() => {this.setState({pageNum:this.state.pageNum+1})}}>Show More</button>
                        <button className={`decrease-page${(this.state.pageNum <= 1 && " hide" || "")}`} onClick = {() => {this.setState({pageNum:this.state.pageNum-1})}}>Show Less</button>
                    </div>
                </div>
            </div>
        )
    }
}

function SolutionStep (props) {

    let step = props.step;

    switch (step[0].type) {
        case "elimination" :
            return (step.length === 1 && (<React.Fragment><span>Cell </span><span onClick = {() => {props.showStep.current(props.steps, step[0].stepNum)}} className="cellRef" data-cell={props.getCoordinates(step[0].cellNum, true)}>{props.getCoordinates(step[0].cellNum, true)}</span><span> was filled in with value {step[0].value} using Elimination method.</span></React.Fragment>) || (<span>{step.length} Cells were filled in using Elimination method.</span>))
        case "insert" :
            return (step.length === 1 && (<React.Fragment><span>Cell </span><span onClick = {() => {props.showStep.current(props.steps, step[0].stepNum)}} className="cellRef" data-cell={props.getCoordinates(step[0].cellNum, true)}>{props.getCoordinates(step[0].cellNum, true)}</span><span> was filled in with value {step[0].value} using Insertion method.</span></React.Fragment>) || (<span>{step.length} Cells were filled in using Insertion method.</span>))
        case "predict" :
            return (step.length === 1 && (<React.Fragment><span>Cell </span><span onClick = {() => {props.showStep.current(props.steps, step[0].stepNum)}} className="cellRef" data-cell={props.getCoordinates(step[0].cellNum, true)}>{props.getCoordinates(step[0].cellNum, true)}</span><span> was predicted with value {step[0].value}.</span></React.Fragment>) || (<span>{step.length} predictions were created.</span>))
        case "backtrack" :
            return (step.length === 1 && (<React.Fragment><span>Cell </span><span onClick = {() => {props.showStep.current(props.steps, step[0].stepNum)}} className="cellRef" data-cell={props.getCoordinates(step[0].cellNum, true)}>{props.getCoordinates(step[0].cellNum, true)}</span><span> had an incorrect prediction, all associated values were removed.</span></React.Fragment>) || (<span>{step.length} predictions were incorrect. Subsequent values were removed.</span>))
    }
}

function SolutionSubstep (props) {
    
    let substep = props.substep;

    switch (substep.type) {
        case "elimination" :
            return (<React.Fragment><span>Cell </span><span onClick = {() => {props.showStep.current(props.steps, substep.stepNum)}} className="cellRef" data-cell={props.getCoordinates(substep.cellNum, true)}>{props.getCoordinates(substep.cellNum, true)}</span><span> was filled in with value {substep.value}.</span></React.Fragment>);
        case "insert" :
            return (<React.Fragment><span>The value {substep.value} was filled into cell </span><span onClick = {() => {props.showStep.current(props.steps, substep.stepNum)}} className="cellRef" data-cell={props.getCoordinates(substep.cellNum, true)}>{props.getCoordinates(substep.cellNum, true)}.</span></React.Fragment>);
        case "predict" :
            return (<React.Fragment><span>Cell </span><span onClick = {() => {props.showStep.current(props.steps, substep.stepNum)}} className="cellRef" data-cell={props.getCoordinates(substep.cellNum, true)}>{props.getCoordinates(substep.cellNum, true)}</span><span> was predicted with value {substep.value}.</span></React.Fragment>);
        case "backtrack" :
            return (<React.Fragment><span>Prediction on cell </span><span onClick = {() => {props.showStep.current(props.steps, substep.stepNum)}} className="cellRef" data-cell={props.getCoordinates(substep.cellNum, true)}>{props.getCoordinates(substep.cellNum, true)}</span><span> was incorrect and associated values were removed.</span></React.Fragment>);
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)


    