let background = document.getElementById("background");

let potatoes = [];

for (let i = 0; i < 24; i++){
    let invader = document.createElement("img");
    invader.src = "potato2.png";
    invader.style = "width:70;height:50;position:absolute;left:" + ((i%8)*80) + "px;top:" + parseInt((i/8))*60 + "px";
    potatoes.push(invader);
    background.appendChild(invader);
}

let frameCount = 0;
let id = setInterval(frame, 50);
let interval = 10;

function frame(){

    frameCount ++;

    if (parseInt(potatoes[0].style["left"]) <= 0){
        interval = 10;
    }

    if (parseInt(potatoes[7].style["left"]) >= 1200){
        interval = -10;
    }

    for (invader of potatoes){
        invader.style["left"] = parseInt(invader.style["left"])+interval;
    }

    if (frameCount == 5){

        for (invader of potatoes){

            if (invader.src.endsWith("potato.png")){
                invader.src = "potato2.png";
            }
            else{
                invader.src = "potato.png";
            }

            frameCount = 0;
        }
    }
}