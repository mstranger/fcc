const specialPythagoreanTriplet = require('../problem-9-special-pythagorean-triplet')
const { test } = QUnit

QUnit.module('Problem 9: special pythagorean triplet', {})

test('validate answers', function (t) {
  t.equal(specialPythagoreanTriplet(12), 60, 'check 12')
  t.equal(specialPythagoreanTriplet(24), 480, 'check 24')
  t.equal(specialPythagoreanTriplet(120), 49920, 'check 120')
  t.equal(specialPythagoreanTriplet(1000), 31875000, 'check 1000')
})
