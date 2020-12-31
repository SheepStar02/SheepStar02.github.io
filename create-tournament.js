const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
        username: 'wetbotesl',
        password: 'oauth:5s7h4txgdacvg8lupsvp12lf7xzl0k'
	},
	channels: ["wetbotesl"]
});

let textArray = [document.createTextNode("Please enter the following phrase in "), document.createTextNode(" or at "), document.createTextNode(" to verify your account: potatoes are the best")];
let confirmButton = document.getElementById("username-confirm");
let usernameInput = document.getElementById("username-input");
let usernameInputInfo = document.getElementById("username-input-instructions");
let yourChatbox = document.getElementById("your-chatbox");
let wetbotTwitch = document.getElementById("wetbot-twitchlink");
let wrapper = document.getElementById("wrapper");

const store = firebase.firestore();

if (localStorage.getItem("username") !== null){
	confirmLogin(localStorage.getItem("username"));
}


client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
	if(self) return;

	console.log(tags.username);

	if(confirmButton.textContent === "cancel" && message.toLowerCase() === "potatoes are the best" && tags.username === usernameInput.value) {
		confirmLogin(usernameInput.value);
	}

});

function changeCreateButton(hidden) {

	let button = document.getElementById("create-tournament-button");

	if (hidden){
		button.textContent = "My Tournament";	
		button.onclick = openTournament;
	} else {
		button.textContent = "Create Tournament";	
		button.onclick = createTournament;
	}
}

function openTournament() {
	let url = "tournament-page?code=" + localStorage.getItem("code");
	window.open(url, "_self");
}

function confirmLogin(username) {
	localStorage.setItem("username", username);
	confirmButton.textContent = "logout";
	usernameInput.disabled = true;
	usernameInput.value = username;
	usernameInputInfo.textContent = "You are now successfully logged in as " + usernameInput.value + ". Press logout at anytime to change your login information."

	data = store.collection('codes').doc('All_Codes');
	data.get().then(function (doc){
		if (doc.data().hosts.includes(username)){
			changeCreateButton(true);
		}
	})
}

function confirmTwitchUsername(){
	if  (confirmButton.textContent == "confirm"){
		client.join(usernameInput.value);
		confirmButton.textContent = "cancel";
		usernameInput.disabled = true;
		yourChatbox.href = "https://twitch.tv/" + usernameInput.value;
		usernameInputInfo.textContent = "";
		usernameInputInfo.appendChild(textArray[0]);
		usernameInputInfo.appendChild(yourChatbox);
		usernameInputInfo.appendChild(textArray[1]);
		usernameInputInfo.appendChild(wetbotTwitch);
		usernameInputInfo.appendChild(textArray[2]);
		document.getElementById("your-chatbox").style.display = "contents";
		document.getElementById("wetbot-twitchlink").style.display = "contents";
		
	} else {
		if (confirmButton.textContent === "logout"){
			localStorage.removeItem("username");
			changeCreateButton(false);
		}
		client.part(usernameInput.value);
		wrapper.appendChild(wetbotTwitch);
		wrapper.appendChild(yourChatbox);
		wetbotTwitch.style.display = "none";
		yourChatbox.style.display = "none";
		confirmButton.textContent = "confirm";	
		usernameInputInfo.textContent = 'Click the "confirm" button after entering your Twitch username';
		usernameInput.disabled = false;
	}
}

function generateCode(){

	let tourneyCode = "";

	for  (i = 0; i < 5; i++){
		let a = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
		tourneyCode += a;
	}

	saveTournament(tourneyCode);
}

function createTournament(){

	let error = verifyCreate();

	if (error.length !== 0){
		alert(error);
		return;
	}

	generateCode();

}

function saveTournament(tourneyCode){

	let tourney = {code : tourneyCode,
		playerNum : document.getElementById("tournament-players-input").value,
		announce : document.getElementById("announce-radio").checked,
		host : usernameInput.value,
		players : [],
		teams : [],
		games : [],
		began : false
	}

	data = store.collection('codes').doc(tourneyCode);

	store.collection('codes').doc('All_Codes').get().then(function (doc){
		if (doc.data().length === 0){
			generateCode();
		} else {
			data.set(tourney);

			let hosts = doc.data().hosts;
			let tourneyCodes = doc.data().tourneyCodes;

			tourneyCodes.push(tourneyCode);
			hosts.push(usernameInput.value);

			store.collection('codes').doc('All_Codes').set({hosts, tourneyCodes})
				.then( function (){
					window.open("tournament-page?code=" + tourneyCode, "_self");
				});
			localStorage.setItem("code", tourneyCode);
			changeCreateButton(true);
		}
		return;
	});	
}

function verifyCreate(){
	let maxPlayers = document.getElementById("tournament-players-input");

	if (confirmButton.textContent !== "logout"){
		return "ERROR: Twitch account not connected: \n" +
		"1. Enter your twitch name in the textbox under 'Twitch Username' \n" +
		"2. Press the confirm button\n" +
		"3. Enter the phrase 'potatoes are the best' in your twitch chatbox";
	} else if (maxPlayers.value.length === 0){
		return "ERROR: Max player section empty: \n"+
		"Please enter the maximum amount of players allowed in the tournament under 'Max Players'"
	} else if (isNaN(maxPlayers.value) || parseInt(maxPlayers.value) <= 1 || parseInt(maxPlayers.value) >= 51 || maxPlayers.value.includes(".")){
		return "ERROR: Max player input MUST be a numeric value between 2-50"
		}
	return "";
}

