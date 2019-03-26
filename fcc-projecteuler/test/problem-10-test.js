const primeSummation = require('../problem-10-summation-of-primes')
const benchmark = require('../benchmark')
const { test } = QUnit
const timeout = 300

QUnit.module('Problem 10: summation of primes', {})

test('Validate answers', function (assert) {
  let data = [17, 2001, 140759, 2000000]
  let results = [41, 277050, 873608362, 142913828922]

  data.forEach((e, i) => {
    assert.equal(primeSummation(e), results[i], `check ${e}`)
  })
})

test('Validate runtime', function (assert) {
  assert.ok(benchmark(primeSummation, 140759) < timeout, 'check 140_759')
  assert.ok(benchmark(primeSummation, 2000000) < timeout, 'check 2_000_000')
})
