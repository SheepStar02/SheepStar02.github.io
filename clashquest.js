let accountInfo = {
    saved : false,
    exp : 0,
    cards : {
        prince : "1 0 5",
    },
    coins : 0,
    completedLevels : 1,
    wins : 0,
    currentGame : [],
    objectTranslations : [],
}

let gameInterval = "";

const JSONLevelInformation = JSON.parse('[{"cannon":5,"null":10},{"cannon":12,"null":4}]');
const JSONEnemyInformation = JSON.parse('{"cannon":{"health":30,"damage":50}}');
const JSONCardInformation = JSON.parse('{"giant":{"health":200,"damage":20},"barbarian":{"health":50,"damage":15},"archer":{"health":25,"damage":25},"prince":{"health":20,"damage":30,"description":"Absolute abomination of a card. does not know how to turn his head. Only goes straigh unlike the creator of this website. He does get quite angry like a typical colombian."}}');

const localStorage = window.localStorage;

function loadGame(){

    console.log(accountInfo);
    console.log(localStorage)

    if (localStorage.getItem("saved") === null){
        saveData();
    } else {
        loadData();
    }

    for (card of Object.keys(accountInfo.cards)){

        let [level, cards, count] = accountInfo.cards[card].split(" "), cardDiv = document.createElement("div");

        document.getElementById("statistics").appendChild(cardDiv);

        cardDiv.outerHTML = '<div id = "' + card + '"style = "margin-left:auto;margin-right:auto;position:relative;width:85%;height:25%;">'
            + '<button style = "border-color:aqua;cursor:pointer;border-width:3px;border-style:dashed;border-radius:20px;width:100%;height:100%;background-color:transparent;position:absolute;text-align:left">'
            + '<img src = "/images/clash-quest/prince-card.png"style="top:5px;width:100px;height:100px;position:absolute">'
            + '<p style="position:relative;margin-top:auto;margin-bottom:auto;left:10%;font-size:32px;font-family:chopstick;color:green;text-align:center">' + card + "<br> ( x" + count + " )";

        if (card === "prince"){
            loadCard(card, level, cards, count);
        }
    }
}

function loadCard(card, level, cards, count){

    let health = (level-1) * (JSONCardInformation[card].health/10) + JSONCardInformation[card].health,
        damage = (level-1) * (JSONCardInformation[card].damage/10) + JSONCardInformation[card].damage,
        required = level * level * 2 - level,
        cost = level * level * 20
        description = JSONCardInformation[card].description;

    document.getElementById("card-name").innerHTML = card;
    document.getElementById("card-image").src = "/images/clash-quest/" + card + "-card.png";
    document.getElementById("card-health").innerHTML = "Health : " + health;
    document.getElementById("card-damage").innerHTML = "Damage : " + damage;
    document.getElementById("card-description").innerHTML = description;
    document.getElementById("card-level").innerHTML = "Level : " + level;
    document.getElementById("card-count").innerHTML = "Count : " + count;
    document.getElementById("upgrade-cards").innerHTML = "Cards : " + cards + "/" + required;
    document.getElementById("upgrade-health").innerHTML = "Health : +" + JSONCardInformation[card].health/10;
    document.getElementById("upgrade-damage").innerHTML = "Damage : +" + JSONCardInformation[card].damage/10;
    document.getElementById("upgrade-button").innerHTML = "Upgrade for " + cost + " bitcoin";
}

