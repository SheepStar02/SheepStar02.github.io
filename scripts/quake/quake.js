let gameConfig = {
    started:false,
}

let selectedSkin = 0;

let volumeConfig = {
    master : 100,
    background : 100,
    kill : 100,
    shoot : 100,
}

/*
Constant local storage and map arrangement
*/
const skinNames = ["Default", "Bailey", "DCGasm", "Giant Skeleton", ":ESL:"];
const localStorage = window.localStorage;
const quakeMap = 
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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

/*
Adjust Window Height 
*/
function adjustWindow() {
    Object.assign(document.getElementById("d1-board").style,{
        width:(window.innerHeight*0.95)+"px",
        height:(window.innerHeight*0.95)+"px"});
}

/*
load main menu screen
*/
function loadMenu() {
    window.addEventListener('resize', adjustWindow);
    for (let i = 0; i < document.getElementsByClassName("ammo-reload-bar").length; i++){
        Object.assign(document.getElementsByClassName("ammo-reload-bar")[i].style, {
            left : (i*10) + "%",
            backgroundColor : "rgb(" + ((10-i)/10*255) + "," + (i/10*255) + ",0)",
        });
    }
    for (key of Object.keys(volumeConfig)){
        if (localStorage.getItem(key) !== null){
            volumeConfig[key] = parseInt(localStorage.getItem(key));
            document.getElementById("s1-volume-slider-" + key).value = volumeConfig[key];
        }
    };
    adjustVolume();
    adjustWindow();
}

/*
Reset unloading
*/
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    unloadStatus(gameConfig.playerTag);
});

/*
Loads player tag
*/
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

/*
Begins game
Hide main menu, set up player locations
*/
function beginGame(playerTag) { 
    gameConfig = {
        started : true,
        playerTag : playerTag,
        bulletDelay : 0,
        bulletPath : [],
        mouseMovement : [],
        playerCoordinates : [],
    }

    document.getElementById("m1-background-music").play();
    document.getElementById("t3-kill-counter").innerHTML = "Kills : 0";
    document.getElementById("b1-play-button").classList.add("hide");
    document.getElementById("b1-settings-button").classList.add("hide");
    document.getElementById("d2-board").style.cursor = "crosshair";
    document.getElementById("d6-user-customization").style.visibility = "hidden";
    document.getElementById("p1-player").style.visibility = "visible";
    document.getElementById("p1-player").style.backgroundImage = 'url("/assets/images/quake/player-skin-' + selectedSkin + '.png")';
    document.getElementById("d3-ammo-reload").style.opacity = "1";

    let randLeft = Math.floor(Math.random() * 20), randTop = Math.floor(Math.random() * 20);

    while (quakeMap[randTop][randLeft] !== 0){
        randLeft = Math.floor(Math.random() * 20), randTop = Math.floor(Math.random() * 20);
    }

    let boardLeft = randLeft * -10 + 50, boardTop = randTop * -10 + 50;

    boardLeft = Math.min(boardLeft, 0);
    boardLeft = Math.max(boardLeft, -100);
    boardTop = Math.min(boardTop, 0);
    boardTop = Math.max(boardTop, -100);

    Object.assign(document.getElementById("d2-board").style, {
        left: boardLeft + "%",
        top: boardTop + "%",
    });

    firebase.database().ref("players").get().then(snapshot => {
        for (let i = 0; i < 10; i++){
            if (i === playerTag){
                gameConfig.playerCoordinates[i] = {direction:-1,playing:true,x:(randLeft * 5),y:randTop*5,username:document.getElementById("i1-username-input").value,icon:selectedSkin};
            } else {
                gameConfig.playerCoordinates[i] = snapshot.val()[i];
                if (gameConfig.playerCoordinates[i].playing){
                    createEnemy(snapshot.val()[i], i);
                }
            }      
        }
        updateCoordinates();
    });
}

/*
Update current player coordinates and direction
*/
function updateCoordinates() {
    firebase.database().ref("players").child(gameConfig.playerTag).update({
        playing : gameConfig.started,
        direction : gameConfig.playerCoordinates[gameConfig.playerTag].direction,
        x : gameConfig.playerCoordinates[gameConfig.playerTag].x,
        y : gameConfig.playerCoordinates[gameConfig.playerTag].y,
        icon : gameConfig.playerCoordinates[gameConfig.playerTag].icon,
        username :gameConfig.playerCoordinates[gameConfig.playerTag].username,
    });
}

