/* In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!

Starter code:

function solve(arr) {
  return 0;
};
*/

// Solution 1:

function solve(arr) {
    let removeDupes = arr.map(e => [... new Set(e)])
    return removeDupes.reduce((sum, current) => sum * current.length, 1)
  };

// Solution 2:

function solve(arr) {
    let combinations = 1
    let removeDupes = arr.map(e => [... new Set(e)])
    for(let i = 0; i < removeDupes.length; i++){
      combinations *= removeDupes[i].length
    }
    return combinations
  };
