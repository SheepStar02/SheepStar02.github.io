let background = document.getElementById("background");

let potatoes = [];

console.log(screen.width);

for (let i = 0; i < 24; i++){
    let invader = document.createElement("img");
    invader.src = "invader.png";
    invader.style = "width:40;height:40;position:absolute;left:" + (screen.width/4+(i%8)*45) + "px;top:" + (50+parseInt((i/8))*45) + "px";
    potatoes.push(invader);
    background.appendChild(invader);
} 

let player = document.createElement("img");
player.src = "potato.png";
player.style = "width:70;height:50;position:absolute;left:" + (screen.width/2) + "px;top:" + (screen.height/2) + "px";
background.appendChild(player);

potatoes[4].style["visibility"] = "hidden";

let frameCount = 0;
let id = setInterval(frame, 10);
let interval = screen.width/100;
let moveleft = false;
let moveright = false;

function updateInvaders(){

    if ((parseInt(potatoes[0].style["left"]) <= screen.width/4 && interval < 0) || (parseInt(potatoes[7].style["left"]) >= screen.width*3/4 && interval > 0)){
        interval *= -1;
    }

    for (invader of potatoes){
        invader.style["left"] = parseInt(invader.style["left"])+interval;
    }

    for (invader of potatoes){

        if (invader.src.endsWith("invader.png")){
            invader.src = "invader2.png";
        }
        else{
            invader.src = "invader.png";
        }

        frameCount = 0;
    }
 
}

function frame(){

    frameCount ++;

    if (frameCount % 20 == 0){
        updateInvaders();
    }

    if (window.onkeypress){
        console.log(event.keyCode + " hello");
    }

    movePlayer();
    
}

function movePlayer(){

    if (moveleft){
        player.style["left"] = parseInt(player.style["left"]) + 1;
    }

    else if (moveright){
        player.style["left"] = parseInt(player.style["left"]) - 1;
    }

}

document.addEventListener('keydown', function(event) {

    if (event.keyCode == 68){

        moveleft = true;
    }

    else if (event.keyCode == 65){

        moveright = true;
    }
});

document.addEventListener('keyup', function(event) {

    if (event.keyCode == 68){
        moveleft = false;
    }

    else if (event.keyCode == 65){
        moveright = false;
    }
});