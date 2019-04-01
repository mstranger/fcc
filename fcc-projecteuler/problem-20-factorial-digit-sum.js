/**
 * Find the sum of the digits `n!`
 * @param {number} n
 * @returns {number}
 */
function sumFactorialDigits (n) {
  let result = BigInt(1)

  for (let curr = n; curr > 0; curr--) {
    result *= BigInt(curr)
  }

  return result
    .toString()
    .split('')
    .reduce((acc, e) => acc + parseInt(e), 0)
}

module.exports = sumFactorialDigits
