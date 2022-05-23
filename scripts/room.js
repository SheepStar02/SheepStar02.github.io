//New socket connection and url parameters
const socket = new WebSocket("wss://webserveresl.herokuapp.com"), urlParams = new URLSearchParams(window.location.search);

//Stored socket response functions
let socketId = {}, gameStatus = {optionChoice: "playerturn", tradeInterval: 0, gameComplete: false};

const boardLocationNames = JSON.parse(`{"bottom":[{"type":"PROPERTY","name":"MEDITER AVENUE","color":"rgb(149,84,54)","value":60,"rent":[2,10,30,90,160,250]},{"type":"CHEST","name":"COMMUNITY CHEST","img":"/images/Monopoly/chest-icon.png"},{"type":"PROPERTY","name":"BALTIC AVENUE","color":"rgb(149,84,54)","value":60,"rent":[4,20,60,180,320,450]},{"type":"TAX","name":"INCOME TAX","value":200,"img":"/images/Monopoly/tax-income-icon.png"},{"type":"RAILROAD","name":"READING RAILROAD","value":200,"img":"/images/Monopoly/railroad-icon.png","rent":[25,50,100,200]},{"type":"PROPERTY","name":"ORIENTAL AVENUE","color":"rgb(170,224,250)","value":100,"rent":[6,30,90,270,400,550]},{"type":"CHANCE","name":"CHANCE","img":"/images/Monopoly/chance-icon-1.png"},{"type":"PROPERTY","name":"VERMONT AVENUE","color":"rgb(170,224,250)","value":100,"rent":[6,30,90,270,400,550]},{"type":"PROPERTY","name":"CONNECTICUT AVENUE","color":"rgb(170,224,250)","value":120,"rent":[8,40,100,300,450,600]}],
    "left":[{"type":"PROPERTY","name":"ST. CHARLES PLACE","color":"rgb(217,58,150)","value":140,"rent":[10,50,150,450,625,750]},{"type":"UTILITY","name":"ELECTRIC COMPANY","value":150,"img":"/images/Monopoly/electric-utility-icon.png"},{"type":"PROPERTY","name":"STATES AVENUE","color":"rgb(217,58,150)","value":140,"rent":[10,50,150,450,625,750]},{"type":"PROPERTY","name":"VIRGINIA AVENUE","color":"rgb(217,58,150)","value":160,"rent":[12,60,180,500,700,900]},{"type":"RAILROAD","name":"PENNSYLVANIA RAILROAD","value":200,"img":"/images/Monopoly/railroad-icon.png","rent":[25,50,100,200]},{"type":"PROPERTY","name":"ST. JAMES PLACE","color":"rgb(249,148,29)","value":180,"rent":[14,70,200,550,750,950]},{"type":"CHEST","name":"COMMUNITY CHEST","img":"/images/Monopoly/chest-icon.png"},{"type":"PROPERTY","name":"TENNESSEE AVENUE","color":"rgb(249,148,29)","value":180,"rent":[14,70,200,550,750,950]},{"type":"PROPERTY","name":"NEW YORK AVENUE","color":"rgb(249,148,29)","value":200,"rent":[16,80,220,600,800,1000]}],
    "top":[{"type":"PROPERTY","name":"KENTUCKY AVENUE","color":"rgb(237,27,36)","value":220,"rent":[18,90,250,700,875,1050,110]},{"type":"CHANCE","name":"CHANCE","img":"/images/Monopoly/chance-icon-2.png"},{"type":"PROPERTY","name":"INDIANA AVENUE","color":"rgb(237,27,36)","value":220,"rent":[18,90,250,700,875,1050,110]},{"type":"PROPERTY","name":"ILLINOIS AVENUE","color":"rgb(237,27,36)","value":240,"rent":[20,100,300,750,925,1100]},{"type":"RAILROAD","name":"B. & O RAILROAD","value":200,"img":"/images/Monopoly/railroad-icon.png","rent":[25,50,100,200]},{"type":"PROPERTY","name":"ATLANTIC AVENUE","color":"rgb(254,242,0)","value":260,"rent":[22,110,330,800,975,1150]},{"type":"PROPERTY","name":"VENTNOR AVENUE","color":"rgb(254,242,0)","value":260,"rent":[22,110,330,800,975,1150]},{"type":"UTILITY","name":"WATER WORKS","value":150,"img":"/images/Monopoly/water-utility-icon.png"},{"type":"PROPERTY","name":"MARVIN GARDEN","color":"rgb(254,242,0)","value":280,"rent":[24,120,360,850,1025,1200]}],
    "right":[{"type":"PROPERTY","name":"PACIFIC AVENUE","color":"rgb(33,177,90)","value":300,"rent":[26,130,390,900,1100,1275]},{"type":"PROPERTY","name":"NORTH CAROLINA AVENUE","color":"rgb(33,177,90)","value":300,"rent":[26,130,390,900,1100,1275]},{"type":"CHEST","name":"COMMUNITY CHEST","img":"/images/Monopoly/chest-icon.png"},{"type":"PROPERTY","name":"PENNSYL AVENUE","color":"rgb(33,177,90)","value":320,"rent":[28,150,450,1000,1200,1400]},{"type":"RAILROAD","name":"SHORT LINE","value":200,"img":"/images/Monopoly/railroad-icon.png","rent":[25,50,100,200]},{"type":"CHANCE","name":"CHANCE","img":"/images/Monopoly/chance-icon-3.png"},{"type":"PROPERTY","name":"PARK PLACE","color":"rgb(0,114,187)","value":350,"rent":[35,175,500,1100,1300,1500]},{"type":"TAX","name":"LUXURY TAX","value":100,"img":"/images/Monopoly/tax-luxury-icon.png"},{"type":"PROPERTY","name":"BOARDWALK","color":"rgb(0,114,187)","value":400,"rent":[50,200,600,1400,1700,2000]}]}`),
propertyGroupings = JSON.parse('[{"names":["MEDITER AVENUE","BALTIC AVENUE"],"key":"brown","costs":"50"},{"names":["ORIENTAL AVENUE","VERMONT AVENUE","CONNECTICUT AVENUE"],"key":"lightblue","costs":"50"},{"names":["ST. CHARLES PLACE","STATES AVENUE","VIRGINIA AVENUE"],"key":"pink","costs":"100"},{"names":["ST. JAMES PLACE","TENNESSEE AVENUE","NEW YORK AVENUE"],"key":"orange","costs":"100"},{"names":["KENTUCKY AVENUE","INDIANA AVENUE","ILLINOIS AVENUE"],"key":"red","costs":"150"},{"names":["ATLANTIC AVENUE","VENTNOR AVENUE","MARVIN GARDEN"],"key":"yellow","costs":"150"},{"names":["PACIFIC AVENUE","NORTH CAROLINA AVENUE","PENNSYL AVENUE"],"key":"green","costs":"200"},{"names":["PARK PLACE","BOARDWALK"],"key":"blue","costs":"200"},{"names":["READING RAILROAD","PENNSYLVANIA RAILROAD","B. & O RAILROAD","SHORT LINE"],"key":"railroad"},{"names":["WATER WORKS","ELECTRIC COMPANY"],"key":"utility"}]'),
diceConfiuration = [[0,1,2,3,5,6,7,8],[1,2,3,4,5,6,7],[1,2,3,5,6,7],[1,3,4,5,7],[1,3,5,7],[1,4,7]],
randomCardNames = JSON.parse(`{"chance":[{"name":"Advance to Boardwalk","text":"Advance to Boardwalk","type":"ADVANCE","value":"BOARDWALK"},{"name":"Advance to GO","text":"Advance to Go (Collect $200)","type":"ADVANCE","value":"GO"},{"name":"Advance to Illinois","text":"Advance to Illinois Avenue. If you pass Go, collect $200","type":"ADVANCE","value":"ILLINOIS"},{"name":"Advance to St. Charles Place","text":"Advance to St. Charles Place. If you pass Go, collect $200","type":"ADVANCE","value":"ST. CHARLES PLACE"},{"name":"Advance to Nearest Railroad","text":"Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled","type":"ADVANCE_NEAREST","value":"RAILROAD"},{"name":"Advance to Nearest Railroad","text":"Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled","type":"ADVANCE_NEAREST","value":"RAILROAD"},{"name":"Advance to Nearest Utility","text":"Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.","type":"ADVANCE_NEAREST","value":"UTILITY"},{"name":"Bank Dividend","text":"Bank pays you dividend of $50","type":"EARN_MONEY","value":50},{"name":"Get Out of Jail Free","text":"Get Out of Jail Free","type":"GET_OUT_OF_JAIL","value":0},{"name":"Go back 3 spaces","text":"Go Back 3 Spaces","type":"MOVEMENT","value":-3},{"name":"Go to jail","text":"Go to Jail. Go directly to Jail, do not pass Go, do not collect $200","type":"TO_JAIL","value":"JAIL"},{"name":"General Repairs","text":"Make general repairs on all your property. For each house pay $25. For each hotel pay $100","type":"GENERAL_REPAIR","value":[25,50]},{"name":"Speeding Fine","text":"Speeding fine $15","type":"LOSE_MONEY","value":15},{"name":"Advance to Reading Railroad","text":"Take a trip to Reading Railroad. If you pass Go, collect $200","type":"ADVANCE","value":"READING RAILROAD"},{"name":"Elected Chairman","text":"You have been elected Chairman of the Board. Pay each player $50","type":"LOSE_PLAYER_MONEY","value":50},{"name":"Building Load Matures","text":"Your building loan matures. Collect $150","type":"EARN_MONEY","value":150}],
    "chest":[{"name":"Advance to GO","text":"Advance to Go (Collect $200)","type":"ADVANCE","value":"GO"},{"name":"Bank Error","text":"Bank error in your favor. Collect $200","type":"EARN_MONEY","value":200},{"name":"Doctor's Fee","text":"Doctor's fee. Pay $50","type":"LOSE_MONEY","value":50},{"name":"Stock Earning","text":"From sale of stock you get $50","type":"EARN_MONEY","value":50},{"name":"Get Out of Jail Free","text":"Get Out of Jail Free","type":"GET_OUT_OF_JAIL","value":0},{"name":"Go to jail","text":"Go to Jail. Go directly to Jail, do not pass Go, do not collect $200","type":"TO_JAIL","value":"JAIL"},{"name":"Holiday Funds Mature","text":"Holiday fund matures. Receive $100","type":"EARN_MONEY","value":100},{"name":"Income Tax Refund","text":"Income tax refund. Collect $20","type":"EARN_MONEY","value":20},{"name":"It's your birthday","text":"It is your birthday. Collect $10 from every player","type":"EARN_PLAYER_MONEY","value":10},{"name":"Life Insurance Matures","text":"Life insurance matures. Collect $100","type":"EARN_MONEY","value":100},{"name":"Hospital Fees","text":"Pay hospital fees of $100","type":"LOSE_MONEY","value":100},{"name":"School Fees","text":"Pay school fees of $50","type":"LOSE_MONEY","value":50},{"name":"Consultancy Fee","text":"Receive $25 consultancy fee","type":"EARN_MONEY","value":25},{"name":"Street Repair","text":"You are assessed for street repair. $40 per house. $115 per hotel","type":"GENERAL_REPAIR","value":[40,115]},{"name":"Second in Beauty Contest","text":"You have won second prize in a beauty contest. Collect $10","type":"EARN_MONEY","value":10},{"name":"Inherit Money","text":"You inherit $100","type":"EARN_MONEY","value":100}]}`);

