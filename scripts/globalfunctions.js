class User {

    localStorage = window.localStorage;
    sessionStorage = window.sessionStorage;
    storageMap = ["username","isGuest","password","usercode"];
    credentials = {};

    constructor(){}

    login (credentials){
        for (let item = 0; item < credentials.getItem("userCredentials").split(",").length; item++){
            this.credentials[this.storageMap[item]] = credentials.getItem("userCredentials").split(",")[item];
        }
        sessionStorage.setItem("userCredentials", Object.values(this.credentials));
        localStorage.setItem("userCredentials", Object.values(this.credentials));
    }

    update(credentials){
        sessionStorage.setItem("userCredentials",credentials);
        this.login(this.sessionStorage);
    }

    guest() {
        localStorage.clear();
        localStorage.setItem("userCredentials", ["Guest Username,true," +  generateCode(10, 20, [65,26]), generateCode(12, 12, [48, 10])]);
        localStorage.setItem("toSave", true);
    }
}

const USER = new User(), firestore = firebase.firestore();

function loadGlobalFunctions() {
    return(loadStorageData().then(status => {
        if (status === "guest" || status === "local"){
            USER.login(USER.localStorage);
        } else {
            USER.login(USER.sessionStorage);
        }
        return status;
    }));
}

function loadStorageData(){

    let local = [], session = [];
    if (USER.localStorage.getItem("userCredentials") !== null){local = USER.localStorage.getItem("userCredentials").split(",")}
    if (USER.sessionStorage.getItem("userCredentials") !== null){session = USER.sessionStorage.getItem("userCredentials").split(",")}

    if (session.length === 0) {
        if (USER.localStorage.getItem("toSave") === "true"){
            if (local[1] === "true"){return Promise.resolve("local")} 
            return(firebaseLogin(local[0], local[2]).then(promise => {
                if (promise){return "local"}
                USER.guest();
                return "guest";
            }));
        } else {
            USER.guest();
            return Promise.resolve("guest");
        }
    } else {
        if (session[1] === "true"){return Promise.resolve("session")} 
        return(firebaseLogin(session[0], session[2]).then(promise => {
            if (promise){return "session"}
            USER.guest();
            return "guest";
        }));
    }
}

function firebaseLogin(username, password){
    return(firebase.firestore().collection("player-accounts").doc("user-login-information").get().then(data => {
        if (data.data()[username] !== undefined && data.data()[username].password === password){
            return data.data()[username]["client-ID"];
        } else {return false}
    }));
}

function loadMenubar(currentPage) {
    document.querySelectorAll(".header .link").forEach(item => {
        item.onclick = function () {
            if (item.classList.contains("index")){
                window.open("./", "_self");
            } else if (!item.classList.contains(currentPage)){
                window.open(`/${item.classList[1]}.html`, "_self");
            }
        } 
    });
}

function changeVisibility(itemList){
    itemList.forEach(item => {
        if (document.querySelector(item).classList.contains("show")){
            document.querySelector(item).classList.remove("show");
            document.querySelector(item).classList.add("hide");
        } else {  
            document.querySelector(item).classList.add("show");
            document.querySelector(item).classList.remove("hide");
        }
    });  
}

function addClickFunction (addOnClickList) {
    addOnClickList.forEach(item => {
        item[0].forEach(element => {
            element.onclick = function () {
                changeVisibility(item[1]);
                if (item[2]) {additionalClickTrigger(element);}
            }
        });
    });
}

function sendSocket(message, response) {
    if (response){
        do {message.id = generateCode(26, 26, [65,26])} while (socketId[message.id] !== undefined);
        socketId[message.id] = response;
    }
    socket.send(JSON.stringify(message));
}

function generateCode (start, end, param) {
        
    let password = "";

    for (let count = 0; count < Math.random()*(end-start)+start; count++){
        password += String.fromCharCode(Math.random()*param[1]+param[0]);
    }

    return password;
}