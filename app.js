var Team = require('./lib/Team');

function buildEntryArray(teamArray) {
	var entryArray = [];

	for(var i = 0, len = teamArray.length; i < len; i++) {
		var currentTeam = teamArray[i];
		var currentTeamEntries = getNumberOfEntries(currentTeam);

		for(var j = 0; j < currentTeamEntries; j++) {
			entryArray.push(currentTeam.ownerName);
		}
	}

	return entryArray;
}

function getNumberOfEntries(team) {
	if(!team || team.rank > 12 || team.rank < 1) return 0;

	if(team.rank === 1) {
		return 1;
	} else if(team.rank  === 2) {
		return 2;
	} else if(team.rank === 3) {
		return 3;
	} else if(team.rank < 6) {
		return 4;
	} else if(team.rank < 9) {
		return 5;
	} else if(team.rank < 12) {
		return 6;
	} else if(team.rank === 12) {
		return 7;
	}
}

var teams = [
	new Team('Brad', 1),
	new Team('Chris', 2),
	new Team('Austin', 3),
	new Team('DJ', 4),
	new Team('Bullitt', 5),
	new Team('Sean', 6),
	new Team('Trey', 7),
	new Team('Parham', 8),
	new Team('Justin', 9),
	new Team('Mr. Hill', 10),
	new Team('Greg', 11),
	new Team('Mike', 12)
];

var entryArray = buildEntryArray(teams);
entryArray.pickRandom = function() {
	var max = this.length - 1;
	var min = 0;
	var randomIndex = ~~(Math.random() * (max - min + 1)) + min;
	var pickedTeamOwner = this[randomIndex];
	this.removeAllInstances(pickedTeamOwner)
	return pickedTeamOwner;
}

entryArray.removeAllInstances = function(teamOwner) {
	while(this.indexOf(teamOwner) > -1) {
		this.splice(this.indexOf(teamOwner), 1);
	}
}


console.log('Draft Rankings for 2014');
for(var i = 0, len = teams.length; i < len; i++) {
	var pickedTeamOwner = entryArray.pickRandom();
	console.log((i + 1) + '. ' + pickedTeamOwner);
}