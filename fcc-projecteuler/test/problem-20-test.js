const sumFactorialDigits = require('../problem-20-factorial-digit-sum')
const { test } = QUnit

QUnit.module('Problem 20: factorial digit sum', {})

test('validate answers', function (t) {
  t.equal(sumFactorialDigits(10), 27, 'check 10')
  t.equal(sumFactorialDigits(25), 72, 'check 25')
  t.equal(sumFactorialDigits(50), 216, 'check 50')
  t.equal(sumFactorialDigits(75), 432, 'check 75')
  t.equal(sumFactorialDigits(100), 648, 'check 100')
})
