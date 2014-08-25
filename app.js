var Team = require('./lib/Team'),
    Entries = require('./lib/Entries');

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

var entries = new Entries(teams);

console.log('Draft Rankings for 2014');
for(var i = 0, len = teams.length; i < len; i++) {
	var pickedTeamOwner = entries.select();
	console.log((i + 1) + '. ' + pickedTeamOwner);
}