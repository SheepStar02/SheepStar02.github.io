const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const store = firebase.firestore();

let reload = false;

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
	channels: []
});

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {

	if(self) return;

	if(message.toLowerCase() === "!join" && channel.substring(1) === tournament.host) {

		for (player of tournament.players){
			if (tags.username === player.name){
				return;
			}
		}
		tournament.players.push({name : tags.username, team : "None"});
		store.collection('codes').doc(tournament.code).update({players: tournament.players});
		loadTourney();
	}
});

let tournament =  {
	host : "",
	code : "",
	playerNum : "",
	announce : "",
	players : [],
	teams: [],
	games: [],
	began : false
}


if (urlParams.get("code") !== null){
	loadTourney();

} else {
	window.open("tournaments", "_self");
}


function loadTourney(){

	store.collection('codes').doc('All_Codes').get().then(function (doc){

		let code = urlParams.get("code");

		if (doc.data().tourneyCodes.includes(code)){

			store.collection('codes').doc(code).get().then(function (data){

				tournament.code = code;
				tournament.host = data.data().host;
				tournament.playerNum = data.data().playerNum;
				tournament.announce = data.data().announce;
				tournament.players = data.data().players;

				if (data.data().began){
					tournament.games = data.data().games;
					loadLiveTourney();
					return;
				} 

				document.getElementById("bracket").innerHTML = "";

				for (i = 0; i < tournament.players.length; i++){

					let el = document.createElement("li");
					el.id = "player" + tournament.players[i].name;
					el.innerHTML = tournament.players[i].name;
					el.style = "position:absolute;color:cyan;width:425px;text-align:center;font-size:22px;border-style:dashed;border-width:1px;border-color:orange;left:5px;top:" + (i*35+5) + "px";

					if (tournament.players[i].team === "Team 1"){
						el.style["border-color"] = "blue";
					} else if (tournament.players[i].team === "Team 2") {
						el.style["border-color"] = "red";
					}

					if (tournament.host === localStorage.getItem("username")){
						let button = document.createElement("button");
						button.style = "position:absolute;left:440px;height:28px;cursor:pointer;background:black;border:none;top:" + (i*35+5) + "px";
						let img = document.createElement("img");
						button.setAttribute('onclick',"openPlayerSettings(" + i + ")");
						img.src = "https://www.pinclipart.com/picdir/big/80-800546_this-icon-represents-settings-settings-icon-transparent-clipart.png";
						img.style = "display:block;margin-left:auto;margin-right:auto;height:20px";
						button.appendChild(img);
						document.getElementById("bracket").appendChild(button);
					}
					
					document.getElementById("bracket").appendChild(el);
					
				}

				if (tournament.host === localStorage.getItem("username") && document.getElementById("start-button") !== null){
					checkStart();
				}

				if (!reload && tournament.host === localStorage.getItem("username")){
					client.join(tournament.host);
					createPlayerSettings();
					createTeamSettings();
					createAddPlayers();
					reload = true;
				} else if (!reload){
					setInterval(frame, 1000);
					reload = true;
				}

				return true;

			});
			
		} else {
			return false;
		}
	});

}

function openPlayerSettings(index) {

	document.getElementById("player").style.display = "block";
	let name = document.getElementById("name");
	name.innerHTML = tournament.players[index].name;

	if (tournament.players[index].team === "None"){
		document.getElementById("team").selectedIndex = 0;
	} else if (tournament.players[index].team === "Team 1"){
		document.getElementById("team").selectedIndex = 1;
	} else {
		document.getElementById("team").selectedIndex = 2;
	}

}