//Main document function 
document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        if (socket.readyState === WebSocket.OPEN){
            loadGlobalFunctions().then(() => {loadAll()});
        } else {
            socket.onopen = function () {loadGlobalFunctions().then(() => {loadAll()})}
        }      
    }
}

//Main function to load all document/servers
function loadAll() {

    socket.onmessage = function (event) {
        let data = JSON.parse(event.data);

        if (data.room !== undefined){
            if (gameStatus.room){
                let tilenum = gameStatus.room.players[gameStatus.room.turn].tilenum;
                gameStatus.room = data.room;
                gameStatus.room.players[gameStatus.room.turn].tilenum = tilenum;
            } else {
                gameStatus.room = data.room;
            }

        }
        if (data.id !== undefined){
            socketId[data.id](data);
        } else {
            if (data.type === "PREROOM_UPDATE"){
                updatePreroomPlayers();
            } else if (data.type === "DELETE_ROOM"){
                window.open("./play", "_self");
            } else if (data.type === "START_GAME"){
                beginNewGame();
            } else if (data.type === "KICKED_FROM_ROOM"){
                window.open("./play", "_self");
            } else if (data.type === "CHATROOM_UPDATE"){
                let message = document.createElement("span");
                message.classList.add("update");
                message.textContent = `[${data.sender}]: ${data.message}`;              
                document.querySelector(".chat").appendChild(message);
                document.querySelector(".chat").scrollTop = document.querySelector(".chat").scrollHeight;
            } else if (data.type === "NEW_TURN"){
                newTurn();
            } else if (data.type === "DICE_ROLLED"){
                rollDice(gameStatus.room.players[gameStatus.room.turn], data.diceroll, true, data.path);
            } else if (data.type === "AUCTION_CREATED"){
                loadPlayerPayments();
            } else if (data.type === "PURCHASE_PROPERTY") {
                if (data.owner === USER.credentials.usercode){
                    appendDeedCard(data.property);
                    loadPlayerPayments();
                }
            } else if (data.type === "AUCTION_BID"){
                updateAuctionStatus();
            } else if (data.type === "AUCTION_END"){
                loadPlayerPayments();
                if (data.winner.usercode === USER.credentials.usercode){
                    appendDeedCard(data.winner.property.name);
                }   
            } else if (data.type === "IMPROVE_PROPERTY" || data.type === "UNIMPROVE_PROPERTY"){
                updateImprovements(data.property);
            } else if (data.type === "PAY_OWINGS"){
                if (searchPlayer(data.usercode).tilenum === 10){
                    centralizePlayers(10, true)
                }   
                loadPlayerPayments();
            } else if (data.type === "CREATE_TRADE"){
                if ([data.trade[0].usercode, data.trade[1].usercode].includes(USER.credentials.usercode) && [data.trade[0].usercode, data.trade[1].usercode].includes(document.querySelector(".game-container .player-wrapper").dataset.playercode) && document.querySelector(".game-container .player-wrapper").dataset.playercode !== USER.credentials.usercode){
                    loadPlayerProperties(document.querySelector(".game-container .player-wrapper").dataset.playercode);
                }
            } else if (data.type === "MODIFY_TRADE"){
                if (getTrade(data.user, data.target, false) && [data.user, data.target].includes(document.querySelector(".game-container .player-wrapper").dataset.playercode) && document.querySelector(".game-container .player-wrapper").dataset.playercode !== USER.credentials.usercode){
                    loadPlayerProperties(document.querySelector(".game-container .player-wrapper").dataset.playercode);
                }
            } else if (data.type === "TRADE_COMPLETE"){
                if ([data.trade[0].usercode, data.trade[1].usercode].includes(USER.credentials.usercode)){
                    if ([data.trade[0].usercode, data.trade[1].usercode].includes(document.querySelector(".game-container .player-wrapper").dataset.playercode) && document.querySelector(".game-container .player-wrapper").dataset.playercode !== USER.credentials.usercode){
                        loadPlayerProperties(document.querySelector(".game-container .player-wrapper").dataset.playercode);
                    }
                    clearInterval(gameStatus.tradeInterval);
                    loadDeedCards();
                    updateBalance();
                }
            } else if (data.type === "PLAYER_REMOVED") {
                if (searchPlayer() && searchPlayer().bankrupt){
                    updateLoadingScreen();
                    loadEndRoom();
                    setTimeout(function(){
                        document.querySelector(".game-container").style.display = "none";
                        document.querySelector(".end-room-container").style.display = "block";
                        document.querySelector(".pre-room-container").style.display = "none";
                        updateLoadingScreen();
                    }, 1000);
                } else {

                    loadCharacters();loadPlayerList();loadPlayerPayments();loadDeedCards();updateBalance();

                    for (let player of gameStatus.room.players){
                        for (let property of player.properties){
                            updateImprovements(property.name);
                        }
                    }

                    if (document.querySelector(".properties-container").dataset.loaded) {loadPropertyDetails(document.querySelector(".properties-container").dataset.loaded)}
                    if (data.endturn) {newTurn()}
                }
            }
        }
    }

    if (urlParams.get("vcode") !== null){
        sendSocket({type: "CONNECT_ROOM", code:urlParams.get("vcode").toUpperCase(), name: USER.credentials.username, usercode : USER.credentials.usercode}, function (response) {
            if (response.status === "SUCCESS"){
                Object.assign(gameStatus, {roomCode:response.code, room:response.room});
                if (response.room.started){
                    if (searchPlayer() && searchPlayer().bankrupt){
                        loadEndRoom();
                        updateLoadingScreen();
                    } else {
                        loadGameRoom();
                        newTurn();
                        document.querySelector(".game-container").style.display = "block";
                        document.querySelector(".end-room-container").style.display = "none";
                        document.querySelector(".pre-room-container").style.display = "none";
                        updateLoadingScreen();
                    }
                } else {
                    loadPreroom(response.room);
                }
            } else {document.querySelector(".loader-container p").textContent = "Error: Connection failed. " + response.error}
        });
    } else {document.querySelector(".loader-container p").textContent = "Error: Connection failed. Invalid code."}

    setInterval(() => {
        sendSocket({type: "PREVENT_IDLE", message: "Automated message over the minimum bit limit so the server stays up"});
    }, 1000)
}

function loadPreroom (room) {
    document.querySelector(".pre-room .room-code").textContent = urlParams.get("vcode");

    document.querySelector(".pre-room .delete").onclick = function () {
        sendSocket({type: "DELETE_LEAVE", code: gameStatus.roomCode, usercode: USER.credentials.usercode, 
    }, function (response){
            if (response.status === "SUCCESS"){
                window.open("./play", "_self");
            }
        });
    }

    document.querySelector(".pre-room .start").onclick = function () {
        if (searchPlayer().isHost){
            document.querySelector(".pre-room .start").disabled = true;
            sendSocket({type: "BEGIN_GAME", code: gameStatus.roomCode}, function () {
                document.querySelector(".pre-room .start").disabled = false;
            });
        }
    }

    document.querySelectorAll(".pre-room .token").forEach(token => {
        token.onclick = function () {
            if (!token.classList.contains("token-taken") && !token.classList.contains("token-selected")){
                sendSocket({type: "PLAYER_TOKEN_SELECT", code : gameStatus.roomCode, choice: token.dataset.token, usercode:USER.credentials.usercode})
            }
        }
    });

    document.querySelectorAll(".pre-room .player-settings").forEach(element => {
        element.onclick = function (event) {
            if (event.target.classList.contains("player-settings")){
                event.target.querySelector(".settings-container").style.display = "block";
            } else if (event.target.dataset.setting === "kick"){
                if (searchPlayer().isHost && event.target.parentElement.dataset.usercode !== USER.credentials.usercode) {sendSocket({type: "PLAYER_KICK", usercode:event.target.parentElement.dataset.usercode, code:gameStatus.roomCode})}
            }
        }
    });

    document.onclick = function (event){
        if (!event.target.classList.contains("player-settings")){
            document.querySelectorAll(".pre-room .settings-container").forEach(element => {
                element.style.display = "none";
            });
        }
    }
    
    if (!searchPlayer().isHost) {
        document.querySelector(".pre-room .delete").textContent = "Leave Room";
        document.querySelectorAll(".pre-room .player-settings [data-setting='kick']").forEach(element => {element.classList.add("invisible")});
    }

    document.querySelector(".pre-room .room-title").textContent = room.title;
    updatePreroomPlayers(room);

    updateLoadingScreen();
}

