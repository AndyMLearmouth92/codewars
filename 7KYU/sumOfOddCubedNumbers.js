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