function createPlayerSettings(){

	let startButton = document.createElement("button");
	startButton.id = "start-button";
	startButton.style = "width:200px;top:100px;left:650px;background-color:grey;height:40px;font-family:Verdana;font-size:20px;font-weight:bold;border-radius:12px;cursor:pointer;border:none;outline:none;position:absolute"
	startButton.innerHTML = "Begin";
	document.getElementById("wrapper").appendChild(startButton);
	startButton.onclick = function () {
		if (startButton.style["background-color"] === "grey"){
			return;
		}

		let team1 = document.getElementById("team1-input").value;
		let team2 = document.getElementById("team2-input").value;

		if (team1 === ""){
			team1 = "Team 1";
		} 
		if (team2 === "") {
			team2 = "Team 2";
		}

		store.collection('codes').doc(tournament.code).update({began : true, teams : [team1, team2]}).then(function () {
			location.reload();
		});
	}

	checkStart();

	let name = document.createElement("h1");
	name.id = "name";
	name.style = "color:yellowgreen;text-align:center;font-size:24px";
	document.getElementById("player").appendChild(name);

	let teamLabel = document.createElement("label");
	teamLabel.id = "team-label";
	teamLabel.innerHTML = "Choose a team";
	teamLabel.style = "left:5px;color:white;position:relative;color:orange";
	document.getElementById("player").appendChild(teamLabel);

	let team = document.createElement("select");
	team.id = "team";
	team.style = "width:150px;left:20px;position:relative;cursor:pointer";
	document.getElementById("player").appendChild(team);
	team.onchange = function () {
		for (player of tournament.players){
			if (player.name === name.innerHTML){
				player.team = team.options[team.selectedIndex].innerHTML;

				if (team.selectedIndex === 0){
					document.getElementById("player" + player.name).style["border-color"] = "orange";
				} else if (team.selectedIndex === 1){
					document.getElementById("player" + player.name).style["border-color"] = "blue";
				} else {
					document.getElementById("player" + player.name).style["border-color"] = "red";
				}

				store.collection('codes').doc(tournament.code).update({players: tournament.players});
				checkStart();

				break;
			}
		}
	}

	let option = document.createElement("option");
	option.innerHTML = "None";
	option.id = "none-option";
	team.appendChild(option);

	option = document.createElement("option");
	option.innerHTML = "Team 1";
	option.id = "team1-option";
	team.appendChild(option);

	option = document.createElement("option");
	option.innerHTML = "Team 2";
	option.id = "team2-option";
	team.appendChild(option);

	let kick = document.createElement("button");
	kick.id = "kick";
	kick.innerHTML = "Kick";
	kick.style = "background-color:red;border:none;border-radius:5px;cursor:pointer;top:20px;width:40px;margin-left:auto;margin-right:auto;display:block;position:relative";
	document.getElementById("player").appendChild(kick);
	kick.onclick = function () {
		for (player of tournament.players){
			if (player.name === name.innerHTML){
				let index = tournament.players.indexOf(player);
				tournament.players.splice(index, 1);
				store.collection('codes').doc(tournament.code).update({players:tournament.players});
				loadTourney();
			}
		}
		
		document.getElementById("player").style.display = "none";
		
	}

}

function createTeamSettings(){
	let team1 = document.createElement("div");
	team1.style = "position:absolute;width:300px;left:50px;top:50px;height:100px;border-style:solid;border-width:1px;border-color:blue"

	let team1Label = document.createElement("label");
	team1Label.style = "width:300px;color:white;position:absolute;text-align:center;top:10px;font-size:26px;color:blue";
	team1Label.innerHTML = "Team 1";

	let team1Input = document.createElement("input");
	team1Input.style = "width:250px;left:20px;top:50px;font-size:22px;position:absolute;text-align:center";
	team1Input.id = "team1-input";
	team1Input.maxLength = 20;
	team1Input.placeholder = "Team Blue";

	document.getElementById("wrapper").appendChild(team1);
	team1.appendChild(team1Label);
	team1.appendChild(team1Input);	

	let team2 = document.createElement("div");
	team2.style = "position:absolute;width:300px;left:50px;top:172px;height:100px;border-style:solid;border-width:1px;border-color:red"

	let team2Label = document.createElement("label");
	team2Label.style = "width:300px;color:white;position:absolute;text-align:center;top:10px;font-size:26px;color:red";
	team2Label.innerHTML = "Team 2";

	let team2Input = document.createElement("input");
	team2Input.style = "width:250px;left:20px;top:50px;font-size:22px;position:absolute;text-align:center";
	team2Input.id = "team2-input";
	team2Input.maxLength = 20;
	team2Input.placeholder = "Team Red";
	
	document.getElementById("wrapper").appendChild(team2);
	team2.appendChild(team2Label);
	team2.appendChild(team2Input);
}

