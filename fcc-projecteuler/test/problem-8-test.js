const largestProductinaSeries = require('../problem-8-largest-product-in-a-series')
const { test } = QUnit

QUnit.module('Problem 8: largest product in a series', {})

test('validate answers', function (t) {
  t.equal(largestProductinaSeries(4)[1], 5832, 'check for 4')
  t.equal(largestProductinaSeries(13)[1], 23514624000, 'check for 13')
})
