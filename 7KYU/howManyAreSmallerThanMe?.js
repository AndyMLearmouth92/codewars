/* Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

Starter code:

function smaller(nums) {
//code me
}
*/

// Solution 1:

const smaller = (nums) => nums.map((e, i) => nums.slice(i).filter((y) => e > y).length);

// Solution 2:

function smaller(nums) {
  let result = [];
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) counter++;
    }
    result.push(counter);
    counter = 0;
  }
  return result;
}
