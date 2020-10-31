let background = document.getElementById("background");

let potatoes = [];

for (let i = 0; i < 24; i++){
    let invader = document.createElement("img");
    invader.src = "potato.png";
    invader.style = "width:70;height:50;position:absolute;left:" + ((i%8)*80) + "px;top:" + parseInt((i/8))*60 + "px";
    potatoes.push(invader);
    background.appendChild(invader);
}

let id = setInterval(frame, 50);
function frame(){

    for (invader of potatoes){
        invader.style["left"] = parseInt(invader.style["left"])+1;
    }
}

console.log(background);