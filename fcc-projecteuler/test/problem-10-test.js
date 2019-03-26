/* globals QUnit */
const primeSummation = require('../problem-10-summation-of-primes')
const benchmark = require('../benchmark')
const { test } = QUnit
const timeout = 300

QUnit.module('Problem 10: summation of primes', {
  before: function () {
    this.data = [17, 2001, 140759, 2000000]
    this.results = [41, 277050, 873608362, 142913828922]
  }
})

test('Validate right answers', function (assert) {
  this.data.forEach((e, i) => {
    assert.equal(primeSummation(e), this.results[i], `fail for n = ${e}`)
  })
})

test('Validate runtime', function (assert) {
  this.data.forEach(e => {
    let time = benchmark(primeSummation, e)
    assert.ok(time < timeout, `Timeout for ${e}; current - ${time}ms`)
  })
})
