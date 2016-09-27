module.exports = function() {
    var vals = []

    this.size = function() {
        return vals.length
    }

    this.add = function(value, times) {
        if(times == undefined) {
            vals.push(value)
            return
        }

        for(var i = 0; i < times; i++) {
            vals.push(value)
        }
    }

    this.choose = function() {
        if(!vals) return

        var max = vals.length - 1;
        var randomIndex = ~~(Math.random() * (max + 1));
        var selected = vals[randomIndex];

        while(vals.indexOf(selected) > -1) {
            vals.splice(vals.indexOf(selected), 1);
        }

        return selected;
    }
}
