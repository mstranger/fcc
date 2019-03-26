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