function createAddPlayers() {
	let addPlayer = document.createElement("div");
	addPlayer.style = "position:absolute;width:300px;left:50px;top:500px;height:150px;border-style:solid;border-width:1px;border-color:chartreuse";

	let addLabel = document.createElement("label");
	addLabel.style = "width:300px;color:white;position:absolute;text-align:center;top:10px;font-size:26px;color:cyan";
	addLabel.innerHTML = "Add Players:";
	addPlayer.appendChild(addLabel);

	let addInput = document.createElement("input");
	addInput.style = "width:250px;left:20px;top:50px;font-size:22px;position:absolute;text-align:center";
	addInput.maxLength = 20;
	addInput.placeholder = "Player Name";
	addPlayer.appendChild(addInput);

	let addButton = document.createElement("button");
	addButton.id = "add-player";
	addButton.innerHTML = "Add Player";
	addButton.style = "background-color:yellowgreen;font-size:20px;border:none;border-radius:5px;cursor:pointer;top:100px;width:150px;margin-left:auto;margin-right:auto;display:block;position:relative";
	addPlayer.appendChild(addButton);
	addButton.onclick = function () {

		if (addInput.value === ""){
			alert("Player name cannot be blank");
			return;
		}

		for (player of tournament.players){
			if (player.name === addInput.value.toLowerCase()){
				alert("Player already in tournament");
				return;
			}
		}

		tournament.players.push({name : addInput.value.toLowerCase(), team : "None"});
		store.collection('codes').doc(tournament.code).update({players: tournament.players});
		loadTourney();	
		addInput.value = "";
	}
	document.getElementById("wrapper").appendChild(addPlayer);
}

function checkStart() {

	let a = false;
	let b = false;

	if (tournament.players.length < 2){
		document.getElementById("start-button").style["background-color"] = "grey";
		console.log("this");
		return;
	}

	for (player of tournament.players){
		if (player.team === "None"){
			document.getElementById("start-button").style["background-color"] = "grey";
			return;
		} else if (player.team === "Team 1"){
			a = true;
		} else {
			b = true;
		}
	}

	if (a && b){
		document.getElementById("start-button").style["background-color"] = "yellowgreen";
	} else {
		document.getElementById("start-button").style["background-color"] = "grey";
	}
}

function frame() {
	console.log("read");
	loadTourney();	
}

