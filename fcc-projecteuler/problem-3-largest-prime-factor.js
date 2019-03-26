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
