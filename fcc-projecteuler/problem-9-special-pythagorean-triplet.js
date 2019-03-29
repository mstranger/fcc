/**
 * Find the product `abc` such as a + b + c = n for Pythagorean triplet
 * @param {number} n
 * @returns {number} - Integer if exist, 0 - if not exist
 */
function specialPythagoreanTriplet (n) {
  for (let a = 1; a <= n - 2; a++) {
    for (let b = a + 1; b <= n - 1; b++) {
      let c = n - a - b
      if (isSpecialTriplet(a, b, c)) {
        return a * b * c
      }
    }
  }

  return 0
}

/**
 * Check if the given numbers is Pythagorean triplet
 */
function isSpecialTriplet (a, b, c) {
  return a * a + b * b === c * c
}

module.exports = specialPythagoreanTriplet
