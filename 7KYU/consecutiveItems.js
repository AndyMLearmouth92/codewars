/* You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

Starter code:

function consecutive(arr, a, b) {
    // Your code here...
  }
*/

// Solution 1:

const consecutive = (arr, a, b) =>
  Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;

// Solution 2:

function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === a && arr[i + 1] === b) ||
      (arr[i] === b && arr[i + 1] === a)
    ) {
      return true;
    }
  }
  return false;
}
