/* Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

Starter code:

function evenLast(numbers) {
  // Good luck
}
*/

// Solution:

function evenLast(numbers) {
    if(numbers == []){
      return 0
    }else{
      return numbers.filter((e,i) => i % 2 === 0).reduce((sum, current) => sum + current, 0) * numbers.slice(-1)
    }
  }

