/* An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Starter code:

function findDeletedNumber(arr, mixArr) {
  // your code
}
*/

// Solution 1:

function findDeletedNumber(arr, mixArr) {
    let sortedReducedMixArr = mixArr.reduce((sum, current) => sum + current, 0)
    let reducedArr = arr.reduce((sum, current) => sum + current, 0)
    return reducedArr-sortedReducedMixArr
  }

//   Solution 2:

function findDeletedNumber(arr, mixArr) {
    let sortedArr = mixArr.sort((a,b) => a-b)
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== sortedArr[i]){
        return arr[i]
      } 
      }
    return 0
  }