/*
Event listener keydown -> movement and shooting
*/
document.addEventListener("keydown", function(event) {

    if (!gameConfig.started){
        return;
    }

    originalDirection = gameConfig.playerCoordinates[gameConfig.playerTag].direction;

    if (event.keyCode === 40 || event.keyCode === 83){
        gameConfig.playerCoordinates[gameConfig.playerTag].direction = 0;
    } else if (event.keyCode === 38 || event.keyCode === 87) {
        gameConfig.playerCoordinates[gameConfig.playerTag].direction = 1;
    } else if (event.keyCode === 37 || event.keyCode === 65) {
        gameConfig.playerCoordinates[gameConfig.playerTag].direction = 2;
    } else if (event.keyCode === 39 || event.keyCode === 68) {
        gameConfig.playerCoordinates[gameConfig.playerTag].direction = 3;    
    } else if (event.keyCode === 32){
        fireBullet();
    }
    if (originalDirection !== gameConfig.playerCoordinates[gameConfig.playerTag]){
        updateCoordinates();
    }
});

/*
Event Listener -> track mouse location
*/
document.addEventListener("mousemove", function (event){
    gameConfig.mouseMovement = [event.clientX, event.clientY]
});

/*
Event Listener -> Volume input adjustment 
*/
document.addEventListener("input", function (event){
    if (event.srcElement.type === "range"){
        volumeConfig[event.srcElement.id.split("s1-volume-slider-")[1]] = parseInt(event.srcElement.value);
    }
    adjustVolume();
});

/*
Event Listener -> Fire bullet using mouse
*/
document.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.srcElement.id === "b1-play-button"){
        return;
    }
    fireBullet();
});

/*
Create bullet object to fire bullet
*/
function fireBullet() {
    if (!gameConfig.started || gameConfig.bulletDelay !== 0){
        return;
    }

    document.getElementById("m1-shoot-effect").load();
    document.getElementById("m1-shoot-effect").play();

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

    firebase.database().ref("bulletMovement").child(gameConfig.playerTag).set({
        moveLeft : (Math.sin(Math.atan((targetLeft-playerLeft)/(targetTop- playerTop)))*velocity)/document.getElementById("d2-board").clientWidth,
        moveTop : (Math.cos(Math.atan((targetLeft-playerLeft)/(targetTop- playerTop)))*velocity)/document.getElementById("d2-board").clientWidth,
    });

    gameConfig.bulletDelay = 50;
}

/*
Set volume changes
*/
function adjustVolume() {
    document.getElementById("m1-background-music").volume = (volumeConfig.master/100) * (volumeConfig.background/100);
    document.getElementById("m1-shoot-effect").volume = (volumeConfig.master/100) * (volumeConfig.shoot/100);
    document.getElementById("m1-kill-effect").volume = (volumeConfig.master/100) * (volumeConfig.kill/100);

    for (key of Object.keys(volumeConfig)){
        localStorage.setItem(key, volumeConfig[key]);
    }
}

/*
Unload player status 
*/
function unloadStatus(playerTag){
    if (!gameConfig.started){
        return;
    }

    firebase.database().ref("players").child(playerTag).update({
        playing : false,
        direction : 0,
        username : "",
        icon : 0,
        x : 0,
        y : 0,   
    });

    firebase.database().ref("bulletMovement").child(playerTag).update({
        moveLeft : 0,
        moveTop : 0,   
    });
}

/*
Creates new enemy player
*/
function createEnemy(snapshot, key) {
    let player = document.createElement("div"), name = document.createElement("p");
    name.classList.add("t5-player");
    name.id = "t5-player-" + key;
    name.innerHTML = snapshot.username;
    player.classList.add("p2-player");
    player.style.backgroundImage = 'url("/assets/images/quake/player-skin-' + snapshot.icon + '.png")';
    player.id = "p2-player-" + key;
    document.getElementById("d2-board").append(player);
    document.getElementById("d2-board").append(name);
}