function loadGameRoom(){

    loadBoard();

    window.onkeydown = function (event) {
        if (event.code === "Enter"){
            let element = document.querySelector(".game-container .chat-input")
            if (document.activeElement === element){
                if (element.value !== ""){
                    sendSocket({type : "NEW_CHAT_MESSAGE", message : element.value, code : gameStatus.roomCode, sender : USER.credentials.username});
                    element.value = "";
                }
            } else if (document.activeElement !== document.querySelector(".game-container .search-property>input")){
                element.focus();
            }
        } else if (event.code === "Tab"){
            event.preventDefault();
            let target = document.querySelector(".game-container .board-menu-container");
            if (target.classList.contains("board-menu-shown")){
                target.classList.remove("board-menu-shown");
            } else {
                target.classList.add("board-menu-shown"); 
            } 
        }
    }

    loadCharacters();

    document.querySelector(".game-container .main-board").onclick = function (event) {

        let toExit = false;

        document.querySelectorAll(".game-container .monopoly-logo-container, .game-container .board-card-container").forEach(item => {
            if (event.target === item){
                toExit = true;
                return;
            }
        });

        if (toExit || event.target === document.querySelector(".game-container .main-board") && document.querySelector(".game-container .player-options-wrapper").classList.contains("loaded")){
            document.querySelector(".game-container .player-options-container").style.opacity = "0";
            setTimeout(function () {
                document.querySelector(".game-container .player-options-container").style = "";
                document.querySelector(".game-container .player-options-wrapper").classList.remove("loaded");
            }, 400)
        }
    }

    document.querySelector(".game-container .roll-dice").onclick = function () {
        if (searchPlayer().owings.owing === "unconfirmed"){
            sendSocket({type:"GET_DICE_ROLL", for:"UTILITY_PAYMENT", code:gameStatus.roomCode})
        } else {
            sendSocket({type:"GET_DICE_ROLL", for:"PLAYER_TURN", code:gameStatus.roomCode});
        }
    }

    document.querySelectorAll(".game-container .tile:not(.corner-tile)").forEach(item => {
        item.onclick = function () {
            loadPropertyDetails(item.dataset.tilename);
            changeOptionPage("property");
            openOptionsMenu();
        }
    })

    document.querySelectorAll(".game-container .board-menu-option").forEach(element => {
        element.onclick = function () {
            changeOptionPage(element.dataset.option);
            openOptionsMenu();
        }
    });

    updateBalance();

    document.querySelector(".game-container .actions-container .purchase-yes").onclick = function () {
        if (searchPlayer().owings.landing !== null && searchPlayer().owings.ownership === "FOR_PURCHASE"){
            sendSocket({type : "PURCHASE_PROPERTY", code: gameStatus.roomCode, usercode: USER.credentials.usercode}, function (response) {
                if (response.success){
                    appendDeedCard(response.property);
                    loadPlayerPayments();
                }
            });
        }
    }   

    document.querySelector(".game-container .actions-container .purchase-no").onclick = function () {
        if (searchPlayer().owings.landing !== null && searchPlayer().owings.ownership === "FOR_PURCHASE"){
            sendSocket({type : "AUCTION_PROPERTY", code: gameStatus.roomCode, usercode: USER.credentials.usercode});
        }
    }

    document.querySelector(".game-container .end-turn-button").onclick = function () {
        document.querySelector(".game-container .end-turn-button").disabled = true;
        sendSocket({type:"END_TURN", usercode: USER.credentials.usercode, code: gameStatus.roomCode});
    }

    document.querySelector(".game-container .bid-confirm").onclick = function () {
        let newAmount = parseInt(document.querySelector(".game-container .bid-input").value);
        if (newAmount > gameStatus.room.auctions[0].topBid && (newAmount <= searchPlayer().balance || (gameStatus.room.auctions[0].usercode === USER.credentials.usercode && newAmount <= searchPlayer().balance + gameStatus.room.auctions[0].topBid))){
            sendSocket({type:"AUCTION_BID", newBid:parseInt(document.querySelector(".game-container .bid-input").value), usercode:searchPlayer().usercode, name:searchPlayer().name, code:gameStatus.roomCode});
        }
    }

    document.querySelector(".game-container .properties-container .upgrade").onclick = function () {
        sendSocket({type: "IMPROVE_PROPERTY", usercode: USER.credentials.usercode, property:document.querySelector(".game-container .properties-container").dataset.loaded, code:gameStatus.roomCode}, function (data) {
            if (!data.success){
                //console.log("CLIENT ERROR, UNABLE TO UPGRADE");
            }
        });
    }

    document.querySelector(".game-container .properties-container .downgrade").onclick = function () {
        sendSocket({type: "UNIMPROVE_PROPERTY", usercode: USER.credentials.usercode, property:document.querySelector(".game-container .properties-container").dataset.loaded, code:gameStatus.roomCode}, function (data) {
            if (!data.success){
                //console.log("CLIENT ERROR, MISSING CODE");
            }
        });
    }

    document.querySelector(".game-container .pay-owings").onclick = function () {
        if (searchPlayer().balance >= searchPlayer().owings.owing) {
            sendSocket({type: "PAY_OWINGS", usercode: USER.credentials.usercode, code: gameStatus.roomCode, userJailCard: false});
        } else {
            sendSocket({type: "DECLARE_BANKRUPTCY", usercode: USER.credentials.usercode, code: gameStatus.roomCode});
        }
    }

    document.querySelector(".game-container .use-jail-card").onclick = function () {
        if (searchPlayer().owings.ownership === "GO_TO_JAIL" && searchPlayer().jailCards > 0){
            sendSocket({type: "PAY_OWINGS", usercode: USER.credentials.usercode, code: gameStatus.roomCode, useJailCard: true});
        }
    }

    document.querySelectorAll(".game-container .search-property>input").forEach(element => {
        element.oninput = function (event) {
            loadPlayerProperties(document.querySelector(".game-container .player-wrapper").dataset.playercode, event.target.value);
        }
    });

    document.querySelectorAll(".game-container .return-to-list, .game-container .back-trade").forEach(item => {item.onclick = function () {loadPlayerList()}});

    document.querySelector(".game-container .cancel-trade").onclick = function () {
        sendSocket({type: "DELETE_TRADE", usercode: USER.credentials.usercode, code: gameStatus.roomCode, target: document.querySelector(".game-container .player-wrapper").dataset.playercode});
    }

    document.querySelectorAll(".game-container .confirm-trade, .game-container .cancel-trade-confirm").forEach(item => {item.onclick = function () {
        sendSocket({type:"CONFIRM_TRADE", usercode: USER.credentials.usercode, code: gameStatus.roomCode, target: document.querySelector(".game-container .player-wrapper").dataset.playercode});
    }});

    document.querySelector(".game-container .trade-currency>input").oninput = function () {
        if (document.querySelector(".game-container .trade-currency>input").value >= 0 && document.querySelector(".game-container .trade-currency>input").value <= searchPlayer().balance){
            sendSocket({type:"MODIFY_TRADE", code: gameStatus.roomCode, method: "CURRENCY", usercode:USER.credentials.usercode, target:document.querySelector(".game-container .player-wrapper").dataset.playercode, amount:document.querySelector(".game-container .trade-currency>input").value});
        }
    }

    document.querySelector(".game-container .add-jail-card").onclick = function () {
        sendSocket({type:"MODIFY_TRADE", code: gameStatus.roomCode, method: "JAILCARD", usercode:USER.credentials.usercode, target:document.querySelector(".game-container .player-wrapper").dataset.playercode, amount:parseInt(document.querySelector(".game-container .trade-jailcard-container>p").textContent)+1});
    }

    document.querySelector(".game-container .remove-jail-card").onclick = function () {
        sendSocket({type:"MODIFY_TRADE", code: gameStatus.roomCode, method: "JAILCARD", usercode:USER.credentials.usercode, target:document.querySelector(".game-container .player-wrapper").dataset.playercode, amount:parseInt(document.querySelector(".game-container .trade-jailcard-container>p").textContent)-1});
    }

    document.querySelector(".game-container .create-trade").onclick = function () {
        if (document.querySelector(".game-container .player-wrapper").dataset.playercode !== USER.credentials.usercode){
            sendSocket({type:"CREATE_TRADE",code: gameStatus.roomCode, user: USER.credentials.usercode, target: document.querySelector(".game-container .player-wrapper").dataset.playercode});
        } else {
            document.querySelector(".game-container .trade-error").textContent = "Cannot trade yourself!";
            document.querySelector(".game-container .trade-error").classList.remove("show");
            void document.querySelector(".game-container .trade-error").offsetWidth;
            document.querySelector(".game-container .trade-error").classList.add("show");
        }
    }

    document.querySelector(".game-container .add-offer").onclick = function () {
        document.querySelector(".game-container .add-offer-panel").style.display = "block";
    }

    document.querySelector(".game-container .close-add-offer").onclick = function () {
        document.querySelector(".game-container .add-offer-panel").style.display = "none";
    }

    if (gameStatus.room.diceRolled){
        rollDice(gameStatus.room.players[gameStatus.room.turn], gameStatus.room.prevRolls, false);
    }

    if (searchPlayer()) {
        loadDeedCards();
    } else {
        document.querySelector(".game-container .end-turn-button").disabled = true;
        document.querySelector(".game-container .create-trade").disabled = true;
        document.querySelector(".game-container .player-balance").textContent = "$0";
    }

    for (let player of gameStatus.room.players){
        for (let property of player.properties){
            updateImprovements(property.name);
        }
    }

    loadPlayerList();
    loadPlayerPayments();
}

