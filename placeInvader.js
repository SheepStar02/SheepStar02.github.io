let background = document.getElementById("background");

let potatoes = [];

for (let i = 0; i < 24; i++){
    let invader = document.createElement("img");
    invader.src = "invader.png";
    invader.style = "width:40;height:40;position:absolute;left:" + (screen.width/4+(i%8)*45) + "px;top:" + (50+parseInt((i/8))*45) + "px";
    potatoes.push(invader);
    background.appendChild(invader);
}

let frameCount = 0;
let id = setInterval(frame, 200);
let interval = screen.width/100;

function frame(){

    frameCount ++;

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
