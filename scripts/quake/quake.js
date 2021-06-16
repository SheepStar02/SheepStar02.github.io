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

    Object.assign(document.getElementById("d2-board").style, {
        left:'-50%',
        top:'-50%'
    });

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
    if (playDirection === 0 && parseInt(document.getElementById("d2-board").style.top.split("%")[0]) >= -99){
        document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) - 0.5 + "%";
    } else if (playDirection === 1 && parseInt(document.getElementById("d2-board").style.top.split("%")[0]) <= -1){
        document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) + 0.5 + "%";
    } else if (playDirection === 2 && parseInt(document.getElementById("d2-board").style.left.split("%")[0]) <= -1){
        document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) + 0.5 + "%";
    } else if (playDirection === 3 && parseInt(document.getElementById("d2-board").style.left.split("%")[0]) >= -99){
        document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) - 0.5 + "%";
    }
}, 20);

console.log(firebase.database()); 
loadMenu();