function loadLiveTourney() {

	document.getElementById("team-players").style.display = "block";
	document.getElementById("view-teams").style.display = "block";
	document.getElementById("score").style.display = "block";

	if (localStorage.getItem("username") === tournament.host){
		document.getElementById("send-players").style.display = "block";
		document.getElementById("end-tournament").style.display = "block";

		let player1Win = document.createElement("button");
		player1Win.style = "position:absolute;border-radius:10px;display:none;left:220px;top:10px;width:120px;height:25px;font-size:14px;border-style:none;font-weight:700;border-color:blue;border-width:3px;font-family:Georgia;background-color:lime;cursor:pointer;"
		player1Win.id = "player1-win";
		player1Win.innerHTML = "Set Winner";
		document.getElementById("send-players").appendChild(player1Win);
		player1Win.onclick = function () {
			document.getElementById("player2-win").style["border-style"] = "none";
			document.getElementById("player1-win").style["border-style"] = "solid";
		}

		let player2Win = document.createElement("button");
		player2Win.style = "position:absolute;border-radius:10px;display:none;left:220px;top:100px;width:120px;height:25px;font-size:14px;font-weight:700;border-style:none;border-color:red;border-width:3px;font-family:Georgia;background-color:lime;cursor:pointer;"
		player2Win.id = "player2-win";
		player2Win.innerHTML = "Set Winner";
		document.getElementById("send-players").appendChild(player2Win);
		player2Win.onclick = function () {
			document.getElementById("player1-win").style["border-style"] = "none";
			document.getElementById("player2-win").style["border-style"] = "solid";
		}

	}

	store.collection('codes').doc(urlParams.get("code")).get().then(function (doc) {

		tournament.teams[0] = doc.data().teams[0];
		tournament.teams[1] = doc.data().teams[1];

		document.getElementById("team1-label").innerHTML = doc.data().teams[0];
		document.getElementById("team2-label").innerHTML = doc.data().teams[1];

		document.getElementById("send-team1-label").innerHTML = doc.data().teams[0];
		document.getElementById("send-team2-label").innerHTML = doc.data().teams[1];

		for (player of tournament.players){
			let option = document.createElement("option");
			option.innerHTML = player.name;

			if (player.team === "Team 1"){
				document.getElementById("select-player1").appendChild(option);
			} else {
				document.getElementById("select-player2").appendChild(option);
			}
		}

		viewRoster(1);
		reloadBracket();
	});

}

function viewRoster(buttonNum){
	document.getElementById("view-team2-button").style["border"] = "none";
	document.getElementById("view-team1-button").style["border"] = "none";

	document.getElementById("view-team" + buttonNum + "-button").style["border"] = "3px solid indigo";

	document.getElementById("team-players").innerHTML = "";

	let counter = 0;
	
	for (player of tournament.players){
		if (player.team === "Team " + buttonNum){
			let el = document.createElement("li");
			el.innerHTML = player.name;
			el.style = "border-style:dotted;border-width:2px;border-color:orange;color:orange;font-size:20px;width:320px;list-style:none;position:absolute;left:5px;text-align:center;top:" + (counter*32+5) + "px";
			document.getElementById("team-players").appendChild(el);
			counter++;
		}
	}
}

