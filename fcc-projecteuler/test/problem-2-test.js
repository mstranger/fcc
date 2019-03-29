const fiboEvenSum = require('../problem-2-even-fibonacci-numbers')
const { test } = QUnit

QUnit.module('Problem 2: even Fibonacci numbers', {})

test('validate answers', function (t) {
  t.equal(fiboEvenSum(10), 188, 'check 10')
  t.equal(fiboEvenSum(23), 60696, 'check 23')
  t.equal(fiboEvenSum(43), 1485607536, 'check 43')
})