function loadCharacters () {
    document.querySelectorAll(".game-container .player-character").forEach(player => {player.remove()});

    for (let player of gameStatus.room.players){
        let character = document.createElement("div");
        character.classList.add("player-character");
        character.style["background-image"] = `url("/images/Monopoly/token-${player.token}.png")`;
        character.dataset.playercode = player.usercode;
        character.onclick = function () {
            loadPlayerProperties(character.dataset.playercode);
            changeOptionPage("player");
            openOptionsMenu();
        }
        document.querySelector(".main-board").appendChild(character);
    }

    for (let player of gameStatus.room.players){
        centralizePlayers(player.tilenum, false);
    }
}

function updateImprovements(cardName) {
    let improvements = document.querySelector(`.game-container .tile[data-tilename='${cardName}'] .tile-head>div`);
    let owner = cardOwner(cardName);

    updateBalance();

    if (improvements) improvements.style.display = "none";

    if (owner && improvements){

        for (let property of owner.properties){
            if (property.name === cardName){
                var card = property;
            }
        }

        if (card.improvements > 0 && card.improvements < 5) {
            improvements.style.display = "flex";
            improvements.querySelector("img").src = "/images/Monopoly/house-icon.png";
            improvements.querySelector("p").textContent = `x${card.improvements}`;
        } else if (card.improvements === 5){
            improvements.style.display = "flex";
            improvements.querySelector("img").src = "/images/Monopoly/hotel-icon.png";
            improvements.querySelector("p").textContent = "x1";
        }
    }

    loadPropertyDetails(cardName);
}

function loadPropertyDetails(cardName){
    if (!createDeedCard(true, cardName)){return}
    if (document.querySelector(".game-container .properties-container .deed") !== null){
        document.querySelector(".game-container .properties-container .deed").remove();
    }
    let card = searchCard(cardName), group = getCardGroup(cardName), owner = cardOwner(cardName);

    document.querySelector(".game-container .property-options").style.display = "none";
    document.querySelector(".game-container .improvements-count").style.display = "none";
    document.querySelector(".game-container .no-improvements").style.display = "none";
    document.querySelector(".game-container .improvements>img").style.display = "none";
    document.querySelector(".game-container .properties-container>h4").style.display = "none";
    document.querySelector(".game-container .property-details").style.display = "block";
    document.querySelector(".game-container .properties-container").dataset.loaded = cardName;

    if (owner){

        document.querySelector(".game-container .property-ownership span:last-child").textContent = owner.name;
        document.querySelector(".game-container .property-ownership span:last-child").onclick = function () {
            loadPlayerProperties(document.querySelector(".game-container .property-ownership span:last-child").dataset.playercode);
            changeOptionPage("player");
            openOptionsMenu();
        }
        document.querySelector(".game-container .property-ownership span:last-child").dataset.playercode = owner.usercode;

        for (let property of owner.properties){
            if (property.name === cardName){
                var propertyDetails = property;
            }
        }

        if (propertyDetails.improvements === 0){
            document.querySelector(".game-container .no-improvements").style.display = "block";
        } else {
            if (propertyDetails.improvements === 5){
                document.querySelector(".game-container .improvements-count").textContent = `x1`;
                document.querySelector(".game-container .improvements>img").src = `/images/Monopoly/hotel-icon.png`;
            } else {
                document.querySelector(".game-container .improvements-count").textContent = `x${propertyDetails.improvements}`;
                document.querySelector(".game-container .improvements>img").src = `/images/Monopoly/house-icon.png`;
            }
            document.querySelector(".game-container .improvements>img").style.display = "block";
            document.querySelector(".game-container .improvements-count").style.display = "block";
        }

        if (searchPlayer() === owner){

            document.querySelectorAll(".game-container .property-options>button").forEach(button => {button.disabled = true})
            document.querySelector(".game-container .downgrade").textContent = `Cannot Downgrade!`;
            document.querySelector(".game-container .upgrade").textContent = `Cannot Upgrade!`;
            if (canImprove(card, propertyDetails)){
                document.querySelector(".game-container .upgrade").disabled = false;
                propertyDetails.mortgaged ? document.querySelector(".game-container .upgrade").textContent = `Unmortgage for $${Math.floor((card.value/2)*1.1)}` : document.querySelector(".game-container .upgrade").textContent = `Buy house for $${group.costs}`;
            }

            if (canUnimprove(card, propertyDetails)){
                document.querySelector(".game-container .downgrade").disabled = false;
                propertyDetails.improvements === 0 ? document.querySelector(".game-container .downgrade").textContent = `Mortgage for $${card.value/2}` : document.querySelector(".game-container .downgrade").textContent = `Sell house for $${group.costs/2}`;
            }

            document.querySelector(".game-container .property-options").style.display = "block";
        }

    } else {
        document.querySelector(".game-container .property-ownership span:last-child").textContent = "NOT OWNED"; 
        document.querySelector(".game-container .property-ownership span:last-child").dataset.playercode = "NOT OWNED"; 
        document.querySelector(".game-container .no-improvements").style.display = "block";
    }
    
    document.querySelector(".game-container .properties-container").insertBefore(createDeedCard(true, card.name), document.querySelector(".game-container .property-details"));
}

function openOptionsMenu() {
    if (!document.querySelector(".game-container .player-options-wrapper").classList.contains("fadeIn") && !document.querySelector(".game-container .player-options-wrapper").classList.contains("loaded")){
        document.querySelector(".game-container .player-options-wrapper").classList.add("fadeIn");
        setTimeout(function () {
            document.querySelector(".game-container .player-options-wrapper").classList.remove("fadeIn");
            document.querySelector(".game-container .player-options-wrapper").classList.add("loaded");
        }, 2000);
    }
}

function loadDeedCards() {
    document.querySelector(".game-container .property-container").innerHTML = "";
    if (searchPlayer()) {
        for (let property of searchPlayer().properties){
            appendDeedCard(property.name, property.mortgaged);
        }
    }
}

function appendDeedCard(cardName, mortgaged){

    let cardGroup = getCardGroup(cardName);

    if (document.querySelector(`.game-container .property-group[data-group='${cardGroup.key}']`) === null){
        let propertyGroup = document.createElement("div");
        propertyGroup.classList.add("property-group");
        propertyGroup.dataset.group = cardGroup.key;
        propertyGroup.appendChild(createDeedCard(false, cardName));
        document.querySelector(".game-container .property-container").appendChild(propertyGroup);
    } else {
        document.querySelector(`.game-container .property-group[data-group='${cardGroup.key}']`).appendChild(createDeedCard(false, cardName));
    }

}

