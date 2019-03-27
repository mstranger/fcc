const largestPalindromeProduct = require('../problem-4-largest-palindrome-product')
const { test } = QUnit

QUnit.module('Problem 4: largest palindrome product', {})

test('validate answers', function (assert) {
  assert.equal(largestPalindromeProduct(0), 'not implemented for 0', 'check 0')
  assert.equal(largestPalindromeProduct(1), 9, 'check 1')
  assert.equal(largestPalindromeProduct(2), 9009, 'check for 2')
  assert.equal(largestPalindromeProduct(3), 906609, 'check for 3')
  assert.equal(largestPalindromeProduct(4), 99000099, 'check for 4')
})
