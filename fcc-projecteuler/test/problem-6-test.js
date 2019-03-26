const sumSquareDifference = require('../problem-6-sum-square-difference.js')
const { test } = QUnit

QUnit.module('Problem 6: sum square difference', {})

test('Validate answers', function (assert) {
  assert.equal(sumSquareDifference(10), 2640, 'check for 10')
  assert.equal(sumSquareDifference(20), 41230, 'check for 20')
  assert.equal(sumSquareDifference(100), 25164150, 'check for 100')
})
