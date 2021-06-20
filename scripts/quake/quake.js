let gameConfig = {
    started : false,
    playDirection : -1,
    playerTag : -1,
    bulletDelay : 0,
    bulletPath : [],
    mouseMovement : [],
}

const quakeMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
    [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

function adjustWindow() {
    console.log("changing");
    Object.assign(document.getElementById("d1-board").style,{
        width:(window.innerHeight*0.95)+"px",
        height:(window.innerHeight*0.95)+"px"});
}

function loadMenu() {
    window.addEventListener('resize', adjustWindow);
    for (let i = 0; i < document.getElementsByClassName("ammo-reload-bar").length; i++){
        Object.assign(document.getElementsByClassName("ammo-reload-bar")[i].style, {
            left : (i*10) + "%",
            backgroundColor : "rgb(" + ((10-i)/10*255) + "," + (i/10*255) + ",0)",
        })
    }
    adjustWindow();
}

function loadPlayer() {
    firebase.database().ref("players").get().then((snapshot) => {
        for (let i = 0; i < 10; i++){
            if (!snapshot.val()[i].playing){

                beginGame(i);
                break;
            }
        }
    });
}

function beginGame(playerTag) { 

    document.getElementById("b1-play-button").classList.add("hide");
    document.getElementById("d2-board").style.cursor = "crosshair";
    document.getElementById("p1-player").style.visibility = "visible";
    document.getElementById("d3-ammo-reload").style.visibility = "visible";

    gameConfig.started = true;
    gameConfig.playerTag = playerTag;

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

    firebase.database().ref("players").child(gameConfig.playerTag).update({
        playing : true,
        x : document.getElementById("p1-player").style.left,
        y : document.getElementById("p1-player").style.top,   
    });

    console.log(parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + " " + parseFloat(document.getElementById("d2-board").style.top.split("%")[0]))

}

document.addEventListener("keydown", function(event) {

    if (event.keyCode === 40 || event.keyCode === 83){
        gameConfig.playDirection = 0;
    } else if (event.keyCode === 38 || event.keyCode === 87) {
        gameConfig.playDirection = 1;
    } else if (event.keyCode === 37 || event.keyCode === 65) {
        gameConfig.playDirection = 2;
    } else if (event.keyCode === 39 || event.keyCode === 68) {
        gameConfig.playDirection = 3;    
    } else if (event.keyCode === 32){
        if (!gameConfig.started || gameConfig.bulletDelay !== 0){
            return;
        }

        let playerLeft = (parseFloat(getComputedStyle(document.getElementById("p1-player")).left.split("px")[0]) + parseFloat(getComputedStyle(document.getElementById("d2-board")).left.split("px")[0])) + document.getElementById("p1-player").clientWidth/2,
        playerTop = (parseFloat(getComputedStyle(document.getElementById("p1-player")).top.split("px")[0]) + parseFloat(getComputedStyle(document.getElementById("d2-board")).top.split("px")[0])) + document.getElementById("p1-player").clientWidth/2,
        targetLeft = gameConfig.mouseMovement[0] - (parseFloat(getComputedStyle(document.getElementById("d1-board"))["margin-left"].split("px")[0])+20),
        targetTop = gameConfig.mouseMovement[1] - (parseFloat(getComputedStyle(document.getElementById("d1-board"))["top"].split("px")[0])+20),
        velocity = document.getElementById("d2-board").clientWidth * 0.03;
        
        if (targetTop - playerTop < 0){
            velocity *= -1;
        }
    
        gameConfig.bulletPath.push({
            moveLeft : Math.sin(Math.atan((targetLeft-playerLeft)/(targetTop- playerTop)))*velocity,
            moveTop : Math.cos(Math.atan((targetLeft-playerLeft)/(targetTop- playerTop)))*velocity,
            currentLeft: parseFloat(getComputedStyle(document.getElementById("p1-player")).left.split("px")[0]) + document.getElementById("p1-player").clientWidth/2,
            currentTop : parseFloat(getComputedStyle(document.getElementById("p1-player")).top.split("px")[0]) + document.getElementById("p1-player").clientWidth/2,
            keyFrames : [],
        });

        firebase.database().ref("bulletMovement").child(gameConfig.playerTag).update({
            moveLeft : (Math.sin(Math.atan((targetLeft-playerLeft)/(targetTop- playerTop)))*velocity)/document.getElementById("d2-board").clientWidth,
            moveTop : (Math.cos(Math.atan((targetLeft-playerLeft)/(targetTop- playerTop)))*velocity)/document.getElementById("d2-board").clientWidth,
        });

        gameConfig.bulletDelay = 50;
    }

});

document.addEventListener("mousemove", function (event){
    gameConfig.mouseMovement = [event.clientX, event.clientY]
});

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    firebase.database().ref("players").child(gameConfig.playerTag).update({
        playing : false,
        x : 0,
        y : 0,   
    });

    firebase.database().ref("bulletMovement").child(gameConfig.playerTag).update({
        moveLeft : 0,
        moveTop : 0,   
    });
});

