(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function (fn, param) {
  let start = new Date()
  fn(param)
  return new Date() - start
}

},{}],2:[function(require,module,exports){
/**
 * Find sum all of the primes below given number.
 * @param {nunber} n
 * @returns {number}
 */
function primeSummation (n) {
  return eratosSieve(n)[1]
}

/**
 * Find all prime numbers bellow given number using sieve of Eratosphenes
 * @param {number} n - Given positive number
 * @returns {[number[], number]} - Primes array and its sum
 */
function eratosSieve (n) {
  let arr = new Array(n)
  let primes = []
  let sum = 0

  for (let i = 1; i < n; i++) {
    if (i < 2) {
      arr[i - 1] = false
      continue
    }

    let step = 2
    while (i * step <= n) {
      arr[i * step - 1] = false
      step++
    }

    if (arr[i - 1] === undefined) {
      primes.push(i)
      sum += i
    }
  }

  return [primes, sum]
}

module.exports = primeSummation

/*
let benchmark = require('./benchmark')
// ~220ms
console.log('Time for 2000000 in ms: ', benchmark(primeSummation, 2000000))
// NOTE: It takes < 10ms but cannot pass through timeout limit set by fcc
console.log('Time for 140759 in ms:', benchmark(primeSummation, 140759))
*/

},{}],3:[function(require,module,exports){
/**
* Find largest prime factor.
* @param {number} number
* @returns {number}
*/
function largestPrimeFactor (number) {
  let factors = Prime.allPrimes(number)
  return Math.max(...factors)
}

/** Class representing prime numbers */
class Prime {
  /**
  * Find all prime factors of the number.
  * @param {number} number - A positive integer
  * @returns {Array.<number>}
  */
  static allPrimes (number) {
    let primes = []
    let i = 2

    while (number >= 2) {
      if (number % i === 0) {
        primes.push(i)
        number = number / i
        i = 2
      } else {
        i++
      }
    }

    return primes
  }
}

module.exports = largestPrimeFactor

},{}],4:[function(require,module,exports){
/**
* Find largest palindrome made from the product of two n-digit numbers
* @param {number} n
* @returns {number}
*/
function largestPalindromeProduct (n) {
  if (n > 6 || n < 1) return `not implemented for ${n}`

  const dist = {
    1: { min: 1, max: 9, factor: 1 },
    2: { min: 10, max: 99, factor: 10 },
    3: { min: 100, max: 999, factor: 100 },
    4: { min: 1000, max: 9999, factor: 100 },
    5: { min: 10000, max: 99999, factor: 1000 },
    6: { min: 100000, max: 999999, factor: 1000 }
  }

  let largest = 0
  // let largestPair

  let curr = dist[n].max - dist[n].factor

  while (true) {
    for (let i = curr; i < dist[n].max; i++) {
      for (let j = dist[n].max; j >= i; j--) {
        if (isPalindrom(i * j) && largest < i * j) {
          largest = i * j
          // largestPair = [i, j]
        }
      }
    }

    if (largest > 0 || curr < dist[n].min) {
      break
    } else {
      curr -= dist[n].factor
    }
  }

  // console.log(largestPair)
  return largest
}

/**
* Check if given number is palindrom
* @param {number} n
* @returns {boolean}
*/
function isPalindrom (n) {
  let reversed = n.toString().split('').reverse().join('')
  return n.toString() === reversed
}

module.exports = largestPalindromeProduct

},{}],5:[function(require,module,exports){
/**
* Find the diff between sum of squares and square of sum.
* @param {number} n - Positive integer
* @returns {number}
*/
function sumSquareDifference (n) {
  return squareSum(n) - sumSquare(n)
}

/**
* Find the sum of squares first n numbers.
* @param {number} n - Positive integer
* @returns {number}
*/
function sumSquare (n) {
  let result = 0

  for (let i = 1; i <= n; i++) {
    result += i * i
  }

  return result
}

/**
* Find the square of sum first n numbers.
* @param {number} n - Positive integer
* @returns {number}
*/
function squareSum (n) {
  let result = 0

  for (let i = 1; i <= n; i++) {
    result += i
  }

  return result * result
}

module.exports = sumSquareDifference

},{}],6:[function(require,module,exports){
/* eslint-disable no-unused-vars */

/**
* Check if `n` is prime number
* @param {number} n - Candidate for check
* @param {number[]} primes - All primes before
* @returns {boolean}
*/
function isPrime (n, primes) {
  let limit = Math.ceil(Math.sqrt(n))

  if (n < 2) return false

  for (let i = 0; primes[i] <= limit; i++) {
    if (n % primes[i] === 0) {
      return false
    }
  }

  return true
}

/**
* Find n-th prime numbmer
* @param {number} n
* @returns {number}
*/
function nthPrime (n) {
  let primes = [2]
  let candidate = 3

  while (primes.length < n) {
    if (isPrime(candidate, primes)) {
      primes.push(candidate)
    }

    candidate += 2
  }

  return primes[primes.length - 1]
}

module.exports = nthPrime

},{}],7:[function(require,module,exports){
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

},{"../benchmark":1,"../problem-10-summation-of-primes":2}],8:[function(require,module,exports){
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

},{"../problem-3-largest-prime-factor":3}],9:[function(require,module,exports){
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

},{"../problem-4-largest-palindrome-product":4}],10:[function(require,module,exports){
const sumSquareDifference = require('../problem-6-sum-square-difference.js')
const { test } = QUnit

QUnit.module('Problem 6: sum square difference', {})

test('Validate answers', function (assert) {
  assert.equal(sumSquareDifference(10), 2640, 'check for 10')
  assert.equal(sumSquareDifference(20), 41230, 'check for 20')
  assert.equal(sumSquareDifference(100), 25164150, 'check for 100')
})

},{"../problem-6-sum-square-difference.js":5}],11:[function(require,module,exports){
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

},{"../problem-7-10001st-prime":6}]},{},[7,8,9,10,11]);
