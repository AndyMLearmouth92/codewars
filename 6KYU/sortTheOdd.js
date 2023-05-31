/* Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

Starter code:

function sortArray(array) {
  // Return a sorted array.
}
*/

// Solution 1:

function sortArray(array) {
    let odd = array.filter(e => e % 2 !== 0).sort((a,b) => a-b)
    return array.map(e => e % 2 !== 0 ? odd.shift() : e)
  }

// Solution 2:

function sortArray(array) {
    let indices = [];
    array
        .filter((e, i) => e % 2 && indices.push(i))
        .sort((a, b) => a - b)
        .forEach((e, i) => array[indices[i]] = e);
      return array;
    }