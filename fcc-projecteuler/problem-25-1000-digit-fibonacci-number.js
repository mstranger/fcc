/**
* Find the index of the first term in Fibonacci seq to contain n-digits.
* @param {number}
* @returns {number}
*/
function digitFibonacci(n) {
  let [f1, f2] = [1, 1]
  let idx = 2

  while (f2.toString().length < n) {
    [f1, f2] = [f2, f1 + f2]
    idx++
  }

  return idx
}

module.exports = digitFibonacci
