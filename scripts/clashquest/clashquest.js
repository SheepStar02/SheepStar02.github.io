let accountInfo = {
    saved : false,
    exp : 0,
    coins : 0,
    cards : {
        prince : "1 0 5",
    },
    completedLevels : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    chestsOpened : 0,
    chestsLeft : 0,
}

let gameInfo = {
    enemy : [],
    player : [],
    objectTranslations : [],
}

let gameInterval = "";

const JSONCardBaseInformation = JSON.parse('{"prince":"1 0 5", "barbarian":"1 0 3"}');
const JSONCardUnlockInformation = JSON.parse('{"a":"barbarian"}');
const JSONLevelInformation = JSON.parse('[[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,0,1,1,1,1,1,1,1,0,0,0,0,0]]');
const JSONEnemyInformation = JSON.parse('[{"name":"null","health":0,"damage":0},{"name":"cannon","health":30,"damage":50}]');
const JSONCardInformation = JSON.parse('{"giant":{"health":200,"damage":20},"barbarian":{"health":50,"damage":15,"description":"This website sucks sm ~ Barbarian"},"archer":{"health":25,"damage":25},"prince":{"health":20,"damage":30,"description":"Absolute abomination of a card. does not know how to turn his head. Only goes straight unlike the creator of this website. He does get quite angry like a typical colombian."}}');

const localStorage = window.localStorage;