/*
Removes all players, resetting the game
*/
function onDeath() {

    gameConfig = {started:false}
    unloadStatus(gameConfig.playerTag);
    document.getElementById("b1-play-button").classList.remove("hide");
    document.getElementById("b1-settings-button").classList.remove("hide");
    document.getElementById("d2-board").style.cursor = "default";
    document.getElementById("p1-player").style.visibility = "hidden";
    document.getElementById("d6-user-customization").style.visibility = "visible";
    document.getElementById("d5-player-tracker").style.visibility = "hidden";
    document.getElementById("d3-ammo-reload").style.opacity = "0";

    while (document.getElementsByClassName("p2-player").length !== 0){
        document.getElementById("d2-board").removeChild(document.getElementsByClassName("p2-player")[0]);
    }
    
    while (document.getElementsByClassName("d3-bullet fadeOut").length !== 0){
        document.getElementById("d2-board").removeChild(document.getElementsByClassName("d3-bullet fadeOut")[0]);   
    }

    while (document.getElementsByClassName("t5-player").length !== 0){
        document.getElementById("d2-board").removeChild(document.getElementsByClassName("t5-player")[0]);
    }
}

/*
Detect enemy bullets being fired
*/
firebase.database().ref("bulletMovement").on("child_changed", snapshot => {

    if (parseInt(snapshot.key) === gameConfig.playerTag || !gameConfig.started || (snapshot.val().moveLeft === 0 && snapshot.val().moveTop === 0)){
        return;
    }

    gameConfig.bulletPath.push({
        moveLeft : snapshot.val().moveLeft * document.getElementById("d2-board").clientWidth,
        moveTop : snapshot.val().moveTop * document.getElementById("d2-board").clientWidth,
        currentLeft : parseFloat(getComputedStyle(document.getElementById("p2-player-" + snapshot.key)).left.split("px")[0]) + document.getElementById("p1-player").clientWidth/2,
        currentTop : parseFloat(getComputedStyle(document.getElementById("p2-player-" + snapshot.key)).top.split("px")[0]) + document.getElementById("p1-player").clientWidth/2,
        keyFrames : [],
    });
});

/*
Detect enemy movement
*/
firebase.database().ref("players").on("child_changed", snapshot => {
    if (!gameConfig.started){
        return;
    }

    if (!gameConfig.playerCoordinates[parseInt(snapshot.key)].playing && snapshot.val().playing){
        createEnemy(snapshot.val(), snapshot.key);
        updateCoordinates();
    } else if (gameConfig.playerCoordinates[parseInt(snapshot.key)].playing && !snapshot.val().playing){
        if (parseInt(snapshot.key) === gameConfig.playerTag){
            onDeath();
        } else {
            document.getElementById("d2-board").removeChild(document.getElementById("p2-player-" + snapshot.key));
            document.getElementById("d2-board").removeChild(document.getElementById("t5-player-" + snapshot.key));
        }
        return;
    }

    gameConfig.playerCoordinates[parseInt(snapshot.key)] = snapshot.val();

});

