// =============================================================
// main.js
// -------------------------------------------------------------
// This is where the heart of the game lies.
// =============================================================


// =============================================================
// Utility functions
// -------------------------------------------------------------
function getTimestamp() {
	var date = new Date();
	return date.toLocaleTimeString();
}

function getHiddenStatsInConsole() {
	console.log("Lit: " + gameData.lit + ", Swag: " + gameData.swag + ", Pull: " + gameData.pull + ", Karma: " + gameData.karma + ", Luck: " + gameData.luck + ", Rent Timer: " + gameData.rentTimer);
}
// =============================================================


// =============================================================
// Button functions
// -------------------------------------------------------------
function sendAText() {
	var textCost = gameInfo.promotions[300].cost * gameData.promotions[300].costMod;

	// Party at capacity
	if (gameData.party >= gameData.partyCapacity) {
		updateTextMessage(chance.name(), noRoomList[Math.floor(Math.random()*noRoomList.length)], "reject");
	// Money check
	} else if (gameData.money >= textCost) {
		gameData.money -= textCost;
		
		// Success calculation
		var chanceOfSuccess = (gameData.clout*50 - gameData.doorFee)/100;
		if (chanceOfSuccess < 0) chanceOfSuccess = 0;
		if (gameData.doorFee <= 0) chanceOfSuccess = 0.5;
		
		// Debug
		console.log("Chance of success: " + chanceOfSuccess*100 + "%");
		
		if (chanceOfSuccess >= Math.random()) {
			gameData.party += 1;
			gameData.money += gameData.doorFee;
			updateTextMessage(chance.name(), acceptanceList[Math.floor(Math.random()*acceptanceList.length)], "accept");
		// Unsuccessful invite
		} else {
			updateTextMessage(chance.name(), rejectionList[Math.floor(Math.random()*rejectionList.length)], "reject");
		}
	} else {
		console.log("Not enough money but button has been clicked somehow?");
	}
	
	updateStatDisplay();
}

function doorFee (amount) {
	gameData.doorFee += amount;
	if (gameData.doorFee <= 0) gameData.doorFee = 0;
	updateStatDisplay();
}

function digForChange() {
	gameData.money += Math.random() * 0.20;
	updateStatDisplay();
}

function kickSomeoneOut() {
	if (gameData.party > 1) {
		gameData.party -= 1;
		updateTextMessage(chance.name(), kickedOutList[Math.floor(Math.random()*kickedOutList.length)], "reject");
		updateStatDisplay();
	}
}

function submitPost() {
	updateFriendSpaceFeed("You", "The Party", document.getElementById("statusUpdate").value);
	document.getElementById("statusUpdate").value = "";
}
// =============================================================


// =============================================================
// Update functions
// -------------------------------------------------------------
function updateStatDisplay() {
	updateButtons();
	updateClout();
	
	document.getElementById("party").innerHTML = gameData.party + "/" + gameData.partyCapacity + " Attendees";
	document.getElementById("money").innerHTML = "Money: $" + gameData.money.toFixed(2);
	document.getElementById("clout").innerHTML = "Clout: " + gameData.clout.toFixed(2) + "%";
	document.getElementById("doorFee").innerHTML = "Door Fee: $" + gameData.doorFee.toFixed(2);
}

function updateButtons() {
	if (gameData.doorFee <= 0) document.getElementById("doorFeeDown").disabled = true;
	else document.getElementById("doorFeeDown").disabled = false;
		
	if (gameData.party <= 1) document.getElementById("kickSomeoneOut").disabled = true;
	else document.getElementById("kickSomeoneOut").disabled = false;
	
	if (gameData.money < gameInfo.promotions[300].cost * gameData.promotions[300].costMod) document.getElementById("sendAText").disabled = true;
	else document.getElementById("sendAText").disabled = false;
}

function updateClout() {
	// Clout is: 50% party size (max 1,000,000), 25% money saved (max $10,000,000), 25% lit/swag balance,
	// There's also a slight bend to it so it's not so linear.
	var partySizeCalc = (gameData.party - 1)/1000000*0.5; // Result: 0 - 0.5
	var moneySavedCalc = gameData.money/10000000*0.25; // Result: 0 - 0.25
	var litSwagBalanceCalc = Math.abs(gameData.lit/1000 - gameData.swag/1000) * 0.25; // Result: 0 - 0.25
	
	var total = partySizeCalc + moneySavedCalc + litSwagBalanceCalc; // Result: 0 - 1
	
	// Bend the results
	var bendFactor = 0.5; // Between 0 - 1. The smaller the number, the stricter the bend (faster start, slow end)
	var calculation = -Math.pow((Math.pow(total, bendFactor) - 1), 2) + 1;	// Result 0 -1
	gameData.clout = calculation*100;
}

// -------------------------------------------------------------
// Feed functions
// -------------------------------------------------------------
function updateTextMessage(name, message, type) {
	var newItem = document.createElement("LI");
	
	switch (type) {
		case "key": newItem.id = "keyMessage"; break;
		case "accept": newItem.id = "acceptanceMessage"; break;
		case "reject": newItem.id = "rejectionMessage"; break;
		default: newItem.id = "defaultMessage"; break;
	}
	
	newItem.innerHTML = "<b>" + name + "</b></br>" + message + "</br><small>" + getTimestamp() + " &#8226; SMS";
	var list = document.getElementById("textMessages");
	list.insertBefore(newItem, list.childNodes[0]);
}

function updateFriendSpaceFeed(name, locationFrom, message) {
	var newItem = document.createElement("LI");
	newItem.innerHTML = "<b>" + name + "</b></br><small>" + getTimestamp() + " &#8226; " + locationFrom + "</small></br>" + message + "</br><small>Like &#8226; Comment &#8226; Share";
	var list = document.getElementById("friendSpaceFeed");
	list.insertBefore(newItem, list.childNodes[0]);
}
// =============================================================


// =============================================================
// Main Game Loop
// -------------------------------------------------------------
var mainGameLoop = window.setInterval(function() {
	updateStatDisplay();
	
	// Random FriendSpace update every 45 seconds
	if (Math.random() <= 1/45) updateFriendSpaceFeed(chance.name(), chance.city() + ", " + chance.country(), genericFriendSpacePosts[Math.floor(Math.random()*genericFriendSpacePosts.length)]);
	
	// Random text every 90 seconds
	if (Math.random() <= 1/90) updateTextMessage(chance.name(), genericTextMessages[Math.floor(Math.random()*genericTextMessages.length)], "default");
	
	// Random wrong number messages every 180 seconds
	if (Math.random() <= 1/180) updateTextMessage(chance.phone(), genericWrongNumberMessages[Math.floor(Math.random()*genericWrongNumberMessages.length)], "default");
}, 1000)
// =============================================================


// =============================================================
// Data Management
// -------------------------------------------------------------
// Load game on page load
var gameSave = JSON.parse(localStorage.getItem("partyUniverseSave"));
if (gameSave !== null) {
	gameData = gameSave
	updateTextMessage(chance.phone(), keyList[1], "key");
} else {
	// New game
	updateTextMessage(chance.phone(), keyList[0], "key");
}
updateStatDisplay();

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