function loadGame(){
    if (localStorage.getItem("saved") === null){
        saveData();
    } else {
        loadData();
    }

    let counter = 0;

    for (card of Object.keys(accountInfo.cards)){

        let [level, cards, count] = accountInfo.cards[card].split(" "), cardDiv = document.createElement("div");

        document.getElementById("statistics").appendChild(cardDiv);

        cardDiv.id = "card-selected-div-" + card;

        cardDiv.style = 'left:' + (33*(counter%3)) + '%;cursor:pointer;border-style:dashed;border-width:3px;border-radius:5px;border-color:aqua;background-image:url(/images/clash-quest/'+card+'-card.png);background-size:cover;padding-top:30%;position:absolute;width:30%;';
        cardDiv.onclick = function (event) {
            loadCard(event.srcElement.id.split("card-selected-div-")[1], level, cards, count);
        }
        if (card === "prince"){
            loadCard(card, level, cards, count);
        }

        counter++;
    }

    document.getElementById("open-chest-text").innerHTML = "Open Chests <br> [ x" + accountInfo.chestsLeft + " ]";
    document.getElementById("coin-count-bar").innerHTML = accountInfo.coins;
    console.log(accountInfo);
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

    let levelLocked = false;

    for (let level = 0; level < 16; level++){
        let levelSelect = document.createElement("div");
        levelSelect.style.left = (level%4)*22+7 + "%";
        levelSelect.style.top = Math.floor(level/4)*22+7 + "%";
        levelSelect.classList.add("level-container-highlight")
        document.getElementById("select-level-container").append(levelSelect);

        if (levelLocked){
            let levelIcon = document.createElement("img");
            levelIcon.src = "/images/clash-quest/level-locked.png";
            levelIcon.style = "width:" + (levelSelect.clientWidth/2) + "px;height:" + (levelSelect.clientWidth/2) + "px;left:25%;top:10%;position:absolute";
            levelSelect.append(levelIcon);
        } else {
            let levelNumber = document.createElement("p"), levelPlay = document.createElement("button");
            levelNumber.style = "color:yellowgreen;position:absolute;width:100%;text-align:center;font-size:24px;font-family:chopstick";
            levelNumber.innerHTML = "Level&nbsp&nbsp&nbsp" + (level+1)+"<br>" + accountInfo.completedLevels[level] + "%";
            levelSelect.append(levelNumber);

            if (accountInfo.completedLevels[level] < 100){
                levelLocked = true;
            }

            levelPlay.classList.add("level-select-hover");
            levelPlay.id = "levelPlayer" + level;
            levelPlay.onclick = function (event) {
                menuTransition("select-game-container", "main-game-container");

                gameInterval = setInterval(translateObjects, 15);

                let gameLevel = JSONLevelInformation[event.srcElement.id.split("levelPlayer")[1]], row = [], appended = 0;
                gameInfo.level = event.srcElement.id.split("levelPlayer")[1];

                for (let i = 0; i < 15; i++){

                    if (JSONEnemyInformation[gameLevel[i]].name !== "null"){
                        let cardDiv = document.createElement("div"), image = document.createElement("img"), healthOutline = document.createElement("div"), healthBar = document.createElement("div");
                        cardDiv.id = "enemyDivCount" + appended;
                        cardDiv.classList.add("enemy-object");
                        cardDiv.style = "left:" + ((appended%5)*20) + "%;top:" + (Math.floor(appended/5)*12.5) + "%;";
                        cardDiv.health = (level-1) * (JSONEnemyInformation[gameLevel[i]].health/10) + JSONEnemyInformation[gameLevel[i]].health;
                        cardDiv.damage = (level-1) * (JSONEnemyInformation[gameLevel[i]].damage/10) + JSONEnemyInformation[gameLevel[i]].damage;
                        image.src = "/images/clash-quest/" + JSONEnemyInformation[gameLevel[i]].name + ".png";
                        image.classList.add("enemy-image");
                        document.getElementById("game-tiles-container").append(cardDiv);
                        cardDiv.append(image);
                    }

                    row.push(JSONEnemyInformation[gameLevel[i]].name);
                    appended++;

                    if (appended % 5 === 0){
                        gameInfo.enemy.push(row), row = [];
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
                        gameInfo.player.push(cardDiv);
                        image.troopType = card;
                        image.src = "/images/clash-quest/" + card + "-stand.png";
                        image.id = "troopImageCount" + cardNum;
                        image.classList.add("troop-image");
                        image.classList.add("troop-"+card+"-image-hoverable");
                        image.onclick = function (event){

                            if (event.srcElement.attacking){
                                return;
                            }


                            let item = event.srcElement.id.split("troopImageCount")[1];
                            event.srcElement.classList.remove("troop-" +  event.srcElement.troopType + "-image-hoverable");
                            event.srcElement.src = "/images/clash-quest/" + event.srcElement.troopType + "-attack.png";

                            event.srcElement.attacking = true;

                            for (let i = 2; i >= 0; i--){
                                if (gameInfo.enemy[i][item%5] !== "null"){
                                    gameInfo.objectTranslations.push({id : "troopDivCount" + item, endRow : i});
                                    break;
                                }
                                if (i === 0){
                                    gameInfo.objectTranslations.push({id : "troopDivCount" + item, endRow : -1});
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
        }    
    }
}

function returnHome(){
    document.getElementById("end-screen-container").classList.add("hide");
    document.getElementById("end-screen-container").classList.remove("show");
    document.getElementById("select-level-container").innerHTML = "";
    menuTransition("main-game-container", "main-menu-container");

    if (accountInfo.completedLevels[gameInfo.level] !== 100){
        accountInfo.chestsLeft++;
    }

    accountInfo.completedLevels[gameInfo.level] = 100;

    console.log(accountInfo);
    console.log(accountInfo.completedLevels)

    saveData();
    loadGame();

    gameInfo = {enemy : [], player : [], objectTranslations : []};

}

function chestOpeningToHome() {
    menuTransition("chest-opening-container", "main-menu-container");
    setTimeout(function () {
        document.getElementById("chest-opening-return").classList.remove("final");
        document.getElementById("chest-opening-rewards").innerHTML = "";
        document.getElementById("chest-opening-button").style["background-image"] = "url('/images/clash-quest/woodchest.png')";
    }, 1000);
}

function translateObjects(){
    for (object of gameInfo.objectTranslations){
        document.getElementById(object.id).style.top = (parseInt(document.getElementById(object.id).style.top.split("%")[0]) - 1) + "%";
        if (document.getElementById(object.id).style.top.split("%")[0] <= object.endRow*12.5){
            document.getElementById(object.id).remove();
            gameInfo.objectTranslations.splice(gameInfo.objectTranslations.indexOf(object), 1);
            gameInfo.player.splice(object.id,1);
            
            if (object.endRow !== -1){
                gameInfo.enemy[object.endRow][parseInt(object.id.split("troopDivCount")[1]%5)] = "null";
                document.getElementById("enemyDivCount" + (object.endRow*5 + parseInt(object.id.split("troopDivCount")[1]%5))).remove();
            }
        }
    }

    let won = true;

    for (let i = 0; i < 3; i++){
        for (let a = 0; a < 5; a++){
            if (gameInfo.enemy[i][a] !== "null")
                won = false;
        }
    }

    if (won) {
        winGame();
    } else if (gameInfo.player.length === 0){
        loseGame();
    }
}

function openChestsMenu () {
    document.getElementById("chest-opening-remaining").innerHTML = "Chests Remaining: " + accountInfo.chestsLeft;
    menuTransition("main-menu-container", "chest-opening-container");
}

function openChests () {

    if (accountInfo.chestsLeft !== 0 && document.getElementById("chest-opening-button").style["background-image"] !== 'url("/images/clash-quest/woodchest-opened.png")'){
        document.getElementById("chest-opening-button").style["background-image"] = "url('/images/clash-quest/woodchest-opened.png')";
        
        accountInfo.chestsLeft --;

        let audio = new Audio('/images/clash-quest/chest-opening.mp3');
        audio.play();

        document.getElementById("chest-opening-remaining").innerHTML = "Chests Remaining: " + accountInfo.chestsLeft;
        document.getElementById("chest-opening-return").style.opacity = "0";

        let cardArray = [], completeCount = 0, allCards = Object.keys(accountInfo.cards); 
        let additionalCards = Math.floor(Math.random()*Math.min(allCards.length, 6)+1);
        accountInfo.chestsOpened ++;

        for (level of accountInfo.completedLevels){
            completeCount++;
            if (level !== 100){
                break;
            }
        }

        cardArray.push({type:"coins", count:Math.floor(Math.random()*(completeCount*100) + 50)});

        if (JSONCardUnlockInformation[String.fromCharCode(accountInfo.chestsOpened+96)] !== undefined) {
            cardArray.push({type:"newCard", card:JSONCardUnlockInformation[String.fromCharCode(accountInfo.chestsOpened+96)]});
        }

        for (let i = 0; i < additionalCards; i++){
            let cardChosen = Math.floor(Math.random() * allCards.length);
            cardArray.push({type:"card", card:allCards[cardChosen], count:Math.floor(Math.random()*((completeCount)*3)+completeCount)});
            allCards.splice(cardChosen, 1);
        }

        for (let i = 0; i < cardArray.length; i++){
            let card = document.createElement("button");
            card.classList.add("card-mystery"); 
            card.onclick = function (event) {
                if (cardArray[event.srcElement.indexNum].type !== "revealed"){

                    let item = cardArray[event.srcElement.indexNum];
                    let text = document.createElement("p");
                    let complete = true;
                    text.classList.add("chest-opening-resource-count");

                    if (item.type === "card" || item.type === "newCard"){
                        event.srcElement.style["background-image"] = "url('/images/clash-quest/chest-opening-card-" + item.card + ".png')";
                    } else if (item.type === "coins"){
                        event.srcElement.style["background-image"] = "url('/images/clash-quest/chest-opening-coins.png')";
                    }

                    if (item.type === "newCard"){
                        text.innerHTML = "unlocked";
                    } else {
                        text.innerHTML = "X" + item.count;
                    }

                    if (text.innerHTML.length > 4){
                        text.style["font-size"] = 10;
                        text.style.top = "70%";
                    }

                    event.srcElement.append(text);

                    cardArray[event.srcElement.indexNum].type = "revealed";

                    for (el of cardArray){
                        if (el.type !== "revealed"){
                            complete = false;
                            break;
                        }
                    }

                    if (complete){
                        document.getElementById("chest-opening-return").classList.add("final");
                        document.getElementById("chest-opening-return").style.opacity = "100";
                        saveData();
                        loadGame();
                    }
                }
            }
            card.indexNum = i;
            card.style.left = (i*12.5 + (8-cardArray.length) * 6.25) + "%";
            document.getElementById("chest-opening-rewards").appendChild(card);
        }

        for (item of cardArray){
            if (item.type === "newCard"){
                accountInfo.cards[item.card] = "1 0 " + JSONCardBaseInformation[item.card].split(" ")[2];
            } else if (item.type === "card"){
                [l, c, t] = accountInfo.cards[item.card].split(" ");
                accountInfo.cards[item.card] = l + " " + (parseInt(c)+item.count) + " " + t;
            } else if (item.type === "coins"){
                accountInfo.coins += item.count;
            }
        }

        saveData();
    }
}

function winGame() {
    let audio = new Audio('/images/clash-quest/win-sound.mp3');
    audio.play();
    document.getElementById("end-screen-container").classList.remove("hide");
    document.getElementById("end-screen-container").classList.add("show");
    clearInterval(gameInterval);
}

function loseGame() {
    clearInterval(gameInterval);
}

function menuTransition(fadeOut, fadeIn){

    document.getElementById("body").style.pointerEvents = "none";
    document.getElementById(fadeOut).classList.add("hide"); 
    document.getElementById(fadeOut).addEventListener("animationend", function () {
        this.style.opacity = "0";
        this.style.visibility = "hidden";
        this.classList.remove("hide");
        this.removeEventListener("animationend", arguments.callee);
        document.getElementById(fadeIn).style.visibility = "visible";
        document.getElementById(fadeIn).classList.add("show");
        document.getElementById("body").style.pointerEvents = "all";
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
            for (card of Object.keys(JSONCardBaseInformation)){
                if (localStorage.getItem(card) !== null){
                    accountInfo.cards[card] = localStorage.getItem(card);
                }   
            }
            continue;
        } else if (key === "completedLevels"){
            accountInfo[key] = localStorage.getItem(key).split(",").map(function(item) {
                return parseInt(item, 10);
            });
            continue;
        }
        accountInfo[key] = parseInt(localStorage.getItem(key));
    }
}

function resetAccount(){
    localStorage.clear();
    alert("Account Reset Success");
    location.reload();
}
console.log(localStorage);
loadGame();
    