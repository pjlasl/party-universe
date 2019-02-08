/* =============================================================
// gameInfo.js
// -------------------------------------------------------------
// Baseline game info that is used for adding items and other
// information about the game. All this data shouldn't be
// changed.
// ===========================================================*/

var gameInfo = {	
	// Supplies
	supplies: {
		100: {
			name: "Balloon",
			description: "Every party has to have balloons, right?",
			cost: 0.25,
			lit: 0,
			swag: -2
		},
		101: {
			name: "Snack",
			description: "Just your generic looking snack.",
			cost: 10,
			lit: -2,
			swag: 0
		},
		102: {
			name: "Beer Pong Table",
			description: "Try playing doubles!",
			cost: 50,
			lit: 5,
			swag: 2
		},
		103: {
			name: "Strobe Light",
			description: "I think I'm gonna be sick...",
			cost: 150,
			lit: 25,
			swag: 10
		},
		104: {
			name: "DJ Equipment",
			description: "Play freebird (dubstep remix)!",
			cost: 600,
			lit: 30,
			swag: 20
		},
		105: {
			name: "Television Set",
			description: "What channel's the game?",
			cost: 1500,
			lit: 10,
			swag: 10
		},
		106: {
			name: "Bounce House",
			description: "Pairs really well with some booze.",
			cost: 4000,
			lit: 50,
			swag: 0
		},
		107: {
			name: "Tiger",
			description: "Be careful, he bites.",
			cost: 20000,
			lit: 100,
			swag: 200
		}
	},
	
	alcohol: {
		200: {
			name: "Beer",
			description: "What IPA's do you have on tap?",
			cost: 4,
			lit: 2,
			swag: 1
		},
		201: {
			name: "Wine",
			description: "Mom doesn't get drunk, she just has fun.",
			cost: 12,
			lit: 1,
			swag: 5
		},
		202: {
			name: "Hard Alcohol",
			description: "Shots! Shots! Shots!",
			cost: 30,
			lit: 20,
			swag: 3
		},
		203: {
			name: "Keg",
			description: "I can handstand if you hold my legs. Just don't steal my shoes.",
			cost: 100,
			lit: 5,
			swag: 1
		},
		204: {
			name: "Moonshine",
			description: "This party is about to get messed up.",
			cost: 250,
			lit: 100,
			swag: 1
		},
		205: {
			name: "Gold Infused Liquor",
			description: "All class.",
			cost: 500,
			lit: 15,
			swag: 50
		},
		206: {
			name: "La Bonne Merde",
			description: "It's French.",
			cost: 2000,
			lit: 25,
			swag: 500
		},
		207: {
			name: "Liquid Meteorite",
			description: "Who in this world would drink this stuff?",
			cost: 50000,
			lit: 100,
			swag: 100
		}
	},
	
	promotions: {
		300: {
			name: "Send a Text",
			description: "I knew I shouldn't have gone with prepaid...",
			cost: 0.25,
			pull: 1
		},
		301: {
			name: "FriendSpace Ad",
			description: "Guaranteed to get you clicks.",
			cost: 100,
			duration: 7200, // 2 hours
			pull: 5
		},
		302: {
			name: "Sponsored Post",
			description: "Influencers love to promote parties.",
			cost: 500,
			duration: 3600, // 1 hour
			pull: 10
		},
		303: {
			name: "Hire a DJ",
			description: "You need someone spinning the best hits for a party.",
			cost: 2000,
			duration: 1800, // 30 minutes
			pull: 50
		},
		304: {
			name: "Hire a Band",
			description: "Hope you don't mind them selling merch at the front door.",
			cost: 8000,
			duration: 1200, // 20 minutes
			pull: 80
		},
		305: {
			name: "Celebrity Guest Appearance",
			description: "They don't stay long, but the pull is insane.",
			cost: 50000,
			duration: 300, // 5 minutes
			pull: 300
		},
		306: {
			name: "Satellite Signal",
			description: "I want to believe",
			cost: 10000000,
			duration: 60, // 1 minute
			pull: 1
		}
	},
	
	venues: {
		400: {
			name: "Your Apartment",
			description: "It's homey, that's for sure.",
			cost: 0,
			capacity: 20,
			rent: 0,
			swag: 0
		},
		401: {
			name: "House",
			description: "Two stories for more party room!",
			cost: 5000,
			capacity: 100,
			rent: 5,
			swag: 1
		},
		402: {
			name: "Mansion",
			description: "Now we're getting classy.",
			cost: 10000,
			capacity: 300,
			rent: 50,
			swag: 30
		},
		403: {
			name: "Yacht",
			description: "All about the S.S. Party!",
			cost: 25000,
			capacity: 800,
			rent: 300,
			swag: 50
		},
		404: {
			name: "Warehouse",
			description: "It's kinda sketch, but you can fit a lot of people in.",
			cost: 40000,
			capacity: 2000,
			rent: 200,
			swag: -30
		},
		405: {
			name: "Airplane Hangar",
			description: "Now we really have space to party!",
			cost: 100000,
			capacity: 10000,
			rent: 500,
			swag: 5
		},
		406: {
			name: "Country",
			description: "I didn't know you could buy a country, just like that.",
			cost: 1000000,
			capacity: 500000,
			rent: 4000,
			swag: 100
		},
		407: {
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
	PLANET: 407,
	
	FSUPPLY: 100,
	LSUPPLY: 107,
	FALCOHOL: 200,
	LALCOHOL: 207,
	FPROMO: 300,
	LPROMO: 306,
	FVENUE: 400,
	LVENUE: 407
};