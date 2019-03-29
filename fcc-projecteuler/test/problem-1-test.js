const multiplesOf3and5 = require('../problem-1-multiples-of-3-and-5')
const { test } = QUnit

QUnit.module('Problem 1: multiples of 3 and 5', {})

test('validate answers', function (t) {
  t.equal(multiplesOf3and5(49), 543, 'check 49')
  t.equal(multiplesOf3and5(1000), 233168, 'check 1000')
  t.equal(multiplesOf3and5(19564), 89301183, 'check 19564')
})
