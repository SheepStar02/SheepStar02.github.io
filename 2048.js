let mainBoard = [];
let transitionQueue = [];

function loadBoard(width, height){
    
    for (let row = 0; row < height; row++){

        let rowx = [];

        for (let col = 0; col < width; col++){

            rowx.push(0);

            let square = document.createElement("div");
            square.class = "blank-tile";
            square.style = "width:"+((100/width)-2)+"%;height:"+((100/height)-2)+"%;left:"+((col*100/width)+1)+"%;top:"+((row*100/height)+1)+"%;position:absolute;background-color:#3a3d3d";
            document.getElementById("main-board-div").append(square);
        }
        mainBoard.push(rowx);
    }

    for (let i = 0; i < 2; i++){
        newTile(width, height);
    }
}

function newTile (width, height) {

    let row = Math.floor(Math.random()*4), col = Math.floor(Math.random()*4);

    while (mainBoard[row][col] !== 0){
        row = Math.floor(Math.random()*4);
        col = Math.floor(Math.random()*4);
    }

    let num = 2;

    if (Math.floor(Math.random()*10) === 0)
        num = 4;
        

    let tile = document.createElement("img");
    tile.id = row + " " + col;
    tile.class = "tile-" + num;
    tile.style = "width:"+((100/width)-2)+"%;height:"+((100/height)-2)+"%;left:"+((row*100/width)+1)+"%;top:"+((col*100/height)+1)+"%;position:absolute";
    tile.src = "/images/2048-" + num + ".png";
    document.getElementById("main-board-div").append(tile);

    mainBoard[row][col] = num;

}

document.addEventListener("keydown", function(event) {

    if (transitionQueue.length !== 0)
        return;

    if (event.keyCode === 40){

        for (let row = 0; row < mainBoard.length; row++){
            for (let col = mainBoard[0].length-1; col >= 0; col--){
                let dcol = col, merge = false;

                if (mainBoard[row][col] === 0){
                    continue;
                }

                while (dcol < mainBoard[0].length-1 && (mainBoard[row][dcol+1] === 0 || mainBoard[row][dcol+1] === mainBoard[row][col])){
                    if (mainBoard[row][dcol+1] === mainBoard[row][col]){
                        merge = true;
                    }
                    dcol ++;
                } 

                if (dcol === col){
                    continue;
                }

                addTransitionQueue(row, col, row, dcol, event.keyCode, merge);
            }
        }
    
    } else if (event.keyCode === 39){

        for (let col = 0; col < mainBoard[0].length; col++){
            for (let row = mainBoard.length-1; row >= 0; row--){
                let drow = row, merge = false;

                if (mainBoard[row][col] === 0){
                    continue;
                }

                while (drow < mainBoard.length-1 && (mainBoard[drow+1][col] === 0 || mainBoard[drow+1][col] === mainBoard[row][col])){
                    if (mainBoard[drow+1][col] === mainBoard[row][col]){
                        merge = true;
                    }
                    drow ++;
                } 

                if (drow === row){
                    continue;
                }

                console.log("adding " + row + " " + col);
                addTransitionQueue(row, col, drow, col, event.keyCode, merge);
            }
        }
    
    } else if (event.keyCode === 38){

        for (let row = 0; row < mainBoard.length; row++){
            for (let col = 0; col < mainBoard.length; col++){
                let dcol = col, merge = false;

                if (mainBoard[row][col] === 0){
                    continue;
                }

                while (dcol > 0 && (mainBoard[row][dcol-1] === 0 || mainBoard[row][dcol-1] === mainBoard[row][col])){

                    if (mainBoard[row][dcol-1] === mainBoard[row][col]){
                        merge = true;
                    }

                    dcol --;
                } 

                if (dcol === col){
                    continue;
                }

                addTransitionQueue(row, col, row, dcol, event.keyCode, merge);
            }
        }
    
    } else if (event.keyCode === 37){

        for (let col = 0; col < mainBoard[0].length; col++){
            for (let row = 0; row < mainBoard.length; row++){
                let drow = row, merge = false;

                if (mainBoard[row][col] === 0){
                    continue;
                }

                while (drow > 0 && (mainBoard[drow-1][col] === 0 || mainBoard[drow-1][col] === mainBoard[row][col])){

                    if (mainBoard[drow-1][col] === mainBoard[row][col]){
                        merge = true;
                    }

                    drow --;
                } 

                if (drow === row){
                    continue;
                }

                addTransitionQueue(row, col, drow, col, event.keyCode, merge);
            }
        }
    
    }

});

function addTransitionQueue(row, col, drow, dcol, direction, merge) {

    mainBoard[drow][dcol] = mainBoard[row][col];
    mainBoard[row][col] = 0;
    
    transitionQueue.push({
        id : row + " " + col,
        endCol : dcol*(100/mainBoard[0].length),
        endRow : drow*(100/mainBoard.length),
        direction : direction - 37,
        merge : merge,
    });

}

setInterval(function () {   

    if (transitionQueue.length === 0)
        return;

    let complete = true;

    for (let index = 0; index < transitionQueue.length; index++){
        element = document.getElementById(transitionQueue[index].id);
        
        if (transitionQueue[index].direction === 0 && parseInt(element.style.left.split("%")[0]) > transitionQueue[index].endRow+1){
            element.style.left = (parseInt(element.style.left.split("%")[0]) - 5) + "%";
            complete = false;
        } else if (transitionQueue[index].direction === 1 && parseInt(element.style.top.split("%")[0]) > transitionQueue[index].endCol+1){
            element.style.top = (parseInt(element.style.top.split("%")[0]) - 5) + "%";
            complete = false;
        } else if (transitionQueue[index].direction === 2 && parseInt(element.style.left.split("%")[0]) < transitionQueue[index].endRow){
            element.style.left = (parseInt(element.style.left.split("%")[0]) + 5) + "%";
            complete = false;
        } else if (transitionQueue[index].direction === 3 && parseInt(element.style.top.split("%")[0]) < transitionQueue[index].endCol){
            element.style.top = (parseInt(element.style.top.split("%")[0]) + 5) + "%";
            complete = false;
        }

    }

    if (complete) {
        console.log("done");
        for (let index = 0; index < transitionQueue.length; index++){

            console.log(transitionQueue[index]);

            let dRow =  transitionQueue[index].endRow/(100/mainBoard.length), dCol = transitionQueue[index].endCol/(100/mainBoard[0].length);

            element = document.getElementById(transitionQueue[index].id);
            console.log(element);

            if (transitionQueue[index].merge){
                document.getElementById("main-board-div").removeChild(element);
                mainBoard[dRow][dCol] *= 2;
                document.getElementById(dRow + " " + dCol).src = "/images/2048-" + mainBoard[dRow][dCol] + ".png";
                
            } else {
                element.style.top = transitionQueue[index].endCol+1 + "%";
                element.style.left = transitionQueue[index].endRow+1 + "%";
                element.id = dRow + " " + dCol;
            }

        }

        console.log(transitionQueue)

        transitionQueue = [];
        newTile(mainBoard.length, mainBoard[0].length);
    }

}, 10);

loadBoard(4,4);

console.log(mainBoard);