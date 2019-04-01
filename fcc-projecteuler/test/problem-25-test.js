const digitFibonacci = require('../problem-25-1000-digit-fibonacci-number')
const { test } = QUnit

QUnit.module('Problem 25: 1000-digit Fibonacci number', {})

test('validates answers', function (t) {
  t.equal(digitFibonacci(3), 12, 'check 3')
  t.equal(digitFibonacci(5), 21, 'check 5')
  t.equal(digitFibonacci(10), 45, 'check 10')
  t.equal(digitFibonacci(15), 69, 'check 15')
  t.equal(digitFibonacci(20), 93, 'check 20')
})
