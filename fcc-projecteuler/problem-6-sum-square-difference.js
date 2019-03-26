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