function battle() {

	let playerOne = document.getElementById("send-team1-label");
	let playerTwo = document.getElementById("send-team2-label");

	player1Win = document.getElementById("player1-win");
	player2Win = document.getElementById("player2-win");

	let player1Select = document.getElementById("select-player1");
	let player2Select = document.getElementById("select-player2");

	if (document.getElementById("send-player-button").innerHTML === "Confirm"){

		let resultDiv = document.createElement("div");
		resultDiv.style = "position:absolute;border-style:dotted;border-color:orange;border-width:2px;left:5px;width:470px;height:80px;top:" + (document.getElementById("bracket").childElementCount*85+5)+"px";

		let team1Player = document.createElement("label");
		team1Player.style = "position:absolute;color:blue;font-size:20px;left:5px;width:470px";
		team1Player.innerHTML = document.getElementById("team1-label").innerHTML + " player : " + playerOne.innerHTML;
		resultDiv.appendChild(team1Player);

		let team2Player = document.createElement("label");
		team2Player.style = "position:absolute;color:red;font-size:20px;left:5px;width:470px;height:80px;top:25px";
		team2Player.innerHTML = document.getElementById("team2-label").innerHTML + " player : " + playerTwo.innerHTML;
		resultDiv.appendChild(team2Player);

		let winner = document.createElement("label");
		winner.style = "color:lime;position:absolute;font-size:20px;left:5px;width:470px;height:80px;top:50px";
		resultDiv.appendChild(winner);

		if (player1Win.style["border-style"] !== "none"){
			player1Win.style["border-style"] = "none";
			tournament.games.push({player1: playerOne.innerHTML, player2: playerTwo.innerHTML, winner : playerOne.innerHTML})

		} else if (player2Win.style["border-style"] !== "none") {
			player2Win.style["border-style"] = "none";
			tournament.games.push({player1: playerOne.innerHTML, player2: playerTwo.innerHTML, winner : playerTwo.innerHTML})

		} else {
			return;
		}

		store.collection('codes').doc(tournament.code).update({games : tournament.games}).then(reloadBracket());

		player1Select.style.display = "block";
		player2Select.style.display = "block";

		player1Win.style.display = "none";
		player2Win.style.display = "none";

		playerOne.innerHTML = document.getElementById("team1-label").innerHTML;
		playerOne.style.width = "130px";
		playerTwo.innerHTML = document.getElementById("team2-label").innerHTML;
		playerTwo.style.width = "130px";

		document.getElementById("send-player-button").innerHTML = "Battle";

	} else {

		let player1 = document.getElementById("send-team1-label");
		let player1Select = document.getElementById("select-player1");
		player1.style["width"] = "200px";
		player1.innerHTML = player1Select.options[player1Select.selectedIndex].innerHTML;	
		player1Select.style.display = "none";

		let player2 = document.getElementById("send-team2-label");
		let player2Select = document.getElementById("select-player2");
		player2.style["width"] = "200px";
		player2.innerHTML = player2Select.options[player2Select.selectedIndex].innerHTML;	
		player2Select.style.display = "none";

		document.getElementById("player1-win").style.display = "block";
		document.getElementById("player2-win").style.display = "block";

		document.getElementById("send-player-button").innerHTML = "Confirm";

	}

}

function reloadBracket() {

	document.getElementById("bracket").innerHTML = "";

	team1Score = 0;
	team2Score = 0;

	for (games of tournament.games){

		let resultDiv = document.createElement("div");
		resultDiv.style = "position:absolute;border-style:dotted;border-color:orange;border-width:2px;left:5px;width:470px;height:80px;top:" + (document.getElementById("bracket").childElementCount*90+5)+"px";

		let team1Player = document.createElement("label");
		team1Player.style = "position:absolute;color:blue;font-size:20px;left:5px;width:470px";
		team1Player.innerHTML = tournament.teams[0] + " player - " + games.player1;
		resultDiv.appendChild(team1Player);

		let team2Player = document.createElement("label");
		team2Player.style = "position:absolute;color:red;font-size:20px;left:5px;width:470px;height:80px;top:25px";
		team2Player.innerHTML = tournament.teams[1] + " player - " + games.player2;
		resultDiv.appendChild(team2Player);

		let playerWin = document.createElement("label");
		playerWin.style = "color:lime;position:absolute;font-size:20px;left:5px;width:470px;height:80px;top:50px";
		playerWin.innerHTML = "The winner is - " + games.winner
		resultDiv.appendChild(playerWin);

		if (games.winner === games.player1){
			team1Score++;
		} else {
			team2Score++;
		}

		document.getElementById("bracket").appendChild(resultDiv);
		document.getElementById("team1-score").innerHTML = team1Score;
		document.getElementById("team2-score").innerHTML = team2Score;

	}

}

function endTournament() {
	store.collection("codes").doc(tournament.code).delete().then(function() {
		store.collection('codes').doc('All_Codes').get().then(function (doc) {



			let docHost = doc.data().hosts;
			docHost.splice(doc.data().hosts.indexOf(tournament.host), 1);

			let docCodes = doc.data().tourneyCodes;
			docCodes.splice(doc.data().tourneyCodes.indexOf(tournament.code), 1);

			console.log(docHost);

			store.collection('codes').doc('All_Codes').update({hosts : docHost, tourneyCodes : docCodes}).then(function () {
				window.open("tournaments", "_self");
			});

		});
	});
}