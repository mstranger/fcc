const divisibleTriangleNumber = require('../problem-12-highly-divisible-triangular-number')
const { test } = QUnit

QUnit.module('Problem 12: highly divisible triangular nubmer', {})

test('validate answers', function (t) {
  t.equal(divisibleTriangleNumber(5), 28, 'check 5')
  t.equal(divisibleTriangleNumber(23), 630, 'check 23')
  t.equal(divisibleTriangleNumber(167), 1385280, 'check 167')
  t.equal(divisibleTriangleNumber(374), 17907120, 'check 374')
  t.equal(divisibleTriangleNumber(500), 76576500, 'check 500')
})
