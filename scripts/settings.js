document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        loadGlobalFunctions().then(status => {loadAll()}); 
    }
}

function loadAll() {

    refreshCredentials();

    addClickFunction([[[document.querySelector(".header .close"), document.querySelector(".page-overlay"), document.querySelector(".header .menu-icon")],[".page-overlay", ".header .g-menubar-container", ".header"], false],
        [Array.from(document.querySelectorAll(".guest-settings-container .warning button")).concat(document.querySelector(".login-overlay")),[".login-overlay", ".login-container", ".content-wrapper"],true],
        [Array.from(document.querySelectorAll(".account-container .danger button")).concat(document.querySelector(".warning-overlay")).concat(document.querySelector(".logout-container [data-for='deny']")),[".warning-overlay", ".logout-container", ".content-wrapper"],true]]);
    
    loadMenubar("settings");

    if (USER.credentials.isGuest === "true"){

        document.querySelector(".registered-wrapper").style.display = "none";
        document.querySelector(".guest-wrapper").style.display = "block";

        document.querySelectorAll(".content-wrapper .item").forEach(item => {
            item.lastChild.textContent = USER.credentials[item.classList[1]];
        })
    
        Array.prototype.slice.call(document.querySelectorAll(".credentials-container h3:last-child"),1,3).forEach(item => {
            item.onclick = function (event) {updateCredientialsView(event.target)}
            item.style.cursor = "pointer";
            updateCredientialsView(item);
        });
    
        document.querySelectorAll(".login-container .switch-type span:last-child").forEach(item => {
            item.onclick = function (event) {
                changeLoginType(item.dataset.selector);
            }
        })
    
        document.querySelector(".login-container .register-page button").onclick = function (event) {
            
            firebase.firestore().collection("player-accounts").doc("user-login-information").get().then(data => {
    
                let registerCode = validateRegistration(data.data());
                
                if (registerCode === undefined) {
                    createNewAccount(generateCode(12, 12, [48, 10]));

                } else {
                    document.querySelector(".login-container .register-page .warning p").style.display = "block";
                    document.querySelector(".login-container .register-page .warning p").textContent = registerCode;
                }
            });
        }
    
        document.querySelector(".login-container .login-page button").onclick = function (event) {

            let username = document.querySelector(".login-container .login-page .username").value, password = document.querySelector(".login-container .login-page .password").value;
            firebaseLogin(username, password).then(status =>{  
                if (status){
                    localStorage.setItem("toSave", document.getElementById("remember-me-checkbox").checked);
                    USER.update([username, "false", password, status]);
                    window.open("./", "_self");
                } else {
                    document.querySelector(".login-container .login-page .warning p").style.display = "block";
                    document.querySelector(".login-container .login-page .warning p").textContent = "Your username or password is incorrect!";
                }
            });
        }
    } else {
        document.querySelector(".guest-wrapper").style.display = "none";

        Array.prototype.slice.call(document.querySelectorAll(".content-wrapper .account-cred p"),1,3).forEach(item => {
            updateCredientialsView(item);
        });

        document.querySelectorAll(".content-wrapper .account-cred span[data-for]").forEach(item => {
            item.onclick = function (event){
                updateCredientialsView(document.querySelector(`.content-wrapper .${event.target.dataset.for} p`));
            }
        });

        document.querySelectorAll(".content-wrapper .account [data-change-for]").forEach(item => {
            item.onclick = function (event) {
                document.querySelector(".content-wrapper .set-wrapper").style.display = "none";
                document.querySelector(`.content-wrapper .change-info.${item.dataset.changeFor}`).style.display = "block";
            }
        });

        document.querySelectorAll(".content-wrapper .change-info .cancel").forEach(item => {
            item.onclick = function () {closeChangeCredentials(item.dataset.cancel)}
        });

        document.querySelectorAll(".content-wrapper .change-info .confirm").forEach(item => {
            item.onclick = function (){

                let element = document.querySelector(`.content-wrapper .${item.dataset.confirm} .input-container`), error = validateCredential(element.firstElementChild.value);

                let displayErr = function (err) {
                    document.querySelector(`.content-wrapper .${item.dataset.confirm} .error`).textContent = err;
                    document.querySelector(`.content-wrapper .${item.dataset.confirm} .error`).style.display = "block";
                }

                if (error){
                    displayErr(`New ${item.dataset.confirm} ${error}`);
                    return;
                }

                console.log(firebase.firestore().collection("player-accounts").doc("user-login-information"));

                if (item.dataset.confirm === "username"){
                    if (element.children[1].value !== USER.credentials.password){
                        displayErr("Incorrect password!");
                    } else if (element.firstElementChild.value === USER.credentials.username) {
                        displayErr("New username cannot be your current username");
                    } else {
                        firebase.firestore().collection("player-accounts").doc("user-login-information").get().then(data => {
                            let playerInfo = data.data()[USER.credentials.username];
                            firebase.firestore().collection("player-accounts").doc("user-login-information").update({
                                [USER.credentials.username]:firebase.firestore.FieldValue.delete(),
                                [element.firstElementChild.value]:playerInfo
                            });
                            USER.update([element.firstElementChild.value, USER.credentials.isGuest, USER.credentials.password, USER.credentials.usercode]);
                            refreshCredentials();
                            closeChangeCredentials("username");
                        })
                    }
                } else if (item.dataset.confirm === "password"){
                    if (element.children[2].value !== USER.credentials.password){
                        displayErr("Incorrect password!");
                    } else if (element.firstElementChild.value !== element.children[1].value) {
                        displayErr("Passwords do not match!");
                    } else {
                        firebase.firestore().collection("player-accounts").doc("user-login-information").update({
                            [USER.credentials.username + ".password"] : element.firstElementChild.value
                        });
                        USER.update([USER.credentials.username, USER.credentials.isGuest, element.firstElementChild.value, USER.credentials.usercode]);
                        refreshCredentials();
                        closeChangeCredentials("password");
                    }
                }          
            }
        });

        document.querySelector(".logout-container [data-for]").onclick = function (event) {
            USER.localStorage.clear();
            USER.sessionStorage.clear();
            if (event.target.dataset.warning === "delete-account"){
                firebase.firestore().collection("player-accounts").doc("user-login-information").update({
                    [USER.credentials.username] : firebase.firestore.FieldValue.delete()
                }).then(status => {window.open("./", "_self");});
            } else {
                window.open("./", "_self");
            }
            
        }
    }
}

