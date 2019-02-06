var gameData = {
	party: 1,
	money: 0.00,
	clout: 0.00,
	partyPerInvite: 1,
	
	beer: 0,
	beerCost: 5
}

function inviteSomeone() {
	if (gameData.clout + 0.1 >= Math.random()) {
		gameData.party += gameData.partyPerInvite;
		gameData.money += (Math.floor(Math.random() * 500))/100 + 1;
		
		updateStatDisplay();
		updateButtons();
		updateConsole(acceptanceList);
	} else {
		updateConsole(rejectionList);
	}
}

function buyBeer() {
	if (gameData.money >= gameData.beerCost) {
		gameData.money -= gameData.beerCost;
		gameData.beer += 1;
		updateStatDisplay();
		updateButtons();
	}
}

function updateStatDisplay() {
	document.getElementById("party").innerHTML = gameData.party + " Party Goers";
	document.getElementById("money").innerHTML = "$" + gameData.money.toFixed(2);
	document.getElementById("clout").innerHTML = gameData.clout.toFixed(2) + "% Clout";
	
	document.getElementById("beer").innerHTML = gameData.beer + " Beer";
}

function updateButtons() {
	if (gameData.money >= gameData.beerCost) {
		document.getElementById("beerUpgrade").disabled = false;
	} else {
		document.getElementById("beerUpgrade").disabled = true;
	}
}

function updateClout() {
	gameData.clout = gameData.party * 0.001;
	updateStatDisplay();
}

function updateConsole(type) {
	var newItem = document.createElement("LI");
	
	if (type == acceptanceList) {
		newItem.id = "acceptanceMessage";
	} else if (type == rejectionList) {
		newItem.id = "rejectionMessage";
	} else {
		newItem.id = "normalMessage";
	}
	
	var textNode = document.createTextNode(type[Math.floor(Math.random()*type.length)]);
	newItem.appendChild(textNode);
	var list = document.getElementById("console");
	list.insertBefore(newItem, list.childNodes[0]);
}

var mainGameLoop = window.setInterval(function() {
	updateStatDisplay();
	updateButtons();
	updateClout();
}, 1000)

/*
var saveGameLoop = window.setInterval(function() {
	localStorage.setItem('partyUniverseSave', JSON.stringify(gameData))
}, 15000)

var gameSave = JSON.parse(localStorage.getItem("partyUniverseSave"))
if (gameSave !== null) {
	gameData = gameSave
}
*/