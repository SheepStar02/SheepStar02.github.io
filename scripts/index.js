document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        loadGlobalFunctions().then(status => {loadAll()});
    }
}

function loadAll() {

    loadMenubar("index");

    addClickFunction([[[document.querySelector(".header .close"), document.querySelector(".page-overlay"), document.querySelector(".header .menu-icon")],[".page-overlay", ".header .g-menubar-container", ".header"]]]);

    document.querySelector(".header .username p").innerHTML = USER.credentials.username;

    document.querySelector(".image-container").onclick = function () {
        window.open("./play", "_self");
    }
}