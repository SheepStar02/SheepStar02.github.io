function enterOver() {
    document.getElementById("main-shed-image").src = "/images/Shed-Image-Over.png";
}

function enterOut() {
    document.getElementById("main-shed-image").src = "/images/Shed-Image.png";
}

function enterShed() {
    let image = document.getElementById("shed-image-div"), room = document.getElementById("room-menu-div");
    image.classList.add("hide");
    image.style.zIndex = "-1";

    setTimeout(() => {
        room.style.zIndex = "0";
        room.style.visibility = "visible";
        room.classList.add("show");
    }, 200);
}

function play2048() {
    window.open("2048", "_self");
}

function playClashQuest(){
    window.open("clashquest", "_self");
}

function playMinesweeper() {
    window.open("minesweeper", "_self");
}

function playQuake() {
    window.open("quake", "_self");
}

function quakePatchnotes() {

    console.log("HWLKDJFS");

    if (document.getElementById("play-quake-patchnotes").innerHTML === "View Patchnotes"){
        document.getElementById("patchnotes").style.visibility = "visible";
        document.getElementById("room-menu-div").style.visibility = "hidden";
        document.getElementById("play-quake-patchnotes").innerHTML = "Return";
        document.getElementById("patchnotes").appendChild(document.getElementById("play-quake-patchnotes"));
        document.getElementById("room-menu-div").removeChild(document.getElementById("play-quake-patchnotes"));
    } else {
        document.getElementById("patchnotes").style.visibility = "hidden";
        document.getElementById("room-menu-div").style.visibility = "visible";
        document.getElementById("play-quake-patchnotes").innerHTML = "View Patchnotes";
        document.getElementById("room-menu-div").appendChild(document.getElementById("play-quake-patchnotes"));
        document.getElementById("patchnotes").removeChild(document.getElementById("play-quake-patchnotes"));
    }
    
}