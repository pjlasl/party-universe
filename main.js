// =============================================================
// Game Data
// -------------------------------------------------------------
var gameData = {
	party: 1,
	partyCapacity: 50,
	money: 0.00,
	clout: 0.00,
	partyPerInvite: 1,
	
	supplies: {
		balloon: 0,
		beer: 0,
		hardAlcohol: 0,
		beerPongTable: 0,
		keg: 0,
		speaker: 0
	},
	
	cost: {
		balloonCost: 0.25,
		beerCost: 4,
		hardAlcoholCost: 12,
		beerPongTableCost: 50,
		kegCost: 100,
		speakerCost: 300
	}
};
// =============================================================


// =============================================================
// Utility functions
// -------------------------------------------------------------
function getTimestamp() {
	var date = new Date();
	return date.toLocaleTimeString();
}
// =============================================================


// =============================================================
// Button functions
// -------------------------------------------------------------
function invite() {
	// Party at capacity
	if (gameData.party >= gameData.partyCapacity) {
		updateConsole(chance.name(), noRoomList, Math.floor(Math.random()*noRoomList.length));
	// Successful invite
	} else if (gameData.clout + 0.1 >= Math.random()) {
		gameData.party += gameData.partyPerInvite;
		gameData.money += (Math.floor(Math.random() * 500))/100 + 1;
		
		updateStatDisplay();
		updateButtons();
		updateConsole(chance.name(), acceptanceList, Math.floor(Math.random()*acceptanceList.length));
	// Unsuccessful invite
	} else {
		updateConsole(chance.name(), rejectionList, Math.floor(Math.random()*rejectionList.length));
	}
}