function validateCredential(text) {
    if (text.length < 4){
        return "is too short!";
    } else if (text.match(/^[a-zA-Z0-9_]+$/) === null) {
        return "cannot contain special characters!";
    }
}

function validateRegistration(data) {
    if (document.querySelector(".login-container .register-page .password").value !== document.querySelector(".login-container .register-page .confirm").value){
        return "Passwords do not match!";
    }

    for (item of document.querySelectorAll(".login-container .register-page input[placeholder]")) {
        let returnCode = validateCredential(item.value);
        if (returnCode !== undefined){return `Your ${item.classList[0]} ${returnCode}`}
    }

    if (data[document.querySelector(".login-container .register-page .username").value] !== undefined) {
        return "Username taken!";
    }
}

function createNewAccount(code) {
    firebase.firestore().collection("player-accounts").doc("user-login-information").update({
        [document.querySelector(".login-container .register-page .username").value] : {
            password : document.querySelector(".login-container .register-page .password").value,
            ["client-ID"] : code
        } 
    }).then(function e () {
        USER.update([document.querySelector(".login-container .register-page .username").value, "false", document.querySelector(".login-container .register-page .password").value, code])
        USER.localStorage.setItem("toSave", true);
        window.open("./", "_self");
    });
}

function changeLoginType(type){
    if (type === "login"){
        document.querySelector(".login-container .register-page").style.display = "none";
        document.querySelector(".login-container .login-page").style.display = "block";
    } else if (type === "register"){
        document.querySelector(".login-container .register-page").style.display = "block";
        document.querySelector(".login-container .login-page").style.display = "none";
    }
}

function updateCredientialsView(element){
    if (element.style["-webkit-text-security"] !== ""){
        element.style["-webkit-text-security"] = "";
    } else {
        element.style["-webkit-text-security"] = "disc";
    }
}

function refreshCredentials() {
    document.querySelector(".header .username p").innerHTML = USER.credentials.username;

    if (USER.credentials.isGuest === "false"){
        document.querySelectorAll(".content-wrapper .account-cred").forEach(item => {
            item.querySelector("p").textContent = USER.credentials[item.classList[0]];
        });
    }
}

function closeChangeCredentials(data) {
    document.querySelector(".content-wrapper .set-wrapper").style.display = "block";
    document.querySelector(`.content-wrapper .change-info.${data}`).style.display = "none";
    document.querySelectorAll(".content-wrapper .change-info input").forEach(item => {item.value = ""})
}

function additionalClickTrigger(event){
    if (event.dataset.selector === "login" || event.dataset.selector === "register"){
        document.querySelectorAll(".login-container .warning p").forEach(item => {item.style.display = "none"});
        changeLoginType(event.dataset.selector);
    } else if (event.dataset.selector === "logout" || event.dataset.selector === "delete-account"){
        console.log(event.dataset.selector);
        document.querySelector(".logout-container [data-for='confirm']").dataset.warning = event.dataset.selector;
        if (event.dataset.selector === "delete-account"){
            document.querySelector(".logout-container p").textContent = "Deleting the account '" + USER.credentials.username + "' will forever delete all of the data saved in this profile. The proccess is irreversable similar to child birth in *most* countries. Are you sure you would like to do this."
        } else {
            document.querySelector(".logout-container p").textContent = "Are you sure you want to log out? Don't worry, you will be able to sign back in at any time just make sure you rememeber your pasword. All of your progresss will be saved when you log out of your account." 
        }
    }
}