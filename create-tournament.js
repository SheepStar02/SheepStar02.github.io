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
checkCookie();

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
	if(self) return;

	if(confirmButton.textContent === "cancel" && message.toLowerCase() === "potatoes are the best" && tags.username === usernameInput.value) {
		confirmLogin(usernameInput.value);
	}

});

function confirmLogin(username) {
	setCookie("username", username, 60);
	confirmButton.textContent = "logout";
	usernameInputInfo.textContent = "You are now successfully logged in as " + usernameInput.value + ". Press logout at anytime to change your login information."
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
			clearCookie();
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

function setCookie(uname, uvalue, exdays){
	let date = new Date();
	date.setTime(date.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + date.toGMTString();
	document.cookie = uname + "=" + uvalue + ";" + expires + ";path=/";
}

function getCookie(uname) {
	let name = uname + "=";
	let decodedCookie = decodeURIComponent(document.cookie).split(";");
	for (c in decodedCookie){
		let char = decodedCookie[c];
		while (char.charAt(0) == ' '){
			char = c.substring(1);
		}
		if (char.indexOf(name) == 0){
			return char.substring(name.length, char.length);
		}
	}
	return "";
}

function checkCookie(){
	let user = getCookie("username");
	console.log(user);
	if (user != "") {
		confirmButton.textContent = "logout";
		usernameInput.value = getCookie("username");
		usernameInputInfo.textContent = "You are now successfully logged in as " + usernameInput.value + ". Press logout at anytime to change your login information."
		usernameInput.disabled = true;
	}
}

function clearCookie() { 
	let allCookies = document.cookie.split(';'); 
	
	for (let i = 0; i < allCookies.length; i++) 
		document.cookie = allCookies[i] + "=;expires=" 
		+ new Date(0).toGMTString(); 
} 

function createTournament(){

	let tournament = verifyCreate();
	let maxPlayers = document.getElementById("tournament-players-input").value;
	let announce = document.getElementById("announce-radio").checked;

	if (tournament === ""){

		if (announce){
			alert("Creating a Team Vs Team Bracket with " + maxPlayers + " players and will be announcing on twitch.tv/" + usernameInput.value);
		} else {
			alert("Creating a Team Vs Team Bracket with " + maxPlayers + " players");
		}

		let htmlContent = '<html>whatever</html>';

		fs.writeFile('tournaments/abcd.html');
	}
	else{
		alert(tournament);
	}
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