function buySupply(item, cost) {
	console.log(item);
	
	if (gameData.money >= cost) {
		gameData.money -= cost;
		item += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}

function buyBalloon() {
	if (gameData.money >= gameData.cost.balloonCost) {
		gameData.money -= gameData.cost.balloonCost;
		gameData.supplies.balloon += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}

function buyBeer() {
	if (gameData.money >= gameData.cost.beerCost) {
		gameData.money -= gameData.cost.beerCost;
		gameData.supplies.beer += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}

function buyHardAlcohol() {
	if (gameData.money >= gameData.cost.hardAlcoholCost) {
		gameData.money -= gameData.cost.hardAlcoholCost;
		gameData.supplies.hardAlcohol += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}

function buyBeerPongTable() {
	if (gameData.money >= gameData.cost.beerPongTableCost) {
		gameData.money -= gameData.cost.beerPongTableCost;
		gameData.supplies.beerPongTable += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}

function buyKeg() {
	if (gameData.money >= gameData.cost.kegCost) {
		gameData.money -= gameData.cost.kegCost;
		gameData.supplies.keg += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}

function buySpeaker() {
	if (gameData.money >= gameData.cost.speakerCost) {
		gameData.money -= gameData.cost.speakerCost;
		gameData.supplies.speaker += 1;
		updateAll();
	} else {
		updateConsole(chance.phone(), key, 2);
	}
}
// =============================================================



// =============================================================
// Update functions
// -------------------------------------------------------------
function updateStatDisplay() {
	document.getElementById("party").innerHTML = gameData.party + " / " + gameData.partyCapacity + " Attendees";
	document.getElementById("money").innerHTML = "$" + gameData.money.toFixed(2);
	document.getElementById("clout").innerHTML = gameData.clout.toFixed(2) + "% Clout";
	
	document.getElementById("balloon").innerHTML = gameData.supplies.balloon + " Balloons";
	document.getElementById("beer").innerHTML = gameData.supplies.beer + " Beers";
	document.getElementById("hardAlcohol").innerHTML = gameData.supplies.hardAlcohol + " Bottles of Hard Alcohol";
	document.getElementById("beerPongTable").innerHTML = gameData.supplies.beerPongTable + " Beer Pong Tables";
	document.getElementById("keg").innerHTML = gameData.supplies.keg + " Kegs";
	document.getElementById("speaker").innerHTML = gameData.supplies.speaker + " Speakers";
	
	document.getElementById("balloonUpgrade").innerHTML = "Buy ($" + gameData.cost.balloonCost + ")";
	document.getElementById("beerUpgrade").innerHTML = "Buy ($" + gameData.cost.beerCost + ")";
	document.getElementById("hardAlcoholUpgrade").innerHTML = "Buy ($" + gameData.cost.hardAlcoholCost + ")";
	document.getElementById("beerPongTableUpgrade").innerHTML = "Buy ($" + gameData.cost.beerPongTableCost + ")";
	document.getElementById("kegUpgrade").innerHTML = "Buy ($" + gameData.cost.kegCost + ")";
	document.getElementById("speakerUpgrade").innerHTML = "Buy ($" + gameData.cost.speakerCost + ")";
}

function updateButtons() {
	if (gameData.money >= gameData.cost.balloonCost) document.getElementById("balloonUpgrade").disabled = false;
	else document.getElementById("balloonUpgrade").disabled = true;
	
	if (gameData.money >= gameData.cost.beerCost) document.getElementById("beerUpgrade").disabled = false;
	else document.getElementById("beerUpgrade").disabled = true;
	
	if (gameData.money >= gameData.cost.hardAlcoholCost) document.getElementById("hardAlcoholUpgrade").disabled = false;
	else document.getElementById("hardAlcoholUpgrade").disabled = true;
	
	if (gameData.money >= gameData.cost.beerPongTableCost) document.getElementById("beerPongTableUpgrade").disabled = false;
	else document.getElementById("beerPongTableUpgrade").disabled = true;
	
	if (gameData.money >= gameData.cost.kegCost) document.getElementById("kegUpgrade").disabled = false;
	else document.getElementById("kegUpgrade").disabled = true;
	
	if (gameData.money >= gameData.cost.speakerCost) document.getElementById("speakerUpgrade").disabled = false;
	else document.getElementById("speakerUpgrade").disabled = true;
}

function updateClout() {
	gameData.clout = gameData.party * 0.001;
	updateStatDisplay();
}

function updateConsole(name, type, index) {
	var newItem = document.createElement("LI");
	
	switch (type) {
		case keyList: newItem.id = "keyMessage"; break;
		case acceptanceList: newItem.id = "acceptanceMessage"; break;
		case rejectionList: newItem.id = "rejectionMessage"; break;
		case noRoomList: newItem.id = "noRoomMessage"; break;
		default: newItem.id = "normalMessage"; break;
	}
	
	var textNode = document.createTextNode(name + ": " + type[index] + " (" + getTimestamp() + ")");
	newItem.appendChild(textNode);
	var list = document.getElementById("console");
	list.insertBefore(newItem, list.childNodes[0]);
}

function updateAll() {
	updateStatDisplay();
	updateButtons();
	updateClout();
}
// =============================================================


// Main Game Loop
var mainGameLoop = window.setInterval(function() {
	updateAll();
}, 1000)

// =============================================================
// Data Management
// -------------------------------------------------------------
// Load game on page load
var gameSave = JSON.parse(localStorage.getItem("partyUniverseSave"));
if (gameSave !== null) {
	gameData = gameSave
	updateConsole(chance.phone(), keyList, 1);
} else {
	// New game
	updateConsole(chance.phone(), keyList, 0);
}
updateAll();

function loadGame() {
	location.reload();
}

function saveGame() {
	localStorage.setItem("partyUniverseSave", JSON.stringify(gameData))
}

// Autosave every 15 seconds
var saveGameLoop = window.setInterval(function() {
	saveGame();
}, 15000)

// Delete save
function deleteSave() {
	localStorage.removeItem("partyUniverseSave");
	loadGame();
}
// =============================================================