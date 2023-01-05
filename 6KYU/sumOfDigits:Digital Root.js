/* Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Starter code:

function digitalRoot(n) {
  
}
*/

// Solution:

function digitalRoot(n) {
    let splitInput = n.toString().split('').map((x)=> Number(x))
      let i = 0
      while (splitInput.length > 1) {
        splitInput = splitInput.reduce((sum, current)=> sum + current, 0).toString().split('').map((x)=> Number(x))
      i++;
    }
      return Number(splitInput)
    }