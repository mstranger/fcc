const module5 = require('../problem-5-smallest-multiple')
const smallestMult = module5.smallestMult
const gcd = module5.gcd
const lcm = module5.lcm

const { test } = QUnit

QUnit.module('Problem 5: smallest multiple', {})

test('validate answers', function (assert) {
  assert.equal(smallestMult(5), 60, 'check 5')
  assert.equal(smallestMult(7), 420, 'check 7')
  assert.equal(smallestMult(10), 2520, 'check 10')
  assert.equal(smallestMult(13), 360360, 'check 13')
})

test('gcd', function (assert) {
  assert.equal(gcd(24, 54), 6, 'check 24, 54')
  assert.equal(gcd(12, 18), 6, 'check 12, 18')
  assert.equal(gcd(1071, 462), 21, 'check 1071, 462')
})

test('lcm', function (assert) {
  assert.equal(lcm(16, 20), 80, 'check 16, 20')
  assert.equal(lcm(12, 45), 180, 'check 12, 45')
  assert.equal(lcm(3, 12), 12, 'check 3, 12')
})

