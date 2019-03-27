/**
* Find largest palindrome made from the product of two n-digit numbers
* @param {number} n
* @returns {number}
*/
function largestPalindromeProduct (n) {
  if (n > 6 || n < 1) return `not implemented for ${n}`

  const dist = {
    1: { min: 1, max: 9, factor: 1 },
    2: { min: 10, max: 99, factor: 10 },
    3: { min: 100, max: 999, factor: 100 },
    4: { min: 1000, max: 9999, factor: 100 },
    5: { min: 10000, max: 99999, factor: 1000 },
    6: { min: 100000, max: 999999, factor: 1000 }
  }

  let largest = 0
  // let largestPair

  let curr = dist[n].max - dist[n].factor

  while (true) {
    for (let i = curr; i < dist[n].max; i++) {
      for (let j = dist[n].max; j >= i; j--) {
        if (isPalindrom(i * j) && largest < i * j) {
          largest = i * j
          // largestPair = [i, j]
        }
      }
    }

    if (largest > 0 || curr < dist[n].min) {
      break
    } else {
      curr -= dist[n].factor
    }
  }

  // console.log(largestPair)
  return largest
}

/**
* Check if given number is palindrom
* @param {number} n
* @returns {boolean}
*/
function isPalindrom (n) {
  let reversed = n.toString().split('').reverse().join('')
  return n.toString() === reversed
}

module.exports = largestPalindromeProduct
