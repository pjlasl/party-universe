// =============================================================
// gameInfo.js
// -------------------------------------------------------------
// Baseline game info that is used for adding items and other
// information about the game. All this data shouldn't be
// changed.
// =============================================================

var gameInfo = {	
	// Supplies
	supplies: {
		100: {
			id: "balloon",
			name: "Balloon",
			description: "Every party has to have balloons, right?",
			cost: 0.25,
			lit: 0,
			swag: -2
		},
		101: {
			id: "snack",
			name: "Snack",
			description: "Just your generic looking snack.",
			cost: 10,
			lit: -2,
			swag: 0
		},
		102: {
			id: "beerPongTable",
			name: "Beer Pong Table",
			description: "Try playing doubles!",
			cost: 50,
			lit: 5,
			swag: 2
		},
		103: {
			id: "strobeLight",
			name: "Strobe Light",
			description: "I think I'm gonna be sick...",
			cost: 150,
			lit: 25,
			swag: 10
		},
		104: {
			id: "djEquipment",
			name: "DJ Equipment",
			description: "Play freebird (dubstep remix)!",
			cost: 600,
			lit: 30,
			swag: 20
		},
		105: {
			id: "televisionSet",
			name: "Television Set",
			description: "What channel's the game?",
			cost: 1500,
			lit: 10,
			swag: 10
		},
		106: {
			id: "bounceHouse",
			name: "Bounce House",
			description: "Pairs really well with some booze.",
			cost: 4000,
			lit: 50,
			swag: 0
		},
		107: {
			id: "tiger",
			name: "Tiger",
			description: "Be careful, he bites.",
			cost: 20000,
			lit: 100,
			swag: 200
		}
	},
	
	alcohol: {
		200: {
			id: "beer",
			name: "Beer",
			description: "What IPA's do you have on tap?",
			cost: 4,
			lit: 2,
			swag: 1
		},
		201: {
			id: "wine",
			name: "Wine",
			description: "Mom doesn't get drunk, she just has fun.",
			cost: 12,
			lit: 1,
			swag: 5
		},
		202: {
			id: "hardAlcohol",
			name: "Hard Alcohol",
			description: "Shots! Shots! Shots!",
			cost: 30,
			lit: 20,
			swag: 3
		},
		203: {
			id: "keg",
			name: "Keg",
			description: "I can handstand if you hold my legs. Just don't steal my shoes.",
			cost: 100,
			lit: 5,
			swag: 1
		},
		204: {
			id: "moonshine",
			name: "Moonshine",
			description: "This party is about to get messed up.",
			cost: 250,
			lit: 100,
			swag: 1
		},
		205: {
			id: "goldInfusedLiquor",
			name: "Gold Infused Liquor",
			description: "All class.",
			cost: 500,
			lit: 15,
			swag: 50
		},
		206: {
			id: "laBonneMerde",
			name: "La Bonne Merde",
			description: "It's French.",
			cost: 2000,
			lit: 25,
			swag: 500
		},
		207: {
			id: "liquidMeteroite",
			name: "Liquid Meteorite",
			description: "Who in this world would drink this stuff?",
			cost: 50000,
			lit: 100,
			swag: 100
		}
	},
	
	promotions: {
		300: {
			id: "friendSpaceAd",
			name: "FriendSpace Ad",
			description: "Guaranteed to get you clicks.",
			cost: 100,
			duration: 7200, // 2 hours
			pull: 5
		},
		301: {
			id: "sponsoredPost",
			name: "Sponsored Post",
			description: "Influencers love to promote parties.",
			cost: 500,
			duration: 3600, // 1 hour
			pull: 10
		},
		302: {
			id: "hireADJ",
			name: "Hire a DJ",
			description: "You need someone spinning the best hits for a party.",
			cost: 2000,
			duration: 1800, // 30 minutes
			pull: 50
		},
		303: {
			id: "hireABand",
			name: "Hire a Band",
			description: "Hope you don't mind them selling merch at the front door.",
			cost: 8000,
			duration: 1200, // 20 minutes
			pull: 80
		},
		304: {
			id: "celebrityGuestAppearance",
			name: "Celebrity Guest Appearance",
			description: "They don't stay long, but the pull is insane.",
			cost: 50000,
			duration: 300, // 5 minutes
			pull: 300
		},
		305: {
			id: "satelliteSignal",
			name: "Satellite Signal",
			description: "I want to believe",
			cost: 10000000,
			duration: 60, // 1 minute
			pull: 1
		}
	},
	
	venues: {
		400: {
			id: "house",
			name: "House",
			description: "Two stories for more party room!",
			cost: 5000,
			capacity: 100,
			rent: 5,
			swag: 1
		},
		401: {
			id: "mansion",
			name: "Mansion",
			description: "Now we're getting classy.",
			cost: 10000,
			capacity: 300,
			rent: 50,
			swag: 30
		},
		402: {
			id: "yacht",
			name: "Yacht",
			description: "All about the S.S. Party!",
			cost: 25000,
			capacity: 800,
			rent: 300,
			swag: 50
		},
		403: {
			id: "warehouse",
			name: "Warehouse",
			description: "It's kinda sketch, but you can fit a lot of people in.",
			cost: 40000,
			capacity: 2000,
			rent: 200,
			swag: -30
		},
		404: {
			id: "airplaneHangar",
			name: "Airplane Hangar",
			description: "Now we really have space to party!",
			cost: 100000,
			capacity: 10000,
			rent: 500,
			swag: 5
		},
		405: {
			id: "country",
			name: "Country",
			description: "I didn't know you could buy a country, just like that.",
			cost: 1000000,
			capacity: 500000,
			rent: 4000,
			swag: 100
		},
		406: {
			id: "planet",
			name: "Planet",
			description: "Party universe!",
			cost: 500000000,
			capacity: 8000000000,
			rent: 0,
			swag: 50000
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
	
	SOCAD: 300,
	SPONPOST: 301,
	HIREDJ: 302,
	HIREBAND: 303,
	CELEB: 304,
	SATSIG: 305,
	
	HOUSE: 400,
	MANSION: 401,
	YACHT: 402,
	WAREHOUSE: 403,
	HANGAR: 404,
	COUNTRY: 405,
	PLANET: 406,
	
	FSUPPLY: 100,
	LSUPPLY: 107,
	FALCOHOL: 200,
	LALCOHOL: 207,
	FPROMO: 300,
	LPROMO: 305,
	FVENUE: 400,
	LVENUE: 406
};