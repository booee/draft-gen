var assert = require('assert');

require('./index');
var arr = [];

var chosen = arr.chooseRandom();
console.log('choose one of none: ' + chosen);
assert.equal(true, chosen === undefined);

arr.push('one');
chosen = arr.chooseRandom();
console.log('choose one of one: ' + chosen);
assert.equal(true, chosen === 'one');

arr.push('two');
arr.push('three');
arr.push('four');
chosen = arr.chooseRandom();
console.log('choose one of many: ' + chosen);
assert.equal(true, arr.indexOf(chosen) >= 0);

arr.push('one');
arr.push('one');
arr.push('one');
arr.removeAll('one')
console.log('Removed all occurrences of "one": ' + arr);
assert.equal(true, arr.indexOf('one') === -1);
