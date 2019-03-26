const nthPrime = require('../problem-7-10001st-prime')
const { test } = QUnit

QUnit.module('Problem 7: 1001st prime number', {})

test('Validate answers', function (assert) {
  let data = [6, 10, 100, 1000, 10001]
  let answers = [13, 29, 541, 7919, 104743]

  data.forEach((e, i) => {
    assert.equal(nthPrime(e), answers[i], `check ${e}`)
  })
})