/*
Main game interval -> Moves players and bullets 
*/
setInterval(function (){

    if (!gameConfig.started){
        return;
    }

    for (let playerNum = 0; playerNum < 10; playerNum++) {

        if (document.getElementById("p2-player-" + playerNum) === null && playerNum !== gameConfig.playerTag){
            continue;
        }

        if (playerNum === gameConfig.playerTag){
            if (gameConfig.playerCoordinates[playerNum].direction === 0 && quakeMap[Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].y+3)/5)][Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].x+2.99)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].y+3)/5)][Math.floor(gameConfig.playerCoordinates[gameConfig.playerTag].x/5)] === 0){
                if (parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) >= -99.5 && gameConfig.playerCoordinates[gameConfig.playerTag].y >= 23.5){
                    document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) - 0.5 + "%";
                    gameConfig.playerCoordinates[gameConfig.playerTag].y += 0.25;
                } else if (gameConfig.playerCoordinates[gameConfig.playerTag].y < 97){
                    gameConfig.playerCoordinates[gameConfig.playerTag].y += 0.25;
                }
            } else if (gameConfig.playerCoordinates[playerNum].direction === 1 && quakeMap[Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].y-0.01)/5)][Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].x+2.99)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].y-0.01)/5)][Math.floor(gameConfig.playerCoordinates[gameConfig.playerTag].x/5)] === 0){
                if (parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) <= -0.5 &&  gameConfig.playerCoordinates[gameConfig.playerTag].y <= 73.5){
                    document.getElementById("d2-board").style.top = parseFloat(document.getElementById("d2-board").style.top.split("%")[0]) + 0.5 + "%";
                    gameConfig.playerCoordinates[gameConfig.playerTag].y -= 0.25;
                } else if (gameConfig.playerCoordinates[gameConfig.playerTag].y > 0){
                    gameConfig.playerCoordinates[gameConfig.playerTag].y -= 0.25;
                }
            } else if (gameConfig.playerCoordinates[playerNum].direction === 2 && quakeMap[Math.floor(gameConfig.playerCoordinates[gameConfig.playerTag].y/5)][Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].x-0.01)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].y+2.99)/5)][Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].x-0.01)/5)] === 0){
                if (parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) <= -0.5 && gameConfig.playerCoordinates[gameConfig.playerTag].x <= 73.5){
                    document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) + 0.5 + "%";
                    gameConfig.playerCoordinates[gameConfig.playerTag].x -= 0.25;
                } else if (gameConfig.playerCoordinates[gameConfig.playerTag].x > 0){
                    gameConfig.playerCoordinates[gameConfig.playerTag].x -= 0.25;
                }
            } else if (gameConfig.playerCoordinates[playerNum].direction === 3 && quakeMap[Math.floor(gameConfig.playerCoordinates[gameConfig.playerTag].y/5)][Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].x+3)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].y+2.99)/5)][Math.floor((gameConfig.playerCoordinates[gameConfig.playerTag].x+3)/5)] === 0){
                if (parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) >= -99.5 && gameConfig.playerCoordinates[gameConfig.playerTag].x >= 23.5){
                    document.getElementById("d2-board").style.left = parseFloat(document.getElementById("d2-board").style.left.split("%")[0]) - 0.5 + "%";
                    gameConfig.playerCoordinates[gameConfig.playerTag].x += 0.25;
                } else if (gameConfig.playerCoordinates[gameConfig.playerTag].x < 97){
                    gameConfig.playerCoordinates[gameConfig.playerTag].x += 0.25;
                }
            }

            Object.assign(document.getElementById("p1-player").style, {
                left : gameConfig.playerCoordinates[gameConfig.playerTag].x + "%",
                top : gameConfig.playerCoordinates[gameConfig.playerTag].y + "%",
            });

        } else {

            if (gameConfig.playerCoordinates[playerNum].direction === 0 && quakeMap[Math.floor((gameConfig.playerCoordinates[playerNum].y+3)/5)][Math.floor((gameConfig.playerCoordinates[playerNum].x+2.99)/5)] === 0
                && quakeMap[Math.floor((gameConfig.playerCoordinates[playerNum].y+3)/5)][Math.floor(gameConfig.playerCoordinates[playerNum].x/5)] === 0){
                gameConfig.playerCoordinates[playerNum].y += 0.25;
            } else if (gameConfig.playerCoordinates[playerNum].direction === 1 && quakeMap[Math.floor((gameConfig.playerCoordinates[playerNum].y-0.01)/5)][Math.floor((gameConfig.playerCoordinates[playerNum].x+2.99)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[playerNum].y-0.01)/5)][Math.floor(gameConfig.playerCoordinates[playerNum].x/5)] === 0){
                gameConfig.playerCoordinates[playerNum].y -= 0.25;
            } else if (gameConfig.playerCoordinates[playerNum].direction === 2 && quakeMap[Math.floor(gameConfig.playerCoordinates[playerNum].y/5)][Math.floor((gameConfig.playerCoordinates[playerNum].x-0.01)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[playerNum].y+2.99)/5)][Math.floor(gameConfig.playerCoordinates[playerNum].x/5)] === 0){
                gameConfig.playerCoordinates[playerNum].x -= 0.25;
            } else if (gameConfig.playerCoordinates[playerNum].direction === 3 && quakeMap[Math.floor(gameConfig.playerCoordinates[playerNum].y/5)][Math.floor((gameConfig.playerCoordinates[playerNum].x+3)/5)] === 0
            && quakeMap[Math.floor((gameConfig.playerCoordinates[playerNum].y+2.99)/5)][Math.floor((gameConfig.playerCoordinates[playerNum].x+3)/5)] === 0){
                gameConfig.playerCoordinates[playerNum].x += 0.25;
            }
            Object.assign(document.getElementById("p2-player-" + playerNum).style, {
                left : gameConfig.playerCoordinates[playerNum].x + "%",
                top : gameConfig.playerCoordinates[playerNum].y + "%",
            });
            Object.assign(document.getElementById("t5-player-" + playerNum).style, {
                left : (gameConfig.playerCoordinates[playerNum].x-5) + "%",
                top : gameConfig.playerCoordinates[playerNum].y-2 + "%",
            });
        }
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

        for (let player = 0; player < 10; player++){
            if (player === gameConfig.playerTag || !gameConfig.playerCoordinates[player].playing){
                continue;
            } 

            if (newLeft > parseFloat(getComputedStyle(document.getElementById("p2-player-" + player)).left.split("px")[0])
                && newLeft < (parseFloat(getComputedStyle(document.getElementById("p2-player-" + player)).left.split("px")[0]) + parseFloat(getComputedStyle(document.getElementById("p2-player-" + player)).width.split("px")[0]))
                && (newTop > parseFloat(getComputedStyle(document.getElementById("p2-player-" + player)).top.split("px")[0]))
                && newTop < (parseFloat(getComputedStyle(document.getElementById("p2-player-" + player)).top.split("px")[0]) + parseFloat(getComputedStyle(document.getElementById("p2-player-" + player)).width.split("px")[0]))){
                    document.getElementById("m1-kill-effect").play();
                    document.getElementById("t3-kill-counter").innerHTML = "Kills : " + (parseInt(document.getElementById("t3-kill-counter").innerHTML.split("Kills : ")[1])+1);
                    firebase.database().ref("players").child(player).update({
                        playing:false,
                    });
            }
        }
    }

    let solo = true, nearest = 10000, angle = 0;

    for (let i = 0; i < 10; i++){
        if (i !== gameConfig.playerTag && gameConfig.playerCoordinates[i].playing && Math.sqrt(Math.pow((gameConfig.playerCoordinates[i].x - gameConfig.playerCoordinates[gameConfig.playerTag].x), 2) + Math.pow((gameConfig.playerCoordinates[i].y - gameConfig.playerCoordinates[gameConfig.playerTag].y), 2)) < nearest){
            nearest = Math.sqrt(Math.pow((gameConfig.playerCoordinates[i].x - gameConfig.playerCoordinates[gameConfig.playerTag].x), 2) + Math.pow((gameConfig.playerCoordinates[i].y - gameConfig.playerCoordinates[gameConfig.playerTag].y), 2));
            angle = Math.atan(Math.abs(gameConfig.playerCoordinates[gameConfig.playerTag].x - gameConfig.playerCoordinates[i].x)/Math.abs(gameConfig.playerCoordinates[gameConfig.playerTag].y - gameConfig.playerCoordinates[i].y)) * 180 / Math.PI;
            if (gameConfig.playerCoordinates[gameConfig.playerTag].y < gameConfig.playerCoordinates[i].y){
                if (gameConfig.playerCoordinates[gameConfig.playerTag].x < gameConfig.playerCoordinates[i].x){
                    angle = 180-angle;
                } else {
                    angle += 180;
                }
            } else {
                if (gameConfig.playerCoordinates[gameConfig.playerTag].x > gameConfig.playerCoordinates[i].x){
                    angle = 360 - angle;
                }
            }
            solo = false;
        }
    }

    if (solo){
        document.getElementById("d5-player-tracker").style.visibility = "hidden";
    } else {
        document.getElementById("d5-player-tracker").style.visibility = "visible";
        document.getElementById("d5-player-tracker").style.transform = "rotate(" + angle + "deg)";
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

}, 20);

function selectSkin(skin){
    if (selectedSkin+skin < 0 || selectedSkin+skin > 4){
        return;
    }
    selectedSkin += skin;
    document.getElementById("d7-skin-preview").style.backgroundImage = 'url("/assets/images/quake/player-skin-' + selectedSkin + '.png")';
    document.getElementById("t4-skin-name").innerHTML = skinNames[selectedSkin];
}

/*
Open settings menu
*/
function openSettings() {
    document.getElementById("d6-user-customization").style.visibility = "hidden";
    document.getElementById("b1-play-button").classList.add("hide");
    document.getElementById("b1-settings-button").classList.add("hide"); 
    setTimeout(function () {document.getElementById("d4-settings-panel").style.visibility = "visible"},200);
}

/*
Close settings menu
*/
function closeSettings() {
    document.getElementById("d6-user-customization").style.visibility = "visible";
    document.getElementById("b1-play-button").classList.remove("hide");
    document.getElementById("b1-settings-button").classList.remove("hide");
    document.getElementById("d4-settings-panel").style.visibility = "hidden";
}

/*
Load startup menu
*/
loadMenu();