function battle(){

    menuTransition("main-menu-container", "select-game-container");

    for (let level = 0; level < 16; level++){
        let levelSelect = document.createElement("div");
        levelSelect.style.left = (level%4)*22+7 + "%";
        levelSelect.style.top = Math.floor(level/4)*22+7 + "%";
        levelSelect.classList.add("level-container-highlight")
        document.getElementById("select-game-container").append(levelSelect);

        if (level > accountInfo.completedLevels){
            let levelIcon = document.createElement("img");
            levelIcon.src = "/images/clash-quest/level-locked.png";
            levelIcon.style = "width:" + (levelSelect.clientWidth/2) + "px;height:" + (levelSelect.clientWidth/2) + "px;left:25%;top:10%;position:absolute";
            levelSelect.append(levelIcon);
        } else {
            let levelNumber = document.createElement("p"), levelPlay = document.createElement("button");
            levelNumber.style = "color:yellowgreen;position:absolute;width:100%;text-align:center;font-size:24px;font-family:chopstick";
            levelNumber.innerHTML = "Level&nbsp&nbsp&nbsp" + (level+1)+"<br>70%";
            levelSelect.append(levelNumber);

            levelPlay.classList.add("level-select-hover");
            levelPlay.id = "levelPlayer" + level;
            levelPlay.onclick = function (event) {
                menuTransition("select-game-container", "main-game-container");

                gameInterval = setInterval(translateObjects, 12);

                let gameLevel = JSONLevelInformation[event.srcElement.id.split("levelPlayer")[1]], row = [], appended = 0;
                for (defense of Object.keys(gameLevel)){
                    for (let i = 0; i < gameLevel[defense]; i++){

                        if (defense !== "null"){
                            let cardDiv = document.createElement("div"), image = document.createElement("img"), healthOutline = document.createElement("div"), healthBar = document.createElement("div");
                            cardDiv.id = "enemyDivCount" + appended;
                            cardDiv.classList.add("enemy-object");
                            cardDiv.style = "left:" + ((appended%5)*20) + "%;top:" + (Math.floor(appended/5)*12.5) + "%;";
                            cardDiv.health = (level-1) * (JSONEnemyInformation[defense].health/10) + JSONEnemyInformation[defense].health;
                            cardDiv.damage = (level-1) * (JSONEnemyInformation[defense].damage/10) + JSONEnemyInformation[defense].damage;
                            image.src = "/images/clash-quest/" + defense + ".png";
                            image.classList.add("enemy-image");
                            document.getElementById("game-tiles-container").append(cardDiv);
                            cardDiv.append(image);
                            row.push(defense);
                        } else {
                            row.push("");
                        }

                        appended++;

                        if (appended % 5 === 0){
                            accountInfo.currentGame.push(row), row = [];
                        }
                    }
                }

                let cardNum = 0;
                for (card of Object.keys(accountInfo.cards)){
                    let [level, count] = [accountInfo.cards[card].split(" ")[0], accountInfo.cards[card].split(" ")[2]];
                    for (let troop = 0; troop < count; troop++){
                        let cardDiv = document.createElement("div"), image = document.createElement("img"), healthOutline = document.createElement("div"), healthBar = document.createElement("div");
                        cardDiv.classList.add("troop-object");
                        cardDiv.id = "troopDivCount" + cardNum;
                        cardDiv.style = "left:" + ((cardNum%5)*20) + "%;top:" + (57+Math.floor(cardNum/5)*12.5) + "%;";
                        cardDiv.health = (level-1) * (JSONCardInformation[card].health/10) + JSONCardInformation[card].health;
                        cardDiv.damage = (level-1) * (JSONCardInformation[card].damage/10) + JSONCardInformation[card].damage;
                        image.troopType = card;
                        image.src = "/images/clash-quest/" + card + "-stand.png";
                        image.id = "troopImageCount" + cardNum;
                        image.classList.add("troop-image");
                        image.classList.add("troop-image-hoverable");
                        image.onclick = function (event){

                            if (event.srcElement.attacking){
                                return;
                            }


                            let item = event.srcElement.id.split("troopImageCount")[1];
                            event.srcElement.classList.remove("troop-image-hoverable");
                            event.srcElement.src = "/images/clash-quest/" + event.srcElement.troopType + "-attack.png";
                            event.srcElement.attacking = true;
                            for (let i = 2; i >= 0; i--){
                                console.log(accountInfo.currentGame[i])
                                console.log("ALKDJFAKLSDJAF   " + i)
                                if (accountInfo.currentGame[i][item%5] !== ""){
                                    accountInfo.objectTranslations.push({id : "troopDivCount" + item, endRow : i});
                                    console.log(item + " " + i)
                                    break;
                                }
                                if (i === 0){
                                    accountInfo.objectTranslations.push({id : "troopDivCount" + item, endRow : -1});
                                }
                            }
                        }

                        document.getElementById("game-tiles-container").append(cardDiv);
                        cardDiv.append(image);
                        cardNum++;
                    }
                }
            }
            levelPlay.innerHTML = "Play";
            levelSelect.append(levelPlay);
            console.log(accountInfo);
        }
        
    }
}

function returnHome(){
    document.getElementById("end-screen-container").classList.add("hide");
    document.getElementById("end-screen-container").classList.remove("show");
    menuTransition("main-game-container", "main-menu-container");
    accountInfo.currentGame = [];
    console.log(document.getElementById("end-screen-container").classList + "slkjdfalks");
}

function translateObjects(){
    for (object of accountInfo.objectTranslations){
        document.getElementById(object.id).style.top = (parseInt(document.getElementById(object.id).style.top.split("%")[0]) - 1) + "%";
        if (document.getElementById(object.id).style.top.split("%")[0] <= object.endRow*25){
            document.getElementById(object.id).remove();
            accountInfo.objectTranslations.splice(accountInfo.objectTranslations.indexOf(object), 1);
            
            if (object.endRow !== -1){
                accountInfo.currentGame[object.endRow][parseInt(object.id.split("troopDivCount")[1]%5)] = "";
                document.getElementById("enemyDivCount" + (object.endRow*5 + parseInt(object.id.split("troopDivCount")[1]%5))).remove();
            }
        }
    }

    let won = true;
    for (let i = 0; i < 3; i++){
        for (let a = 0; a < 5; a++){
            if (accountInfo.currentGame[i][a] !== "")
                won = false;
        }
    }
    if (won) {
        winGame();
    }
}

function winGame() {
    let audio = new Audio('/images/clash-quest/win-sound.mp3');
    audio.play();
    document.getElementById("end-screen-container").classList.remove("hide");
    document.getElementById("end-screen-container").classList.add("show");
    clearInterval(gameInterval);
}

function menuTransition(fadeOut, fadeIn){

    document.getElementById(fadeOut).classList.add("hide"); 
    document.getElementById(fadeOut).addEventListener("animationend", function () {
        this.style.opacity = "0";
        this.style.visibility = "hidden";
        this.classList.remove("hide");
        this.removeEventListener("animationend", arguments.callee);
        document.getElementById(fadeIn).style.visibility = "visible";
        document.getElementById(fadeIn).classList.add("show");
        document.getElementById(fadeIn).addEventListener("animationend", function () {
            this.style.opacity = "100";
            this.classList.remove("show");
            this.removeEventListener("animationend", arguments.callee);
        });
    }); 
}

function saveData() {

    for (key of Object.keys(accountInfo)){

        if (key === "cards"){
            for (card of Object.keys(accountInfo.cards)){
                localStorage.setItem(card, accountInfo.cards[card]);
            }
            continue;
        }
        
        localStorage.setItem(key, accountInfo[key]);
    }
}

function loadData() {

    for (key of Object.keys(accountInfo)){
        if (key === "cards"){
            for (card of Object.keys(accountInfo.cards)){
                accountInfo.cards[card] = localStorage.getItem(card);
            }
            continue;
        }
        accountInfo[key] = localStorage.getItem(key);
    }
}

localStorage.clear();
loadGame();
    