firebase.database().ref("bulletMovement").on("child_changed", snapshot => {
    console.log(snapshot.val())

    if (parseInt(snapshot.key) === gameConfig.playerTag){
        return;
    }

    console.log(gameConfig.playerTag + " " + snapshot.key)

    gameConfig.bulletPath.push({
        moveLeft : snapshot.val().moveLeft * document.getElementById("d2-board").clientWidth,
        moveTop : snapshot.val().moveTop * document.getElementById("d2-board").clientWidth,
        currentLeft : parseFloat(getComputedStyle(document.getElementById("p2-player-" + snapshot.key)).left.split("px")[0]) + document.getElementById("p1-player").clientWidth/2,
        currentTop : parseFloat(getComputedStyle(document.getElementById("p2-player-" + snapshot.key)).top.split("px")[0]) + document.getElementById("p1-player").clientWidth/2,
        keyFrames : [],
    });
})

setInterval(function (){

    if (!gameConfig.started){
        return;
    }

    let updateMovement = true;

    if (gameConfig.playDirection === 0 && quakeMap[Math.floor(((parseFloat(document.getElementById("p1-player").style.top.split("%")[0])+3))/5)][Math.floor(((parseFloat(document.getElementById("p1-player").style.left.split("%")[0])+2.99))/5)] === 0
        && quakeMap[Math.floor(((parseFloat(document.getElementById("p1-player").style.top.split("%")[0])+3))/5)][Math.floor((parseFloat(document.getElementById("p1-player").style.left.split("%")[0]))/5)] === 0){
        if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) <= 67){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) >= -99.5){
            document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) - 0.5 + "%";
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) < 97){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) + 0.25 + "%";
        }
    } else if (gameConfig.playDirection === 1 && quakeMap[Math.floor(((parseFloat(document.getElementById("p1-player").style.top.split("%")[0])-0.01))/5)][Math.floor(((parseFloat(document.getElementById("p1-player").style.left.split("%")[0])+2.99))/5)] === 0
    && quakeMap[Math.floor(((parseFloat(document.getElementById("p1-player").style.top.split("%")[0])-0.01))/5)][Math.floor((parseFloat(document.getElementById("p1-player").style.left.split("%")[0]))/5)] === 0){
        if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) >= 30){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) <= -0.5){
            document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) + 0.5 + "%";
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) > 0){
            document.getElementById("p1-player").style.top = parseFloat(document.getElementById("p1-player").style.top.split("%")[0]) - 0.25 + "%";
        }
    } else if (gameConfig.playDirection === 2 && quakeMap[Math.floor((parseFloat(document.getElementById("p1-player").style.top.split("%")[0]))/5)][Math.floor(((parseFloat(document.getElementById("p1-player").style.left.split("%")[0])-0.01))/5)] === 0
    && quakeMap[Math.floor(((parseFloat(document.getElementById("p1-player").style.top.split("%")[0])+2.99))/5)][Math.floor(((parseFloat(document.getElementById("p1-player").style.left.split("%")[0])-0.01))/5)] === 0){
        if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) >= 30){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) <= -0.5){
            document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) + 0.5 + "%";
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) - 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) > 0){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) - 0.25 + "%";
        }
    } else if (gameConfig.playDirection === 3 && quakeMap[Math.floor((parseFloat(document.getElementById("p1-player").style.top.split("%")[0]))/5)][Math.floor(((parseFloat(document.getElementById("p1-player").style.left.split("%")[0])+3))/5)] === 0
    && quakeMap[Math.floor(((parseFloat(document.getElementById("p1-player").style.top.split("%")[0])+2.99))/5)][Math.floor(((parseFloat(document.getElementById("p1-player").style.left.split("%")[0])+3))/5)] === 0){
        if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0])*2 + parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) <= 67){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) >= -99.5){
            document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) - 0.5 + "%";
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) + 0.25 + "%";
        } else if (parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) < 97){
            document.getElementById("p1-player").style.left = parseFloat(document.getElementById("p1-player").style.left.split("%")[0]) + 0.25 + "%";
        }
    } else {
        updateMovement = false;
    }

    for (bullet of gameConfig.bulletPath){
        
        let newBullet = document.createElement("div"), newLeft = bullet.currentLeft + bullet.moveLeft, newTop = bullet.currentTop + bullet.moveTop;

        Object.assign(newBullet.style, {
            left : newLeft + "px",
            top : newTop + "px",
        });

        newBullet.classList.add("d3-bullet", "fadeOut");

        bullet.currentLeft = newLeft, bullet.currentTop = newTop, bullet.keyFrames.push(newBullet);

        document.getElementById("d2-board").append(newBullet);

        if (quakeMap[Math.floor((newTop*20)/document.getElementById("d2-board").clientWidth)][Math.floor((newLeft*20)/document.getElementById("d2-board").clientHeight)] === 1){
            for (frame of bullet.keyFrames){
                document.getElementById("d2-board").removeChild(frame);
            }
            gameConfig.bulletPath.splice(gameConfig.bulletPath.indexOf(bullet), 1);
        }
    }
    
    if (gameConfig.bulletDelay !== 0){
        document.getElementById("t1-ammo-status").innerHTML = "Reloading...";
        gameConfig.bulletDelay -= 1;
        document.getElementById("d4-ammo-reload-bar-" + Math.floor(((49-gameConfig.bulletDelay)/5))).style.visibility = "visible";
    } else {
        for (let i = 0; i < document.getElementsByClassName("ammo-reload-bar").length; i++){
            document.getElementsByClassName("ammo-reload-bar")[i].style.visibility = "hidden";
        }
        document.getElementById("t1-ammo-status").innerHTML = "Ready!";
    }

    if (updateMovement){
        firebase.database().ref("players").child(gameConfig.playerTag).update({
            playing : true,
            x : document.getElementById("p1-player").style.left,
            y : document.getElementById("p1-player").style.top,   
        });
    }

    firebase.database().ref("players").get().then((snapshot) => {
        for (let i = 0; i < 10; i++){
            if (snapshot.val()[i].playing && i !== gameConfig.playerTag){
                if (document.getElementById("p2-player-" + i) === null){
                    let newPlayer = document.createElement("div");
                    newPlayer.id = "p2-player-" + i;
                    newPlayer.classList.add("p2-player");
                    document.getElementById("d2-board").append(newPlayer);
                }
                Object.assign(document.getElementById("p2-player-"+i).style, {
                    left : snapshot.val()[i].x,
                    top : snapshot.val()[i].y,
                });
            }
        }
    });

}, 20);

console.log(firebase.database()); 
loadMenu();