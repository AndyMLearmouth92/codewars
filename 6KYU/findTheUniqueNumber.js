/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

Starter code:

function findUniq(arr) {
    // do magic
  }
*/

// Solution 1:

function findUniq(arr) {
    return Number(arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)))
  }

// Solution 2:

function findUniq(arr) {
    let sortedArr = arr.sort((a,b) => a-b)
    return sortedArr[0] === sortedArr[1] ? sortedArr.pop() : sortedArr[0]
  }

