var choose = require('./lib/choose')

module.exports = function() {
    var giveBonus = true
    var entryBase = 1
    var entryBonusNotFirst= 1
    var entryBonusBottomHalf = 1
    var entryBonusLast = 1

    this.run = function(teams) {
        if(!teams || !teams.length) {
            console.warn('Illegal teams input: ' + JSON.stringify(teams))
            return
        }

        var lottery = new choose();
        for(var i = 0; i < teams.length; i++) {
            var team = teams[i];
            var teamName = getTeamName(team)
            var numberOfEntries = getNumberOfEntries(team.rank, teams.length)

            if(teamName) {
                console.log('Adding '+teamName+' (x' + numberOfEntries + ')')
                lottery.add(teamName, numberOfEntries)
            }
        }

        var order = 1;
        while(lottery.size() > 0) {
            console.log(order + ". " + lottery.choose())
            order++
        }
    }

    function getTeamName(team) {
        if(typeof team == 'string') {
            return team
        } else if(typeof team.name == 'string' && team.name) {
            return team.name
        }
    }

    function getNumberOfEntries(rank, totalTeams) {
        var numberOfEntries = entryBase

        if(giveBonus && typeof rank == 'number') {
            if(rank > 1) {
                numberOfEntries += entryBonusNotFirst
            }

            if(rank > (totalTeams / 2)) {
                numberOfEntries += entryBonusBottomHalf
            }

            if(rank === totalTeams) {
                numberOfEntries += entryBonusLast
            }
        }

        return numberOfEntries
    }
}
