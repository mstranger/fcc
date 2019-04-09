/**
* Calculates the count of all divisors of a number.
* @param {number} num
* @returns {number}
*/
function countDivisors (num) {
  if (num === 1) return 1

  let n = num
  let p = 1
  let i = 2

  while (i * i <= n) {
    let c = 1
    while (n % i === 0) {
      c++
      n /= i
    }

    p *= c
    i++
  }

  if (n == num || n > 1) p *= 2

  return p
}

// Find n-th triangular number.
function nthTriangular (n) { return n * (n + 1) / 2 }

/**
* Finds the first triangle number to have over n divisors.
* @param {number} n
* @returns {number}
*/
function divisibleTriangleNumber (n) {
  let i = 1
  while (countDivisors(nthTriangular(i)) <= n) { i++ }
  return nthTriangular(i)
}

module.exports = divisibleTriangleNumber
