/* The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

Starter code:

function missingNo(nums) {
  
}
*/

// Solution 1:

function missingNo(nums) {
  return 5050 - nums.reduce((sum, current) => sum + current, 0);
}

// Solution 2:

function missingNo(nums) {
  let sortedInput = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
}
