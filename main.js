// =============================================================
// Game Data
// -------------------------------------------------------------
var gameData = {
	// Generic data
	party: 1,
	partyCapacity: 20,
	money: 0.0,
	clout: 0.0,
	doorFee: 0.0,
	
	rentTimer: 0,
	rentDuration: 300,
	lit: 0,
	pull: 0,
	swag: 0,
	
	partyPerInvite: 1,
	music: "none",
	
	// Supplies
	supplies: {
		100: {
			name: "Balloon",
			amount: 0,
			cost: 0.25,
			lit: 0,
			swag: 0,
			amountMod: 1,
			costMod: 1
		},
		101: {
			name: "Snack",
			amount: 0,
			cost: 10,
			lit: -2,
			swag: 0,
			amountMod: 1,
			costMod: 1
		},
		102: {
			name: "Beer Pong Table",
			amount: 0,
			cost: 50,
			lit: 5,
			swag: 2,
			amountMod: 1,
			costMod: 1
		},
		103: {
			name: "Strobe Light",
			amount: 0,
			cost: 150,
			lit: 10,
			swag: 10,
			amountMod: 1,
			costMod: 1
		},
		104: {
			name: "DJ Equipment",
			amount: 0,
			cost: 600,
			lit: 30,
			swag: 20,
			amountMod: 1,
			costMod: 1
		},
		105: {
			name: "Television Set",
			amount: 0,
			cost: 1500,
			lit: 20,
			swag: 10,
			amountMod: 1,
			costMod: 1
		},
		106: {
			name: "Bounce House",
			amount: 0,
			cost: 4000,
			lit: 50,
			swag: 0,
			amountMod: 1,
			costMod: 1
		},
		107: {
			name: "Tiger",
			amount: 0,
			cost: 20000,
			lit: 100,
			swag: 200,
			amountMod: 1,
			costMod: 1
		}
	},
	
	alcohol: {
		200: {
			name: "Beer",
			amount: 0,
			cost: 4,
			lit: 2,
			swag: 1,
			amountMod: 1,
			costMod: 1
		},
		201: {
			name: "Wine",
			amount: 0,
			cost: 12,
			lit: 1,
			swag: 5,
			amountMod: 1,
			costMod: 1
		},
		202: {
			name: "Hard Alcohol",
			amount: 0,
			cost: 30,
			lit: 20,
			swag: 3,
			amountMod: 1,
			costMod: 1
		},
		203: {
			name: "Keg",
			amount: 0,
			cost: 100,
			lit: 5,
			swag: 1,
			amountMod: 1,
			costMod: 1
		},
		204: {
			name: "Moonshine",
			amount: 0,
			cost: 250,
			lit: 100,
			swag: 1,
			amountMod: 1,
			costMod: 1
		},
		205: {
			name: "Gold Infused Liquor",
			amount: 0,
			cost: 500,
			lit: 15,
			swag: 50,
			amountMod: 1,
			costMod: 1
		},
		206: {
			name: "La Bonne Merde",
			amount: 0,
			cost: 2000,
			lit: 25,
			swag: 500,
			amountMod: 1,
			costMod: 1
		},
		207: {
			name: "Liquid Meteorite",
			amount: 0,
			cost: 50000,
			lit: 100,
			swag: 100,
			amountMod: 1,
			costMod: 1
		}
	},
	
	promotions: {
		300: {
			name: "Send a Text",
			pull: 1,
			amountMod: 1,
			pullMod: 1
		},
		301: {
			name: "Social Media Ad",
			amount: 0,
			cost: 100,
			duration: 7200, // 2 hours
			currentDuration: 0,
			pull: 2,
			amountMod: 1,
			costMod: 1,
			durationMod: 1,
			pullMod: 1
		},
		302: {
			name: "Sponsored Post",
			amount: 0,
			cost: 500,
			duration: 3600, // 1 hour
			currentDuration: 0,
			pull: 10,
			amountMod: 1,
			costMod: 1,
			durationMod: 1,
			pullMod: 1
		},
		303: {
			name: "Hire a DJ",
			amount: 0,
			cost: 2000,
			duration: 1800, // 30 minutes
			currentDuration: 0,
			pull: 50,
			amountMod: 1,
			costMod: 1,
			durationMod: 1,
			pullMod: 1
		},
		304: {
			name: "Hire a Band",
			amount: 0,
			cost: 8000,
			duration: 1200, // 20 minutes
			currentDuration: 0,
			pull: 80,
			amountMod: 1,
			costMod: 1,
			durationMod: 1,
			pullMod: 1
		},
		305: {
			name: "Celebrity Guest Appearance",
			amount: 0,
			cost: 50000,
			duration: 300, // 5 minutes
			currentDuration: 0,
			pull: 300,
			amountMod: 1,
			costMod: 1,
			durationMod: 1,
			pullMod: 1
		},
		306: {
			name: "Satellite Signal",
			amount: 0,
			cost: 10000000,
			duration: 60, // 1 minute
			currentDuration: 0,
			pull: 1,
			amountMod: 1,
			costMod: 1,
			durationMod: 1,
			pullMod: 1
		}
	},
	
	venues: {
		400: {
			name: "Your Apartment",
			amount: 1,
			cost: 0,
			capacity: 20,
			rent: 0,
			swag: 0,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		401: {
			name: "House",
			amount: 0,
			cost: 5000,
			capacity: 100,
			rent: 5,
			swag: 1,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		402: {
			name: "Mansion",
			amount: 0,
			cost: 10000,
			capacity: 300,
			rent: 50,
			swag: 5,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		403: {
			name: "Yacht",
			amount: 0,
			cost: 25000,
			capacity: 800,
			rent: 300,
			swag: 50,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		404: {
			name: "Warehouse",
			amount: 0,
			cost: 40000,
			capacity: 2000,
			rent: 200,
			swag: 20,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		405: {
			name: "Airplane Hangar",
			amount: 0,
			cost: 100000,
			capacity: 10000,
			rent: 500,
			swag: 40,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		406: {
			name: "Country",
			amount: 0,
			cost: 1000000,
			capacity: 500000,
			rent: 4000,
			swag: 100,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		},
		407: {
			name: "Planet",
			amount: 0,
			cost: 500000000,
			capacity: 8000000000,
			rent: 0,
			swag: 5000,
			amountMod: 1,
			costMod: 1,
			capacityMod: 1,
			rentMod: 1
		}
	},
	
	// Enums
	BALLOON: 100,
	SNACK: 101,
	BEERPONG: 102,
	STROBE: 103,
	DJEQUIP: 104,
	TVSET: 105,
	BOUNCEHOUSE: 106,
	TIGER: 107,
	
	BEER: 200,
	WINE: 201,
	HARDALC: 202,
	KEG: 203,
	MOONSHINE: 204,
	GOLDLIQUOR: 205,
	LABONNEM: 206,
	LMETEORITE: 207,
	
	TEXT: 300,
	SOCAD: 301,
	SPONPOST: 302,
	HIREDJ: 303,
	HIREBAND: 304,
	CELEB: 305,
	SATSIG: 306,
	
	APARTMENT: 400,
	HOUSE: 401,
	MANSION: 402,
	YACHT: 403,
	WAREHOUSE: 404,
	HANGAR: 405,
	COUNTRY: 406,
	PLANET: 407
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
		updateTextMessage(chance.name(), noRoomList, Math.floor(Math.random()*noRoomList.length));
	// Successful invite
	} else if (gameData.clout - gameData.doorFee + 0.1 >= Math.random()) {
		gameData.party += gameData.partyPerInvite;
		gameData.money += gameData.doorFee;
		
		updateStatDisplay();
		updateButtons();
		updateTextMessage(chance.name(), acceptanceList, Math.floor(Math.random()*acceptanceList.length));
	// Unsuccessful invite
	} else {
		updateTextMessage(chance.name(), rejectionList, Math.floor(Math.random()*rejectionList.length));
	}
}

/* function buySupply(item, cost) {
	textMessages.log(item);
	
	if (gameData.money >= cost) {
		gameData.money -= cost;
		item += 1;
		updateAll();
	} else {
		updateTextMessage(chance.phone(), key, 2);
	}
} */

function doorFee (amount) {
	gameData.doorFee += amount;
	if (gameData.doorFee <= 0) gameData.doorFee = 0;
	updateStatDisplay();
	updateButtons();
}

function digForChange() {
	gameData.money += Math.random()*0.25;
	updateStatDisplay();
}

function kickSomeoneOut() {
	if (gameData.party > 1) {
		gameData.party -= 1;
		updateTextMessage(chance.name(), kickedOutList, Math.floor(Math.random()*kickedOutList.length));
		updateStatDisplay();
		updateButtons();
	}
}
// =============================================================


// =============================================================
// Update functions
// -------------------------------------------------------------
function updateStatDisplay() {
	document.getElementById("party").innerHTML = gameData.party + "/" + gameData.partyCapacity + " Attendees";
	document.getElementById("money").innerHTML = "Money: $" + gameData.money.toFixed(2);
	document.getElementById("clout").innerHTML = "Clout: " + gameData.clout.toFixed(2) + "%";
	document.getElementById("doorFee").innerHTML = "Door Fee: $" + gameData.doorFee.toFixed(2);
	
	/* document.getElementById("balloon").innerHTML = gameData.supplies.balloon + " Balloons";
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
	document.getElementById("speakerUpgrade").innerHTML = "Buy ($" + gameData.cost.speakerCost + ")"; */
}

function updateButtons() {
	if (gameData.doorFee <= 0) document.getElementById("doorFeeDown").disabled = true;
	else document.getElementById("doorFeeDown").disabled = false;
	
	if (gameData.party <= 1) document.getElementById("kickSomeoneOut").disabled = true;
	else document.getElementById("kickSomeoneOut").disabled = false;
	
	/* if (gameData.money >= gameData.cost.balloonCost) document.getElementById("balloonUpgrade").disabled = false;
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
	else document.getElementById("speakerUpgrade").disabled = true; */
}

function updateClout() {
	gameData.clout = gameData.party * 0.001;
	updateStatDisplay();
}

function updateTextMessage(name, type, index) {
	var newItem = document.createElement("LI");
	
	switch (type) {
		case keyList: newItem.id = "keyMessage"; break;
		case acceptanceList: newItem.id = "acceptanceMessage"; break;
		case rejectionList: newItem.id = "rejectionMessage"; break;
		default: newItem.id = "normalMessage"; break;
	}
	
	var textNode = document.createTextNode(name + ": " + type[index] + " (" + getTimestamp() + ")");
	newItem.appendChild(textNode);
	var list = document.getElementById("textMessages");
	list.insertBefore(newItem, list.childNodes[0]);
}

function updateFaceSpaceFeed(name, type, index) {
	var newItem = document.createElement("LI");
	
	var textNode = document.createTextNode(name + " says " + type[index] + " (" + getTimestamp() + ")");
	newItem.appendChild(textNode);
	var list = document.getElementById("faceSpaceFeed");
	list.insertBefore(newItem, list.childNodes[0]);
}

function updateAll() {
	updateStatDisplay();
	updateButtons();
	updateClout();
}
// =============================================================


// =============================================================
// Main Game Loop
// -------------------------------------------------------------
var mainGameLoop = window.setInterval(function() {
	updateAll();
	
	// Random FaceSpace update every 45 seconds
	if (Math.random() <= 1/45) {
		updateFaceSpaceFeed(chance.name(), genericUpdates, Math.floor(Math.random()*genericUpdates.length));
	}
}, 1000)
// =============================================================


// =============================================================
// Data Management
// -------------------------------------------------------------
// Load game on page load
var gameSave = JSON.parse(localStorage.getItem("partyUniverseSave"));
if (gameSave !== null) {
	gameData = gameSave
	updateTextMessage(chance.phone(), keyList, 1);
} else {
	// New game
	updateTextMessage(chance.phone(), keyList, 0);
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