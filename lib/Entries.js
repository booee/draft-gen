function Entries(_teamArray) {
	var teamArray = _teamArray;
	entriesArray = [];

	for(var i = 0, len = teamArray.length; i < len; i++) {
		var currentTeam = teamArray[i];
		var numberOfEntries = getRank(currentTeam);

		for(var j = 0; j < numberOfEntries; j++) {
			// console.log(currentTeam.ownerName);
			entriesArray.push(currentTeam.ownerName);
		}
	}

	function getRank(team) {
		var rank = 1;
		if(team.rank > 1) {
			rank++;
		} 

		if(team.rank > (teamArray.length / 2)) {
			rank++;
		}

		if(team.rank === teamArray.length) {
			rank++;
		}

		return rank;
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