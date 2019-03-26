const largestPrimeFactor = require('../problem-3-largest-prime-factor')
const { test } = QUnit

QUnit.module('Problem 3: largest prime factor', {})

test('Validate answers', function (assert) {
  let data = [2, 3, 5, 7, 13195, 600851475143]
  let answers = [2, 3, 5, 7, 29, 6857]
  data.forEach((e, i) => {
    assert.equal(largestPrimeFactor(e), answers[i], `check ${e}`)
  })
})
