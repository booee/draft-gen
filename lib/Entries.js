function Entries(teamArray) {
	var teamArray = teamArray;
	entriesArray = [];

	for(var i = 0, len = teamArray.length; i < len; i++) {
		var currentTeam = teamArray[i];
		var entriesForTeam = getNumberOfEntries(currentTeam);

		for(var j = 0; j < entriesForTeam; j++) {
			// console.log(currentTeam.ownerName);
			entriesArray.push(currentTeam.ownerName);
		}
	}

	function getNumberOfEntries(team) {
		var numberOfEntries = 1;
		if(team.rank > 1) {
			numberOfEntries++;
		}

		if(team.rank > (teamArray.length / 2)) {
			numberOfEntries++;
		}

		if(team.rank === teamArray.length) {
			numberOfEntries++;
		}

		return numberOfEntries;
	}

	this.select = function() {
		var max = entriesArray.length - 1;
		var min = 0;
		var randomIndex = ~~(Math.random() * (max - min + 1)) + min;
		var selectedOwner = entriesArray[randomIndex];

		while(entriesArray.indexOf(selectedOwner) > -1) {
			entriesArray.splice(entriesArray.indexOf(selectedOwner), 1);
		}

		return selectedOwner;
	}
}

module.exports = Entries;