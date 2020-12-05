if (localStorage.getItem("username") === null){
	window.open("tournament-page.html", "_self");
}

document.getElementById("wrapper").style.display = "block";
console.log(document);