function changeOptionPage(option){

    gameStatus.optionChoice = option;

    document.querySelectorAll(".game-container .player-options-container>div").forEach(item => {
        if (item.dataset.option === option){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    if (option === "action" && gameStatus.room.auctions.length > 0) {
        updateAuctionStatus();
    }
}

//Change scence to begin game
function beginNewGame () {
    updateLoadingScreen();
    loadGameRoom();
    setTimeout(function(){
        document.querySelector(".game-container").style.display = "block";
        document.querySelector(".end-room-container").style.display = "none";
        document.querySelector(".pre-room-container").style.display = "none";
        updateLoadingScreen();
    }, 1000);
}


//Load monopoly board
function loadBoard() {
    for (let key of Object.keys(boardLocationNames)){
        boardLocationNames[key].forEach(function (value, index){
            if (key === "bottom" || key === "left"){
                var tile = document.querySelectorAll(`.game-container .board-${key} .tile:not(.corner-tile)`)[8-index];
            } else {
                var tile = document.querySelectorAll(`.game-container .board-${key} .tile:not(.corner-tile)`)[index];
            }

            tile.dataset.tilename = value.name;
            tile.querySelector(".tile-name").textContent = value.name;

            if (value.value !== undefined){
                tile.querySelector(".tile-cost").textContent = value.value;
                tile.querySelector(".tile-cost").appendChild(document.createElement("span"));
                tile.querySelector("span").textContent = "M";
            }

            if (value.img !== undefined){
                tile.querySelector(".tile-name").dataset.textfor = "ITEM";
                tile.querySelector(".tile-icon").style.backgroundImage = `url(${value.img})`;
            }

            if (value.type === "PROPERTY"){
                Object.assign(tile.querySelector(".tile-head").style,{display:"block",backgroundColor:value.color});
                let improvements = document.createElement("div"), houseIcon = document.createElement("img"), houseNum = document.createElement("p");
                improvements.append(houseIcon, houseNum);
                improvements.style.display = "none";
                tile.querySelector(".tile-head").appendChild(improvements);
                tile.querySelector(".tile-name").dataset.textfor = "PROPERTY";
            } else if (value.type === "CHANCE"){
                tile.querySelector(".tile-icon").dataset.iconfor = "LARGE";
            } else {
                tile.querySelector(".tile-icon").dataset.iconfor = "SMALL";
            }
        })
    }
}

//Failed connection to server
socket.onclose = function () {
    document.querySelector(".loader-container p").textContent = "Error: Connection failed. Server offline."
}

//Hide or show the content of the page with a loader
function updateLoadingScreen() {
    if (document.querySelector(".transition-background").classList.contains("leftslideIn")){
        document.querySelector(".loader-container").classList.remove("fadeIn");
        setTimeout(function () {
            document.querySelectorAll(".transition-background").forEach(item => {item.classList.remove(`${item.dataset.transition}slideIn`)});
        }, 200);
    } else {
        document.querySelectorAll(".transition-background").forEach(item => {item.classList.add(`${item.dataset.transition}slideIn`)});
        setTimeout(function () {
            document.querySelector(".loader-container").classList.add("fadeIn");
        }, 500);
    }
}

function updatePreroomPlayers() {

    document.querySelectorAll(".pre-room .player").forEach(function (player, index) {

        if (index < gameStatus.room.players.length){
            player.style.display = "flex";
            player.querySelector(".player-container").style.display = "flex";
            if (gameStatus.room.players[index].online) player.querySelector(".player-status").style.backgroundColor = "rgb(0,255,0)"; 
            else {player.querySelector(".player-status").style.backgroundColor = "red"}
            player.querySelector(".settings-options").dataset.usercode = gameStatus.room.players[index].usercode;
            player.querySelector(".player-name").textContent = gameStatus.room.players[index].name;
            player.querySelector(".player-icon").style["background-image"] = `url('/images/Monopoly/player-icon-${index%4}.svg')`;
        } else if (index === gameStatus.room.players.length) {
            player.style.display = "flex";
            player.querySelector(".player-container").style.display = "none";
        } else {
            player.style.display = "none";
        }
    });

    document.querySelector(".players-label span").textContent = `[${gameStatus.room.players.length} of 6]`

    if (gameStatus.room.players.length < 6){
        var element = document.querySelector(".pre-room .player-border");
        element.remove();
        document.querySelectorAll(".pre-room .player")[gameStatus.room.players.length].appendChild(element);
    }

    for (let token of document.querySelectorAll(".pre-room .token")){
        token.classList.remove("token-taken", "token-selected");
    }

    for (let player of gameStatus.room.players){
        if (player.token === ""){continue}
        if (player.usercode === USER.credentials.usercode){
            document.querySelector(`.pre-room .token[data-token="${player.token}"]`).classList.remove("token-taken");
            document.querySelector(`.pre-room .token[data-token="${player.token}"]`).classList.add("token-selected");
        } else {
            document.querySelector(`.pre-room .token[data-token="${player.token}"]`).classList.remove("token-selected");
            document.querySelector(`.pre-room .token[data-token="${player.token}"]`).classList.add("token-taken");
        }
    }
}

function newTurn(){

    if (gameStatus.optionChoice === "playerturn" && document.querySelector(".game-container .player-options-wrapper").classList.contains("loaded")){
        document.querySelector(".game-container .player-options-wrapper").classList.add("update");
        setTimeout(function () {resetDice()}, 400);
        setTimeout(function () {document.querySelector(".game-container .player-options-wrapper").classList.remove("update")}, 1000)
    } else {
        if (!document.querySelector(".game-container .player-options-wrapper").classList.contains("loaded") && !document.querySelector(".game-container .player-options-wrapper").classList.contains("fadeIn")){
            changeOptionPage("playerturn");
        }

        openOptionsMenu();
        resetDice();
    }
}

function resetDice(){

    if (!gameStatus.room.diceRolled) {    
        document.querySelectorAll(".game-container .dice").forEach(die => {
            die.querySelectorAll("div").forEach(dot => {
                dot.classList.remove("hide");
            });
        });
        document.querySelector(".game-container .turn-container").classList.add("rolled");
        document.querySelector(".game-container .dice-rolling").textContent =  `Waiting for diceroll`;
        if (gameStatus.room.players[gameStatus.room.turn].usercode === USER.credentials.usercode){
            document.querySelector(".game-container .turn-container").classList.remove("rolled");
        }
    }

    document.querySelector(".game-container .turn-container .options-title span:last-child").textContent = gameStatus.room.players[gameStatus.room.turn].name;
    document.querySelector(".game-container .player-name h1").textContent = gameStatus.room.players[gameStatus.room.turn].name;

}

function createDeedCard(forPurchase, cardName){

    for (let item of Object.values(boardLocationNames)){
        for (let property of item){
            if (cardName === property.name){
                var card = property, found = true;
                break;
            }
        }
        if (found) break;
    }

    for (let group of propertyGroupings){
        if (group.names.includes(cardName)){
            var cardGroup = group;
            break;
        }
    }

    if (card.type === "CHANCE" || card.type === "CHEST" || card.type === "TAX"){
        return;
    }

    let deed = document.createElement("div"), deedBorder = document.createElement("div"), deedHead = document.createElement("div"),
    deedName = document.createElement("h1"), deedCosts = document.createElement("div"), costMortgage = document.createElement("p");

    deed.classList.add("deed"), deedBorder.classList.add("deed-border"), deedHead.classList.add("deed-head"), 
    deedName.classList.add("deed-name"), deedCosts.classList.add("deed-costs"), costMortgage.classList.add("cost-mortgage");

    costMortgage.textContent = `Mortgage value $${Math.floor(card.value/2)}`;

    if (card.type === "PROPERTY" || card.type === "RAILROAD"){
        let deedRents = document.createElement("div");
        deedRents.classList.add("deed-rents");

        if (card.type === "PROPERTY"){
            deed.classList.add("property");
            let titleDeed = document.createElement("h3"), rentValues = [];
            titleDeed.classList.add("title-deed");
            titleDeed.textContent = "TITLE DEED";
            deedHead.style["background-color"] = card.color;

            for (let r = 0; r < 6; r++){
                rentValues.push(document.createElement("p"));
                if (r === 0){
                    rentValues[r].classList.add("rent");
                    rentValues[r].textContent = `RENT $${card.rent[r]}`;
                } else {
                    let rentLeft = document.createElement("span"), rentRight = document.createElement("span");
                    rentValues[r].classList.add("house");
                    switch (r) {
                        case 1:
                            rentLeft.textContent = `With ${r} House`;
                            break;
                        case 5:
                            rentLeft.textContent = `With Hotel`;
                            break;
                        default:
                            rentLeft.textContent = `With ${r} Houses`
                            break;
                    }
                    rentRight.textContent = `$${card.rent[r]}`;
                    rentValues[r].append(rentLeft, rentRight);
                }
                deedRents.appendChild(rentValues[r]);
            }

            let houseCost = document.createElement("p"), hotelCost = document.createElement("p");
            houseCost.classList.add("cost-house"), hotelCost.classList.add("cost-hotel");

            houseCost.textContent = `Houses cost $${cardGroup.costs} each`;
            hotelCost.textContent = `Hotels, cost $${cardGroup.costs} each`;

            deedCosts.append(houseCost, hotelCost);
            deedHead.prepend(titleDeed);

        } else {

            let rentValues = [], icon = document.createElement("div");
            icon.classList.add("deed-icon");
            icon.style["background-image"] = `url('/images/Monopoly/railroad-icon.png')`;
            deedBorder.prepend(icon);

            for (let r = 0; r < 4; r++){
                rentValues.push(document.createElement("p"));
                    let rentLeft = document.createElement("span"), rentRight = document.createElement("span");
                    rentValues[r].classList.add("house");
                    if (r === 0){
                        rentLeft.textContent = `RENT`;
                    } else {
                        rentLeft.textContent = `If ${r+1} railroads are owned`;
                    }
                    rentRight.textContent = `$${card.rent[r]}`;
                    rentValues[r].append(rentLeft, rentRight);
                deedRents.appendChild(rentValues[r]);
            }
        }
        deedBorder.append(deedHead, deedRents);
        deedCosts.prepend(costMortgage);
    } else {
        let icon = document.createElement("div");
        icon.classList.add("deed-icon");
        icon.style["background-image"] = `url('${card.img}')`;
        deedBorder.prepend(icon);

        let costSingle = document.createElement("p"), costDouble = document.createElement("p");
        costSingle.classList.add("cost-single"), costDouble.classList.add("cost-double");
        costSingle.textContent = 'If one "Utility" is owned, rent is 4 times amount shown on dice.';
        costDouble.textContent = 'If two "Utility" is owned, rent is 10 times amount shown on dice.';
        deedCosts.append(costSingle, costDouble, costMortgage);
        deedBorder.append(deedHead);
    }

    if (forPurchase){
        deed.classList.add("showfull")
    } else {
        deed.onclick = function () {
            loadPropertyDetails(card.name);
            changeOptionPage("property");
            openOptionsMenu();
        }
    }

    deedName.textContent = card.name;
    deedHead.append(deedName);

    deedBorder.append(deedCosts);

    deed.append(deedBorder);

    return deed;
}

function canImprove(card, details) {

    if (details.mortgaged){
        return true;
    }

    if (card.type !== "PROPERTY" || details.improvements === 5 || cardOwner(card.name).usercode !== searchPlayer().usercode){
        return false
    }

    for (let property of getCardGroup(card.name).names) {
        if (cardOwner(property) !== searchPlayer()) {return false}
        for (let item of searchPlayer().properties){
            if (item.name === property && (item.improvements < details.improvements)){
                return false;
            }
        }
    }

    return true;
}

function canUnimprove(card, details) {
    if (details.mortgaged){
        return false
    }

    for (let property of getCardGroup(card.name).names) {

        for (let item of cardOwner(card.name).properties){
            if (item.name === property && !(item.improvements <= details.improvements)){
                return false;
            }
        }
    }

    return true;
}

function rollDice(player, diceroll, animate, path){

    if (animate){
        document.querySelector(".game-container .turn-container").classList.add("rolling");
        document.querySelector(".game-container .dice-rolling").textContent = "The dice are rolling...";
        setTimeout(function () {
            gameStatus.room.players[gameStatus.room.turn].tilenum = path[0].prevTile;
            movePlayer(player, path);
            document.querySelector(".game-container .dice-rolling").textContent =  `A ${(diceroll[0] + diceroll[1])} was rolled!`;
            document.querySelector(".game-container .turn-container").classList.add("rolled");
            document.querySelector(".game-container .turn-container").classList.remove("rolling");
        }, 2000);
    } else {
        document.querySelector(".game-container .dice-rolling").style.display = "none";
        document.querySelector(".game-container .dice-rolling").textContent =  `A ${(diceroll[0] + diceroll[1])} was rolled!`;
        document.querySelector(".game-container .turn-container").classList.add("rolled");
        setTimeout(function () {document.querySelector(".game-container .dice-rolling").style.display = "block"}, 2000)
    }

    for (let die = 0; die < diceroll.length; die++){
        for (let dot of diceConfiuration[diceroll[die]-1]){
            document.querySelector(`.game-container .dice:nth-child(${die+1})>div:nth-child(${dot+1})`).classList.add("hide");
        }
    }
}

function movePlayer(player, path){ 

    let playerEl = document.querySelector(`.game-container .player-character[data-playercode='${player.usercode}']`);

    if (path[0].steps === 0){
        if (path[0].card !== undefined){
            showChanceCard(path);
        } else {
            if (gameStatus.room.players[gameStatus.room.turn].injail){
                gameStatus.room.players[gameStatus.room.turn].tilenum = 10;
                centralizePlayers(10, true);
            }
            loadPlayerPayments();
            path.shift();
        }
        centralizePlayers(gameStatus.room.players[gameStatus.room.turn].tilenum, true);
        return;
    }

    playerEl.classList.add("moving");

    if (path[0].steps < 0){
        player.tilenum --;
        if (player.tilenum <= -1){
            player.tilenum = 39;
        }

        switch (Math.floor((player.tilenum)/10)){
            case -1: playerEl.style.left = "88%"; break;
            case 0: playerEl.style.left = (88 - (player.tilenum*(100/12))) + "%"; break;
            case 1: playerEl.style.top = (88 - ((player.tilenum-10)*(100/12))) + "%"; break;
            case 2: playerEl.style.left = (8 + ((player.tilenum-20)*(100/12))) + "%"; break;
            case 3: playerEl.style.top = (8 + ((player.tilenum-30)*(100/12))) + "%"; break;
        }
    } else {
        player.tilenum ++;

        if (player.tilenum >= 40){
            player.tilenum = 0;
        }

        switch (Math.floor((player.tilenum-1)/10)){
            case -1: playerEl.style.top = "88%"; break;
            case 0: playerEl.style.left = (88 - (player.tilenum*(100/12))) + "%"; break;
            case 1: playerEl.style.top = (88 - ((player.tilenum-10)*(100/12))) + "%"; break;
            case 2: playerEl.style.left = (8 + ((player.tilenum-20)*(100/12))) + "%"; break;
            case 3: playerEl.style.top = (8 + ((player.tilenum-30)*(100/12))) + "%"; break;
        }
    }

    setTimeout(function () {
        path[0].steps < 0 ? path[0].steps ++ : path[0].steps--;
        movePlayer(player, path);
    }, 400);
}

function showChanceCard(path) {

    let card = path[0].card;

    if (card === undefined) {
        return;
    }

    switch(card.type){
        case "ADVANCE":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-advance.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "left";
            break;
        case "ADVANCE_NEAREST":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-advance.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "left";
            break;
        case "MOVEMENT":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-advance.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "right";
            break;
        case "TO_JAIL":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-tojail.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "center";
            break; 
        case "GET_OUT_OF_JAIL":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-outjail.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "center";
            break;
        case "EARN_MONEY":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-earn.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "right";
            break;
        case "LOSE_MONEY":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-loss.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "left";
            break;
        case "LOSE_PLAYER_MONEY":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-loss.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "left";
        case "EARN_PLAYER_MONEY":
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-earn.png";
             document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "right";
            break;
        case "GENERAL_REPAIR": 
            document.querySelector(`.game-container .${card.cardType} img`).src = "/images/Monopoly/board-card-repair.png";
            document.querySelector(`.game-container .${card.cardType}-back`).dataset.img = "left";
            break;
    }

    document.querySelector(`.game-container .${card.cardType} p`).textContent = card.text;
    document.querySelector(`.game-container .board-card-container.${card.cardType}`).classList.add("show");
    

    setTimeout(function () {
        document.querySelector(`.game-container .board-card-container.${card.cardType}`).classList.remove("show");
    }, 4000);

    path.shift();

    setTimeout(function () {

        if (path.length === 0){
            if (gameStatus.room.players[gameStatus.room.turn].injail){
                gameStatus.room.players[gameStatus.room.turn].tilenum = 10;
                centralizePlayers(10, true);
            }
            loadPlayerPayments();
            return;
        } else {
            movePlayer(gameStatus.room.players[gameStatus.room.turn], path);
        }
    }, 5000);

}

function centralizePlayers(tile, smooth){
    
    let stackedPlayers = [];
    const stagger = [[-2, -4], [-2, 0], [-2, 4], [2, -4], [2, 0], [2, 4]], 
        staggerJail = [[[-4, -4], [-4, -1.33], [-4, 1.33], [4, 4], [0, 4], [4, 4]],[[-1, -4], [-1, -1], [-1, 2], [2, -4], [2, -1], [2, 2]]]

    for (let player of gameStatus.room.players){
        if (player.tilenum === tile){
            stackedPlayers.push(player.usercode);
            if (smooth) {document.querySelector(`.game-container .player-character[data-playercode='${player.usercode}']`).classList.add("moving")}
            else {document.querySelector(`.game-container .player-character[data-playercode='${player.usercode}']`).classList.remove("moving")}
        }
    }

    for (let num of stackedPlayers){

        let playerEl = document.querySelector(`.game-container .player-character[data-playercode='${num}']`);

        alignPlayer(tile, num, "left");
        alignPlayer(tile, num, "top");

        switch(stackedPlayers.length){
            case 1: 
            if (!searchPlayer(num).injail && searchPlayer(num).tilenum === 10){
                playerEl.style.left = parseFloat(playerEl.style.left.split("%")[0]) - 4 + "%";
            }
            break;

            case 2:
            if ((tile >= 0 && tile <= 10) || (tile >= 20 && tile <= 30)){
                playerEl.style.top = parseFloat(playerEl.style.top.split("%")[0]) + (2+(stackedPlayers.indexOf(num)*-4)) + "%";
            } else if ((tile > 10 && tile < 20) || tile > 30 && tile < 40){
                playerEl.style.left = parseFloat(playerEl.style.left.split("%")[0]) + (2+(stackedPlayers.indexOf(num)*-4)) + "%";
            }
            if (!searchPlayer(num).injail && searchPlayer(num).tilenum === 10){
                playerEl.style.left = parseFloat(playerEl.style.left.split("%")[0]) - 3.7 + "%";
            } else if (searchPlayer(num).injail && searchPlayer(num).tilenum === 10){
                playerEl.style.top = parseFloat(playerEl.style.top.split("%")[0]) - 2 + "%";
            }
            break;

            default: 
            if ((tile >= 0 && tile < 10) || (tile >= 20 && tile <= 30)){
                Object.assign(playerEl.style, {
                    top:parseFloat(playerEl.style.top.split("%")[0]) + stagger[gameStatus.room.players.indexOf(searchPlayer(num))][1] + "%",
                    left:parseFloat(playerEl.style.left.split("%")[0]) + stagger[gameStatus.room.players.indexOf(searchPlayer(num))][0] + "%"
                });
            } else if ((tile > 10 && tile < 20) || tile > 30 && tile < 40){
                Object.assign(playerEl.style, {
                    top:parseFloat(playerEl.style.top.split("%")[0]) + stagger[gameStatus.room.players.indexOf(searchPlayer(num))][0] + "%",
                    left:parseFloat(playerEl.style.left.split("%")[0]) + stagger[gameStatus.room.players.indexOf(searchPlayer(num))][1] + "%"
                });
            } else if (tile === 10){
                if (searchPlayer(num).injail){
                    Object.assign(playerEl.style, {
                        top:parseFloat(playerEl.style.top.split("%")[0]) + staggerJail[1][gameStatus.room.players.indexOf(searchPlayer(num))][1] + "%",
                        left:parseFloat(playerEl.style.left.split("%")[0]) + staggerJail[1][gameStatus.room.players.indexOf(searchPlayer(num))][0] + "%"
                    });
                } else {
                    Object.assign(playerEl.style, {
                        top:parseFloat(playerEl.style.top.split("%")[0]) + staggerJail[0][gameStatus.room.players.indexOf(searchPlayer(num))][1] + "%",
                        left:parseFloat(playerEl.style.left.split("%")[0]) + staggerJail[0][gameStatus.room.players.indexOf(searchPlayer(num))][0] + "%"
                    });
                }
            }
            break;
        }
    }
}

function alignPlayer (tile, usercode, type) {  
    if ((tile > 0 && tile < 10 && type === "left") || (tile > 10 && tile < 20 && type === "top")){
        document.querySelector(`.game-container .player-character[data-playercode='${usercode}']`).style[type] = (89.5-(100/12)*(tile%10)) + "%";
    } else if ((tile > 20 && tile < 30 && type === "left") || (tile > 30 && tile < 40 && type === "top")){
        document.querySelector(`.game-container .player-character[data-playercode='${usercode}']`).style[type] = (6.25+(100/12)*(tile%10)) + "%";
    } else if ((tile >= 10 && tile <= 20 && type === "left") || (tile >= 20 && tile <= 30 && type === "top")){
        document.querySelector(`.game-container .player-character[data-playercode='${usercode}']`).style[type] = "4.25%";
    } else if ((tile >= 30 && (tile <= 40 && type === "left") || tile === 0) || (tile >= 0 && tile <= 10 && type === "top")){
        document.querySelector(`.game-container .player-character[data-playercode='${usercode}']`).style[type] = "91.5%";
    }
}

function loadPlayerList() {
    document.querySelector(".game-container .players-list").innerHTML = "";

    for (let player of gameStatus.room.players){
        let frame = document.createElement("div");
        frame.dataset.playercode = player.usercode;
        frame.classList.add("trades-player");

        let img = document.createElement("img");
        img.classList.add("trades-icon");
        img.src = `/images/Monopoly/token-${player.token}.png`;

        frame.appendChild(img);
        document.querySelector(".game-container .players-list").appendChild(frame);

        frame.onclick = function () {
            loadPlayerProperties(frame.dataset.playercode);
        }
    }

    document.querySelector(".game-container .players-list").style.display = "grid";
    document.querySelector(".game-container .player-wrapper").style.display = "none";
    document.querySelector(".game-container .player-trades").style.display = "none";
}

function loadPlayerProperties(usercode, query) {

    let player = searchPlayer(usercode), trade = getTrade(USER.credentials.usercode, usercode, true), tradeRecive = getTrade(usercode, USER.credentials.usercode, true);

    document.querySelector(".game-container .players-list").style.display = "none";
    document.querySelector(".game-container .player-wrapper").style.display = "none";
    document.querySelector(".game-container .player-wrapper").dataset.playercode = usercode; 

    if (trade && (trade.status === "PENDING" || trade.status === "ACCEPTED")){
        let specialTrades = document.querySelectorAll(".game-container .trade-jailcard, .game-container .trade-currency"), focused = document.activeElement === specialTrades[0].querySelector("input");
        document.querySelector(".game-container .player-trades").style.display = "flex";
        document.querySelector(".game-container .trade-name").textContent = player.name;
        document.querySelector(".game-container .trade-properties").innerHTML = "";
        specialTrades.forEach(item => {document.querySelector(".game-container .trade-properties").appendChild(item)})
        document.querySelector(".game-container .trade-jailcard-container>p").textContent = trade.jailCards;
        document.querySelectorAll(".game-container .offer-items").forEach(item => {
            item.innerHTML = "";
        });
        if (focused) {specialTrades[0].querySelector("input").focus()}
        document.querySelector(".game-container .additional-tax").textContent = `Additional Tax: $${trade.tax}`;

        if (tradeRecive.status === "ACCEPTED") {

            if (trade.status === "ACCEPTED") {
                document.querySelector(".game-container .self-trade-status").textContent = "Trading";
                gameStatus.tradeInterval = setInterval(function () {
                    document.querySelector(".game-container .cancel-trade-confirm").textContent = `Cancel (${Math.max(parseInt(3 - (Date.now() - getTrade(usercode, USER.credentials.usercode, false)[2].time)/1000), 0)})`;
                }, 10)
            } else {
                document.querySelector(".game-container .self-trade-status").textContent = "Waiting";
                document.querySelector(".game-container .cancel-trade-confirm").textContent = "Cancel";
            }

            document.querySelector(".game-container .offer-status").textContent = "Confirmed";
            document.querySelector(".game-container .offer-status").style.color = "yellow";
        } else {
            document.querySelector(".game-container .offer-status").textContent = "Pending";
            document.querySelector(".game-container .offer-status").style.color = "rgb(136, 99, 30)";
        }

        if (trade.status === "PENDING") {
            document.querySelector(".game-container .offer-options").style.display = "flex";
            document.querySelector(".game-container .cancel-trade-confirm").style.display = "none";
            document.querySelector(".game-container .add-offer").style.display = "flex";
            document.querySelector(".game-container .self-trade-status").style.display = "none";
        } else {
            document.querySelector(".game-container .add-offer").style.display = "none";
            document.querySelector(".game-container .self-trade-status").style.display = "block";
            document.querySelector(".game-container .offer-options").style.display = "none";
            document.querySelector(".game-container .cancel-trade-confirm").style.display = "block";
        }

        trade.tax > searchPlayer().balance ? document.querySelector(".game-container .additional-tax").style.color = "red" : document.querySelector(".game-container .additional-tax").style.color = "black";

        for (let property of searchPlayer().properties) {
            if ((query && !property.name.toLowerCase().includes(query.toLowerCase())) || property.improvements !== 0 || trade.items.map(function(i) {return i.name}).includes(property.name)){continue}

            let otherImproved = false;
            for (let card of getCardGroup(property.name).names){
                for (let playerCards of searchPlayer().properties){
                    if (card === playerCards.name && playerCards.improvements !== 0){
                        otherImproved = true;
                        break;
                    }
                }
            }

            if (otherImproved) {continue}

            let item = createPropertyItem(property, false);
            item.onclick = function () {sendSocket({type:"MODIFY_TRADE", code: gameStatus.roomCode, method: "APPEND", usercode:USER.credentials.usercode, target:usercode, property:property})}
            document.querySelector(".game-container .trade-properties").appendChild(item);
        }

        for (let property of trade.items){
            let item = createPropertyItem(property, false);
            item.onclick = function () {sendSocket({type:"MODIFY_TRADE", code: gameStatus.roomCode, method: "DELETE", usercode:USER.credentials.usercode, target:usercode, property:property})}
            document.querySelector(".game-container .self-offer .offer-items").appendChild(item);
        }

        for (let property of tradeRecive.items){
            let item = createPropertyItem(property, true);
            item.onclick = function () {sendSocket({type:"MODIFY_TRADE", code: gameStatus.roomCode, method: "MODIFY", usercode:USER.credentials.usercode, target:usercode, property:property})}
            document.querySelector(".game-container .their-offer .offer-items").appendChild(item);
        }

        for (let offer of [trade, tradeRecive]){
            if (offer.currency != 0) {
                let container = document.createElement("div"), name = document.createElement("p"), logo = document.createElement("div"), img = document.createElement("img");
                name.textContent = `CURRENCY: $${offer.currency}`;
                container.dataset.static = "true";
                img.src = "/images/Monopoly/currency-icon.svg";
                logo.appendChild(img);
                container.append(logo, name);
                offer === trade ? document.querySelector(".game-container .self-offer .offer-items").appendChild(container) : document.querySelector(".game-container .their-offer .offer-items").appendChild(container)
            }
        }

        for (let offer of [trade, tradeRecive]){
            if (offer.jailCards != 0) {
                let container = document.createElement("div"), name = document.createElement("p"), logo = document.createElement("div"), img = document.createElement("img");
                name.textContent = `GET OUT OF JAIL x${offer.jailCards}`;
                container.dataset.static = "true";
                img.src = "/images/Monopoly/jailcard-icon.png";
                logo.appendChild(img);
                container.append(logo, name);
                offer === trade ? document.querySelector(".game-container .self-offer .offer-items").appendChild(container) : document.querySelector(".game-container .their-offer .offer-items").appendChild(container)
            }
        }

        if (query) {
            document.querySelector(".game-container .trade-currency").style.display = "none";
            document.querySelector(".game-container .trade-jailcard").style.display = "none";
        } else {
            document.querySelector(".game-container .trade-currency").style.display = "flex";
            document.querySelector(".game-container .trade-jailcard").style.display = "flex";
        } 

    } else {
        document.querySelector(".game-container .info-name").textContent = player.name;
        document.querySelector(".game-container .info-balance").textContent = `Balance: $${player.balance}`;
        document.querySelector(".game-container .player-wrapper").style.display = "flex";
    
        document.querySelector(".game-container .properties-list").innerHTML = "";

        for (let property of searchPlayer(usercode).properties) {
            if (query && !property.name.toLowerCase().includes(query.toLowerCase())){continue}
            let item = createPropertyItem(property, true);
            item.onclick = function () {loadPropertyDetails(item.dataset.property);changeOptionPage("property");openOptionsMenu()}
            document.querySelector(".game-container .properties-list").appendChild(item);
        }

        if (trade) {
            switch (trade.status){
                case "INVITED":
                    document.querySelector(".game-container .create-trade").textContent = "Accept";
                    document.querySelector(".game-container .create-trade").dataset.status = "invite";
                    break;
                case "WAITING":
                    document.querySelector(".game-container .create-trade").textContent = "Cancel";
                    document.querySelector(".game-container .create-trade").dataset.status = "confirm";
                    break;
            }
        } else {
            document.querySelector(".game-container .create-trade").textContent = "Offer Trade"
            document.querySelector(".game-container .create-trade").dataset.status = "trading";
        }
    }
}

function createPropertyItem (property, liftCased) {

    let container = document.createElement("div"), logo = document.createElement("div"), img = document.createElement("img"), name = document.createElement("p");
    name.textContent = property.name;
    container.dataset.property = property.name;

    if (searchCard(property.name).type === "PROPERTY"){
        logo.style["background-color"] = searchCard(property.name).color;
    } else {
        console.log(`${searchCard(property.name).img.replace("icon", "mini")}`);
        img.src = `${searchCard(property.name).img.replace("icon", "mini")}`;
        logo.appendChild(img);
    }

    if (property.mortgaged && !property.toLift && liftCased){
        container.style["background-color"] = "rgba(0,0,0,0.1)";
    }
    
    container.append(logo, name);
    return container;
}

function loadPlayerPayments() {

    if (!searchPlayer()) {
        document.querySelector(".game-container .recipt-container").style.display = "none";
        document.querySelector(".game-container .billings-container h4").style.display = "block";
        return
    }

    document.querySelector(".game-container .recipt-container").style.display = "block";
    document.querySelector(".game-container .billings-container h4").style.display = "none";
    document.querySelector(".game-container .pay-owings").style.display = "block";
    document.querySelector(".game-container .use-jailcard-container").style.display = "none";

    let owing = searchPlayer().owings;

    updateBalance();

    if (searchPlayer() && searchPlayer().balance < searchPlayer().owings.owing) {
        document.querySelector(".game-container .pay-owings").textContent = "Declare Bankcruptcy";
        document.querySelector(".game-container .pay-owings").style.color = "red";
    } else {
        document.querySelector(".game-container .pay-owings").textContent = "Confirm Payment";
        document.querySelector(".game-container .pay-owings").style.color = "rgb(5, 44, 88)";
    }


    if (document.querySelector(".game-container .actions-container .deed") !== null){
        document.querySelector(".game-container .actions-container .deed").remove();
    }

    if (gameStatus.room.auctions.length > 0){
        document.querySelector(".game-container .actions-container h4").style.display = "none";
        document.querySelector(".game-container .property-buy-offer").style.display = "none";
        document.querySelector(".game-container .property-auction-offer").style.display = "block";
        updateAuctionStatus();
        document.querySelector(".game-container .actions-container").insertBefore(createDeedCard(true, gameStatus.room.auctions[0].property.name), document.querySelector(".game-container .actions-container .property-buy-offer"));
    } else {
        document.querySelector(".game-container .property-buy-offer").style.display = "none";
        document.querySelector(".game-container .property-auction-offer").style.display = "none";
        document.querySelector(".game-container .actions-container h4").style.display = "block";
    }

    if (owing.chance && owing.owing){
        document.querySelector(".game-container .owing-amount span:first-child").textContent = owing.landing.name;
        document.querySelector(".game-container .owing-amount span:last-child").textContent = `$${owing.owing}`;
        document.querySelector(".game-container .total-owing span:last-child").textContent = `$${owing.owing}`;
    } else if (owing.ownership === "FOR_PURCHASE"){
        document.querySelector(".game-container .actions-container h4").style.display = "none";
        document.querySelector(".game-container .property-auction-offer").style.display = "none";
        document.querySelector(".game-container .property-buy-offer").style.display = "block";
        document.querySelector(".game-container .property-buy-offer .purchase-price").textContent = `Purchase this property for $${searchCard(searchPlayer().owings.landing.name).value}?`;
        document.querySelector(".game-container .actions-container").insertBefore(createDeedCard(true, searchPlayer().owings.landing.name), document.querySelector(".game-container .actions-container .property-buy-offer"));
    } else if (owing.ownership === "INCOME_TAX"){
        document.querySelector(".game-container .owing-amount span:first-child").textContent = "Income Tax";
        document.querySelector(".game-container .owing-amount span:last-child").textContent = `$${owing.owing}`;
        document.querySelector(".game-container .total-owing span:last-child").textContent = `$${owing.owing}`;
    } else if (owing.ownership === "OTHER_PLAYER"){
        document.querySelector(".game-container .owing-amount span:first-child").textContent = "Rent";
        document.querySelector(".game-container .owing-amount span:last-child").textContent = `$${owing.owing}`;
        document.querySelector(".game-container .total-owing span:last-child").textContent = `$${owing.owing}`;
    }

    if (owing.owing === 0 || !owing.owing) {
        document.querySelector(".game-container .recipt-container").style.display = "none";
        document.querySelector(".game-container .billings-container h4").style.display = "block";
    } else if (owing.owing === "unconfirmed") {
        document.querySelector(".game-container .owing-amount span:last-child").textContent = `Reroll Dice`;
        document.querySelector(".game-container .total-owing span:last-child").textContent = `Reroll Dice`;
        document.querySelector(".game-container .pay-owings").style.display = "none";
    }

    if (gameStatus.room.players[gameStatus.room.turn].owings.owing === "unconfirmed"){
        newTurn();
    }

    if (owing.ownership === "GO_TO_JAIL"){
        if (searchPlayer().jailCards > 0) {
            document.querySelector(".game-container .use-jailcard-container").style.display = "flex";
            document.querySelector(".game-container .use-jailcard-container p").textContent = `X${searchPlayer().jailCards}`;
        }
        document.querySelector(".game-container .owing-amount span:first-child").textContent = "Get Out Of Jail";
        document.querySelector(".game-container .owing-amount span:last-child").textContent = `$${owing.owing}`;
        document.querySelector(".game-container .total-owing span:last-child").textContent = `$${owing.owing}`;
    }

    document.querySelector(".game-container .end-turn-button").disabled = ((searchPlayer().owings.landing && searchPlayer().owings.owing !== 0 && (searchPlayer().owings.ownership !== "GO_TO_JAIL") || searchPlayer().turnsInJail >= 3) || !gameStatus.room.diceRolled || gameStatus.room.auctions.length > 0 || USER.credentials.usercode !== gameStatus.room.players[gameStatus.room.turn].usercode);
}

function updateAuctionStatus () {

    if (!searchPlayer()) {return}

    updateBalance();
    document.querySelector(".game-container .property-auction-offer .highest-price").textContent = `Top bid: $${gameStatus.room.auctions[0].topBid}`;
    document.querySelector(".game-container .property-auction-offer .bidder").textContent = gameStatus.room.auctions[0].bidderName !== "" ? gameStatus.room.auctions[0].bidderName : "No Bids";
    document.querySelector(".game-container .bid-input").min = gameStatus.room.auctions[0].topBid + 1;
    document.querySelector(".game-container .bid-input").max = (gameStatus.room.auctions[0].usercode === USER.credentials.usercode) ? searchPlayer().balance+gameStatus.room.auctions[0].topBid : searchPlayer().balance;
    document.querySelector(".game-container .bid-countdown").classList.remove("counting");
    document.querySelector(".game-container .bid-countdown").style.animationDelay = `-${(Date.now()-gameStatus.room.auctions[0].time)/1000}s`;
    void document.querySelector(".game-container .bid-countdown").offsetWidth;
    document.querySelector(".game-container .bid-countdown").classList.add("counting");
}

function removePlayer(index){
    document.querySelectorAll(".pre-room .player")[index].style.display = "none";
    element = document.querySelector(".pre-room .player-border");
    element.remove();
    document.querySelectorAll(".pre-room .player")[index-1].appendChild(element);
}

function loadEndRoom() {

}

function getTrade(usercode, target, index) {
    if (usercode === target) {return false}
    for (let trade of gameStatus.room.trades){
        if ([trade[0].usercode, trade[1].usercode].includes(usercode) && [trade[0].usercode, trade[1].usercode].includes(target)){
            if (index){
                if (trade[0].usercode === usercode) {
                    return trade[0]
                }
                return trade[1]
            }
            return trade;
        }
    }
    return false;
}

function searchPlayer(usercode){
    if (!usercode) {var usercode = USER.credentials.usercode}
    for (let player of gameStatus.room.players) {
        if (player.usercode === usercode){
            return player;
        }
    }
    return null;
}

function searchCard(cardName){
    for (let side of Object.values(boardLocationNames)){
        for (let card of side){
            if (card.name === cardName){
                return card;
            }
        }
    }
}

function getCardGroup(cardName) {
    for (let group of propertyGroupings){
        if (group.names.includes(cardName)){
            return group;
        }
    }
    return null;
}

function cardOwner (property) {
    for (var player of gameStatus.room.players){
        for (var item of player.properties){
            if (item.name === property){
                return player;
            }
        }
    }
    return false;
}

function updateBalance() {
    if (searchPlayer()) {
        document.querySelector(".game-container .player-balance").textContent = `$${searchPlayer().balance}`;
    }
}

/*
-----------------------
GAME ROOM
----------------------- 

Game Assets and functions {
    Alert & Notification System**
}

Known Bugs{
    Get out of jail cards returning to deck
    Incorrect player tile number**
}

*/