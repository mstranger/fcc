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
