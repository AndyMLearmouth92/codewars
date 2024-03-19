/* Introduction and Warm-up (Highly recommended)

Playing With Lists/Arrays Series

Task

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes

Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples

minSum({5,4,2,3}) ==> return (22) 
Explanation:

The minimum sum obtained from summing each two integers product ,   5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:

The minimum sum obtained from summing each two integers product ,   26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:

The minimum sum obtained from summing each two integers product ,   9*0 + 8*2 +7*4 +6*5 = 74

Starter code:

function minSum(arr) {
  // your code here
}
*/

// Solution 1:

const minSum = (arr) => {
  let count = 0;
  let sortedInput = arr.sort((a, b) => a - b);
  for (let i = 0; i < Math.ceil(sortedInput.length / 2); i++) {
    count += sortedInput[i] * sortedInput.slice(-i - 1)[0];
  }
  return count;
};
