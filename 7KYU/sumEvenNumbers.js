/* Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples

[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0

Starter code:

function sumEvenNumbers(input) {
  // [...]
}
*/

// Solution 1:

function sumEvenNumbers(input) {
  return input.filter(x => x % 2 == 0).reduce((sum, current) => sum + current, 0)
}

// Solution 2:

const sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((sum, current) => sum + current, 0)


// Solution 3:

function sumEvenNumbers(input) {
  let newArr = []
  input.forEach(x => x % 2 === 0 ? newArr.push(x) : false)
  return newArr.reduce((sum, current) => sum + current, 0)
}
