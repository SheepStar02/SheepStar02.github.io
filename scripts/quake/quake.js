console.log("test");
console.log(firebase.database().ref());
firebase.database().ref("testing").set({
    name:"naeme",
    tiddies:"tiddies"
});

let playDirection = -1;
const quakeMap = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0],
    [0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

function adjustWindow() {
    console.log("changing");
    Object.assign(document.getElementById("d1-board").style,{
        width:(window.innerHeight*0.95)+"px",
        height:(window.innerHeight*0.95)+"px"});
}

function loadMenu() {
    window.addEventListener('resize', adjustWindow);
    adjustWindow();

}

function beginGame() {

    document.getElementById("b1-play-button").classList.add("hide");

    for (let row = 0; row < quakeMap.length; row++){
        for (col = 0; col < quakeMap.length; col++){

            let mapTile = document.createElement("div");

            mapTile.id = "maptile-" + row + "-" + col;
            mapTile.classList.add("maptile");
            Object.assign(mapTile.style, {
                left: col*5 + "%",
                top: row*5 + "%",
            });

            if (quakeMap[row][col] === 0){
                mapTile.style.backgroundImage = 'url("/assets/images/quake/empty-tile.png")';

            } else if (quakeMap[row][col] === 1){
                mapTile.style.backgroundImage = 'url("/assets/images/quake/barrier-tile.png")';
            }

            document.getElementById("d2-board").append(mapTile);
        }
    }

    let randLeft = Math.floor(Math.random() * 20), randTop = Math.floor(Math.random() * 20);

    while (quakeMap[randTop][randLeft] !== 0){
        randLeft = Math.floor(Math.random() * 20), randTop = Math.floor(Math.random() * 20);
    }

    let boardLeft = randLeft * -10 + 50, boardTop = randTop * -10 + 50, playerLeft = randLeft * 5, playerTop = randTop * 5;

    boardLeft = Math.min(boardLeft, 0);
    boardLeft = Math.max(boardLeft, -100);
    boardTop = Math.min(boardTop, 0);
    boardTop = Math.max(boardTop, -100);

    Object.assign(document.getElementById("d2-board").style, {
        left: boardLeft + "%",
        top: boardTop + "%",
    });

    Object.assign(document.getElementById("p1-player").style, {
        left: (randLeft * 5) + "%",
        top: (randTop * 5) + "%",
    });

    console.log(parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + " " + parseFloat(document.getElementById("d2-board").style.top.split("%")[0]))

}

document.addEventListener("keydown", function(event) {

    if (event.keyCode === 40 || event.keyCode === 83){
        playDirection = 0;
    } else if (event.keyCode === 38 || event.keyCode === 87) {
        playDirection = 1;
    } else if (event.keyCode === 37 || event.keyCode === 65) {
        playDirection = 2;
    } else if (event.keyCode === 39 || event.keyCode === 68) {
        playDirection = 3;    
    } else if (event.keyCode === 32){
        playDirection = -1;
    }

});

setInterval(function (){

    if (playDirection === 0){
        if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) <= 67){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) >= -99.5){
            document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) - 0.5 + "%";
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) < 97){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + 0.25 + "%";
        }
    } else if (playDirection === 1){
        if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) >= 30){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) <= -0.5){
            document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) + 0.5 + "%";
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) > 0){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) - 0.25 + "%";
        }
    } else if (playDirection === 2){
        if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) >= 30){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) <= -0.5){
            document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) + 0.5 + "%";
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) > 0){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) - 0.25 + "%";
        }
    } else if (playDirection === 3){
        if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) <= 67){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) >= -99.5){
            document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) - 0.5 + "%";
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) < 97){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) + 0.25 + "%";
        }
    }

    console.log(document.getElementById("p1-player").style.left + " " + document.getElementById("d2-board").style.left);
}, 20);

console.log(firebase.database()); 
loadMenu();