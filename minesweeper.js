let mainGrid = [];
let started = false;
let placed = 0;

function loadGrid(height, width, bombs) {

    let board = document.getElementById("main-board-div"), container = document.getElementById("board-container");
    board.innerHTML = "";
    board.style.width = width * 20 + "px";
    board.style.height = height * 20 + "px";

    container.style.width = width * 20 + 100 + "px";
    container.style.height = height * 20 + 200 + "px";

    for (let row = 0; row < height; row++){
        let rowArray = [];
        for (let col = 0; col < width; col++){
            let element = document.createElement("button");
            element.style = "outline:none;position:absolute;width:20px;height:20px;left:" + col*20 + "px;top:" + row * 20 + "px;border-style:outset;border-color:white;background-color:grey";
            element.class = "tile";
            element.id = row + " " + col;
            element.adj = 10;
            element.addEventListener("click", click);
            element.onmousedown = function (element) {
                if (element.button === 2){

                    if (element.srcElement.style["background-color"] !== "red"){
                        element.srcElement.style["background-color"] = "red";
                    } else {
                        console.log("here");
                        element.srcElement.style["background-color"] = "grey";
                    }
                }
                else if (mainGrid[parseInt(element.srcElement.id.split(" ")[0])][parseInt(element.srcElement.id.split(" ")[1])])
                    element.srcElement.style["border-style"] = "inset";
                    console.log(element);
                };
            element.zIndex = "2";
            rowArray.push(element);
            document.getElementById("main-board-div").append(element);
            
        }

        mainGrid.push(rowArray);
    }

    console.log(mainGrid);

    while (placed < bombs) {

        let row = Math.floor(Math.random() * height), col = Math.floor(Math.random() * width); 
        
        while (mainGrid[row][col].adj === 9){
            row = Math.floor(Math.random() * height), col = Math.floor(Math.random() * width); 
        }

        if (placed >= bombs){
            break;
        }

        placeMines(row, col, bombs, 7);

    }

    for(row of mainGrid){
        let line = "";
    for (col of row){
        line+= col.adj + ' ';
    } console.log(line);
    }
}

function placeMines(row, col, bombs, max){

    if (placed >= bombs){
        return;
    }

    if (mainGrid[row][col] !== 9){
        placed++;
    }

    mainGrid[row][col].adj = 9;

    let check = [[-1, 1], [-1, 0], [-1,-1], [0,-1], [1,-1], [1,0], [1,1], [0, 1]];

    if (row === 0){
        if (col === 0){
            check.splice(0, 5);
        } else if (col === mainGrid[0].length - 1){
            check.splice(6, 2), check.splice(0, 3);
        } else {
            check.splice(0, 3);
        }
    } else if (col === 0) {
        if (row === mainGrid.length - 1){
            check.splice(2, 5);
        } else {
            check.splice(2, 3);
        }
    } else if (row === mainGrid.length - 1) {
        check.splice(4, 3);
    } else if (col === mainGrid[0].length - 1){
        check.splice(6, 2), check.splice(0, 1);
    }

    let surrounding = Math.floor(Math.random() * Math.min(check.length, max));

    console.log(placed + " " + bombs + "dicks");

    if (placed >= bombs){
        return;
    }

    for (let adj = 0; adj < surrounding; adj++){

        let place = Math.floor(Math.random() * (check.length));

        if (mainGrid[row + check[place][0]][col + check[place][1]].adj !== 9){

            if (placed >= bombs){
                return;
            }

            placeMines(row + check[place][0], col + check[place][1], bombs, surrounding--);

            if (placed >= bombs){
                return;
            }
            
        }

        if (placed >= bombs){
            return;
        }

    }
}

