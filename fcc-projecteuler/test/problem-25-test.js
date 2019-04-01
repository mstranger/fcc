const digitFibonacci = require('../problem-25-1000-digit-fibonacci-number')
const { test } = QUnit

QUnit.module('Problem 25: 1000-digit Fibonacci number', {})

test('validates answers', function (t) {
  t.equal(digitFibonacci(3), 12)
  t.equal(digitFibonacci(5), 21)
  t.equal(digitFibonacci(10), 45)
  t.equal(digitFibonacci(15), 69)
  t.equal(digitFibonacci(20), 93)
})
