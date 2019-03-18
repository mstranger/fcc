/**
* Find the sum of the even-valued Fibonacci numbers.
* @param {number} n
* @returns {number}
*/
function fiboEvenSum (n) {
  let [a, b] = [1, 2]
  let sum = 0

  while (--n >= 0) {
    if (b % 2 === 0) {
      sum += b
    }

    [a, b] = [b, a + b]
  }

  return sum
}