function markGrid() {
    
    for (let row = 0; row < mainGrid.length; row++){
        for (let col = 0; col < mainGrid[0].length; col++){

            if (mainGrid[row][col].adj === 9){
                continue;
            }

            let mines = 0, check = [[-1, 1], [-1, 0], [-1,-1], [0,-1], [1,-1], [1,0], [1,1], [0, 1]];

            if (row === 0){
                check.fill(false, 0, 3);
            } 
            
            if (col === 0){
                check.fill(false, 2, 5);
            }

            if (row === mainGrid.length - 1){
                check.fill(false, 4, 7);
            }

            if (col === mainGrid[0].length - 1){
                check[0] = false, check.fill(false, 6, 8);
            }

            for (item of check){
                if (item !== false && mainGrid[row + item[0]][col + item[1]].adj === 9){
                    mines ++;
                }
            }

            mainGrid[row][col].adj = mines;

        }
    }
}

function click (element){
    if (mainGrid[parseInt(element.srcElement.id.split(" ")[0])][parseInt(element.srcElement.id.split(" ")[1])])
        reveal(parseInt(element.srcElement.id.split(" ")[0]), parseInt(element.srcElement.id.split(" ")[1]));
}

function reveal(row, col){

    if (!started){

        let check = [[-1, 1], [-1, 0], [-1,-1], [0,-1], [1,-1], [1,0], [1,1], [0, 1]];

        if (mainGrid[row][col].adj === 9){
            document.getElementById(row + " " + col).adj = 0;
            replace(row, col)
        }

        for (item of check){

            if (row + item[0] < 0 || row + item[0] > mainGrid.length-1 || col + item[1] < 0 || col + item[1] > mainGrid[0].length-1){
                continue;
            }

            if (mainGrid[row+item[0]][col + item[1]].adj === 9){
                mainGrid[row+item[0]][col+item[1]].adj = 0;
                replace(row, col);
            }
        }


        started = true;
        markGrid();

        for(r of mainGrid){
            let line = "";
        for (c of r){
            line+= c.adj + ' ';
        } console.log(line);
        }
        
        console.log(row + " " + col)
        reveal(row, col);

    } else {
        console.log(row + " " + col)
        if (mainGrid[row][col].adj === 9){
                mainGrid = [];
            started = false;
            placed = 0;
            loadGrid(16, 30, 100);
        } else if (mainGrid[row][col].adj === 0){
            document.getElementById(row + " " + col).style["border-style"] = "none";
            document.getElementById(row + " " + col).style["border-colour"] = "none";
            document.getElementById(row + " " + col).style["outline"] = "none";
            document.getElementById(row + " " + col).style["background-color"] = "#c0c2c4";
            mainGrid[row][col] = false;
        
            let check = [[-1, 1], [-1, 0], [-1,-1], [0,-1], [1,-1], [1,0], [1,1], [0, 1]];

            for (item of check){

                if (row + item[0] < 0 || row + item[0] > mainGrid.length-1 || col + item[1] < 0 || col + item[1] > mainGrid[0].length-1){
                    continue;
                }

                if (mainGrid[row+item[0]][col + item[1]].adj !== 9 && mainGrid[row+item[0]][col + item[1]]){
                    reveal(row+item[0], col + item[1]);
                }
            }

        } else {
            let tile = document.createElement("img");
            tile.src = "/images/minesweeper-" + mainGrid[row][col].adj + ".png";
            tile.style = "position:absolute;width:20px;height:20px;left:" + col*20 + "px;top:" + row * 20 + "px;";
            document.getElementById("main-board-div").removeChild(mainGrid[row][col]);
            document.getElementById("main-board-div").appendChild(tile);
            mainGrid[row][col] = false;
        }
    }
}

function replace(row, col){
    for (let nrow = 0; nrow < mainGrid.length; nrow++){
        for (let ncol = 0; ncol < mainGrid[0].length; ncol++){
            if (mainGrid[nrow][ncol].adj !== 9 && (nrow < row-1 || nrow > row+1 || ncol < col-1 || ncol > col+1)){
                console.log("placed at " + nrow + " " + ncol)
                mainGrid[nrow][ncol].adj = 9;
                return;
            }
        }
    }
}

document.onmouseup = function () {
    for (row of mainGrid){
        for (col of row){
            if (col)
                col.style["border-style"] = "outset";
        }
    }
};

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);


loadGrid(16, 30, 100);