let mainGrid = [];

let config = {
    started : false,
    placed : 0,
    flags : 0,
    time : 0,
    ended : false,
}

let timer = setInterval(score, 10);

function loadGrid(height, width, bombs) {

    mainGrid = [];

    config = {
        started : false,
        placed : 0,
        flags : 0,
        time : 0,
        ended : false,
    }

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
                    if (mainGrid[parseInt(element.srcElement.id.split(" ")[0])][parseInt(element.srcElement.id.split(" ")[1])]){
                        if (element.srcElement.style["background-color"] !== "red"){
                            element.srcElement.style["background-color"] = "red";
                        } else {
                            element.srcElement.style["background-color"] = "grey";
                        }   
                    } 
                }
                else if (mainGrid[parseInt(element.srcElement.id.split(" ")[0])][parseInt(element.srcElement.id.split(" ")[1])])
                    element.srcElement.style["border-style"] = "inset";
                };
            rowArray.push(element);
            document.getElementById("main-board-div").append(element);
            
        }

        mainGrid.push(rowArray);
    }

    console.log(mainGrid)

    while (config.placed < bombs) {

        console.log(config)

        let row = Math.floor(Math.random() * height), col = Math.floor(Math.random() * width); 

        console.log(row + " " + col);
        
        while (mainGrid[row][col].adj === 9){
            row = Math.floor(Math.random() * height), col = Math.floor(Math.random() * width); 
        }

        if (config.placed >= bombs){
            break;
        }

        placeMines(row, col, bombs, 7);

    }
}

function placeMines(row, col, bombs, max){

    if (config.placed >= bombs){
        return;
    }

    if (mainGrid[row][col] !== 9){
        config.placed++;
    }

    mainGrid[row][col].adj = 9;

    let check = [[-1, 1], [-1,-1], [1,-1], [1,1]];

    for (let item = check.length-1; item >= 0;item--){
        if (row + check[item][0] < 0 || row + check[item][0] === mainGrid.length || col + check[item][1] < 0 || col + check[item][1] === mainGrid[0].length){
            check.splice(item, 1);
        }
    }
    let surrounding = Math.floor(Math.random() * Math.min(check.length, max));

    if (config.placed >= bombs){
        return;
    }

    for (let adj = 0; adj < surrounding; adj++){

        let place = Math.floor(Math.random() * (check.length));

        if (mainGrid[row + check[place][0]][col + check[place][1]].adj !== 9){
            placeMines(row + check[place][0], col + check[place][1], bombs, Math.floor(surrounding/3));

        }

        if (config.placed >= bombs){
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

    for (row of mainGrid){
        line = "";
        for (item of row){
            line+=item.adj + " ";
        }
        console.log(line);
    }
}

function click (element){
    if (mainGrid[parseInt(element.srcElement.id.split(" ")[0])][parseInt(element.srcElement.id.split(" ")[1])])
        reveal(parseInt(element.srcElement.id.split(" ")[0]), parseInt(element.srcElement.id.split(" ")[1]));
}

function reveal(row, col){

    if (config.ended){

        config.ended = false;
        loadGrid(mainGrid.length, mainGrid[0].length, config.placed);

    } else if (!config.started){

        document.getElementById("score").innerHTML = "0.00";
        let check = [[-1, 1], [-1, 0], [-1,-1], [0,-1], [1,-1], [1,0], [1,1], [0, 1]];

        if (mainGrid[row][col].adj === 9){
            document.getElementById(row + " " + col).adj = 0;
            replace(row, col)
        }

        for (item of check){

            if (row + item[0] < 0 || row + item[0] === mainGrid.length || col + item[1] < 0 || col + item[1] === mainGrid[0].length){
                continue;
            }

            if (mainGrid[row+item[0]][col + item[1]].adj === 9){
                mainGrid[row+item[0]][col+item[1]].adj = 0;
                replace(row, col);
            }
        }


        config.started = true;
        markGrid();

        reveal(row, col);

    } else {

        if (mainGrid[row][col].adj === 9){
            loadGrid(mainGrid.length, mainGrid[0].length, config.placed);
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

        checkWin();

        if (config.ended){
            for (row of mainGrid){
                for (item of row){
                    if (item && item.adj === 9){
                        item.style["background-color"] = "yellow";
                    }
                }
            }
        }
    }
}

function checkWin() {

    for (row of mainGrid){
        for (item of row){
            if (item && item.adj !== 9){
                return;
            }
        }
    }

    config.started = false;
    config.ended = true;
}

function replace(row, col){
    for (let nrow = 0; nrow < mainGrid.length; nrow++){
        for (let ncol = 0; ncol < mainGrid[0].length; ncol++){
            if (mainGrid[nrow][ncol].adj !== 9 && (nrow < row-1 || nrow > row+1 || ncol < col-1 || ncol > col+1)){

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

function score(){
    if (config.started){
        config.time += 0.01;
        document.getElementById("score").innerHTML = config.time.toFixed(2);
    }
}

loadGrid(8, 10, 10);
