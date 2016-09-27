var choose = require('../../lib/choose')
var assert = require('assert');

describe('choose', function() {
    describe('happyPath', function() {
        it('should add one entry', function() {
            var chooseArr = new choose()
            chooseArr.add('test')

            assert.equal(1, chooseArr.size())
        });

        it('should add variable entries', function() {
            var chooseArr = new choose()
            chooseArr.add('test', 30)
            chooseArr.add('test2')
            chooseArr.add('test2')

            assert.equal(32, chooseArr.size())
        });

        it('should select an entry', function() {
            var chooseArr = new choose()
            chooseArr.add('test')

            assert.equal('test', chooseArr.choose())
        });

        it('should handle more than one entry', function() {
            var chooseArr = new choose();
            chooseArr.add('test')
            chooseArr.add('test2')

            var results = [chooseArr.choose(), chooseArr.choose()]

            assert.equal(true, results.indexOf('test') > -1)
            assert.equal(true, results.indexOf('test2') > -1)
        })

        it('should return undefined when empty', function() {
            var chooseArr = new choose();
            chooseArr.add('test')
            chooseArr.add('test2')

            chooseArr.choose()
            chooseArr.choose()
            var shouldBeUndefined = chooseArr.choose()

            assert.equal(true, shouldBeUndefined == undefined)
        })
    });
});
