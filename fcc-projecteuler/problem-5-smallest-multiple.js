/**
 * Find the smallest common multiple of the numbers from 1 to n
 * lcm(a, b, c) = lcm(lcm(a, b), c)
 * @param {number} n
 * @returns {number}
 */
function smallestMult(n) {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result = lcm(i, result)
  }

  return result
}

/**
 * Find the greatest common divisor of two integers
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function gcd(x, y) {
  while (x % y !== 0) {
    [x, y] = [y, x % y]
  }

  return y
}

/**
 * Find the least common multiple of two integers
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function lcm(x, y) {
  return x * y / gcd(x, y)
}

module.exports = {
  smallestMult: smallestMult,
  gcd: gcd,
  lcm: lcm
}


