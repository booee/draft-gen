Array.prototype.chooseRandom = function() {
    if(this.length <= 0) return;
    var randomIndex = ~~(Math.random() * this.length);
    return this[randomIndex];
}

Array.prototype.removeAll = function(value) {
    var i;
    while((i = this.indexOf(value)) > -1) {
        this.splice(i, 1);
    }
}

function numberOfEntries(rank, leagueSize) {
    var entries = 1;

    if(rank > 1) { entries ++; } // not first
    if(rank > (leagueSize / 2)) { entries ++; } // in lower half of league
    if(rank > 8) {entries ++; } // playoffs
    if(rank === leagueSize) { entries ++; } // dead last

    return entries;
}

var teams = require('./teams');
var lottery = [];

for(var i = 0, len = teams.length; i < len; i++) {
	var currentTeam = teams[i];
	var entries = numberOfEntries(currentTeam.rank, teams.length);

	for(var j = 0; j < entries; j++) {
		lottery.push(currentTeam.name);
	}
}

var order = 1;
while(lottery.length > 0) {
    var selected = lottery.chooseRandom();
    lottery.removeAll(selected);
    console.log(order+'. '+selected);
    order++;
}
