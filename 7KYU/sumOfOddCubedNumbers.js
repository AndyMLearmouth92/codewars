/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

Starter code:

function cubeOdd(arr) {

    // insert code here >.<
    
    
    return 0;
    }
*/

// Solution 1:

function cubeOdd(arr) {
  arr = arr.filter((e) => e % 2 != 0);
  arr = arr.reduce((sum, current) => sum + Math.pow(current, 3), 0);
  return isNaN(arr) ? undefined : arr;
}

// Solution 2:

function cubeOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    } else if (arr[i] % 2 !== 0) {
      count += Math.pow(arr[i], 3);
    }
  }
  return count;
}
