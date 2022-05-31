function App () {
    return (
        <div className="main-container">
            <div className="sudoku-board-container">
                <Sudoku />
            </div>
            <Control />
        </div>
    )
}

class Sudoku extends React.Component {

    constructor () {
        super();
        this.state = {
            board : (new Array(9)).fill().map(() => {return new Array(9).fill(0)}),
            activeCell : -1,
        }

        window.onkeydown = event => {
            if (event.key === "Enter"){this.solve();return}
            if (isNaN(event.key)) {return}
            this.changeCell(this.state.activeCell, parseInt(event.key));
        }

        window.onmousedown = event => {
            if (!event.target.dataset.cellnum) {return}
            this.setState({activeCell: parseInt(event.target.dataset.cellnum)});
        }

    }

    changeCell (cell, value) {
        let newBoard = this.state.board;
        newBoard[Math.floor(cell/9)][cell%9] = value;
        this.setState({board:newBoard})
    }

    solve () {
        const board = this.state.board;
        do {

            var changed = false;

            for (let a = 0; a < 81; a++) {
                if (board[Math.floor(a/9)][a%9] !== 0) {continue}
                let possible = [];
                for (let i = 1; i < 10; i++) {
                    if (this.isAllowed(a, i, board)) {
                        possible.push(i)
                    }
                }
                if (possible.length === 1) {
                    board[Math.floor(a/9)][a%9] = possible[0]
                    changed = true;
                } else if (possible.length === 0) {
                    console.log("BROKEN SHIT")
                }
            }

            if (!changed) {
                for (let type of ["ROW", "COL", "BOX"]) {
                    for (let line = 0; line < 9; line++) {
                        let possible = [];
                        for (let i = 1; i < 10; i++) {
                            if (this.isAllowed(a, i, board)) {
                                possible.push(i)
                            }
                        }
                    }
                }
            }
        } while (changed);

        // if (!this.boardFull(board)) {
            
        // }
        this.setState({board:board});
        console.log("COMPLETE")
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

    isAllowed(cellNum, value, board) {
        return (
            !this.getLine("ROW", this.getLineNum("ROW", cellNum), board).includes(value) &&
            !this.getLine("COL", this.getLineNum("COL", cellNum), board).includes(value) &&
            !this.getLine("BOX", Math.floor(cellNum/9), board).includes(value)
        )
    }

    render () {
        return (
            <div className="sudoku-board">
                {this.state.board.map((row, index) => (
                    <CellGroup values={row} group={index} active={this.state.activeCell}/>
                ))}
            </div>
        )
    }
}

class Control extends React.Component {

    constructor () {
        super();
    }

    render () {
        return (
            <div className = "solver-options"></div>
        )
    }
}

function CellGroup (props) {
    return (
        <div className="sudoku-group">
            {props.values.map((cell, index) => (<Cell value={cell} active={props.active} cellNum={props.group*9+index}/>))}
        </div>
    )
}

function Cell (props) {
    return (
        <div className={`sudoku-cell${((props.cellNum === props.active) && " active" || "")}`} data-cellnum={props.cellNum}>
            <span className="sudoku-value">{(props.value !== 0 && props.value || "")}</span>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)