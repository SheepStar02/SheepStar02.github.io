const socket = new WebSocket("wss://webserveresl.herokuapp.com");

document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        loadGlobalFunctions().then(status => {loadAll()}); 
    }
}

let animationInterval;

socket.onopen = function () {
    loadServer();
}

function loadServer() {

    socket.onmessage = function (event){
        let data = JSON.parse(event.data);

        if (data.type === "CREATE_NEW_ROOM"){
            if (data.status === "SUCCESS"){
                window.open(`./room?vcode=${data.code}`, "_self");
            }
        } else if (data.type === "GET_ROOM"){
            if (data.status === "SUCCESS"){
                window.open(`./room?vcode=${data.code}`, "_self");
            }
        }
    }
}

function loadAll() {

    refreshCredentials();
    loadMenubar("play");
    addClickFunction([[[document.querySelector(".header .close"), document.querySelector(".page-overlay"), document.querySelector(".header .menu-icon")],[".page-overlay", ".header .g-menubar-container", ".header"], false]]);

    document.querySelector(".create-room .create").onclick = function () {
        document.querySelector(".create-room .create").style.display = "none";
        document.querySelector(".create-room").classList.add("animate");
        document.querySelector(".create-room .body").style.display = "block";
        animationInterval = setInterval(creatRoomChange, 5);
    }

    document.querySelector(".create-room .cancel").onclick = function () {
        document.querySelector(".create-room .create").style.display = "block";
        document.querySelector(".create-room .body").style.display = "none";
        document.querySelector(".create-room").classList.remove("animate");
    }

    document.querySelector(".create-room").addEventListener("animationend", function () {
        clearInterval(animationInterval);
    }, false);

    document.querySelector(".create-room .confirm").onclick = function (event){

        if (document.querySelector(".create-room .name").value.length === 0){
            document.querySelector(".create-room .error").style.display = "block";
        } else if (socket.readyState === WebSocket.OPEN && USER.credentials.username && USER.credentials.usercode){
            socket.send(JSON.stringify({
                type : "CREATE_NEW_ROOM",
                host : USER.credentials.username,
                usercode : USER.credentials.usercode,
                title : document.querySelector(".create-room .name").value,
                description : "More random text",
                game : "monopoly",
            }));
        } else {
            alertError("The server is currently down. Sorry about that");
        }
    }

    document.querySelector(".join-room .search-code").onclick = function (event) {

        let code = document.querySelector(".join-room .code input").value.toUpperCase();

        if (code.length === 4) {

            if (socket.readyState === WebSocket.OPEN){
                socket.send(JSON.stringify({
                    type : "GET_ROOM",
                    code : code
                }));
            } else {
                alertError("The server is currently down. Please try again later")
            }
            
        } else {
        }
    }
}

function alertError (error) {
    if (document.querySelector(".alert-box").childElementCount >= 4){
        document.querySelector(".alert-box").firstElementChild.remove();
    }
    let alert = document.createElement("div");
    alert.classList.add("alert");
    document.querySelector(".alert-box").append(alert);

    alert.append(document.createElement("p"),document.createElement("span"));
    alert.addEventListener("animationend", function (event) {
        event.target.querySelector("p").textContent = error;
        event.target.querySelector("span").textContent = "dismiss";
    })

    alert.querySelector("span").onclick = function (event) {
        event.target.parentElement.style.width = "0";
        event.target.parentElement.addEventListener("transitionend", (event) => {event.target.remove()})

        for (child of event.target.parentElement.children) {child.remove()}
        event.target.remove();
    }
}

function creatRoomChange() {
    document.querySelector(".wrapper").scrollTop = document.querySelector(".create-room").scrollHeight;
}

function refreshCredentials() {
    document.querySelector(".header .username p").innerHTML = USER.credentials.username;
}