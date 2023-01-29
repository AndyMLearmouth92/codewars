/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

Starter code:

function sumOfMinimums(arr) {
  // your code here
}
*/

// Solution 1:

function sumOfMinimums(arr) {
  return arr.reduce((sum, current) => sum + Math.min(...current), 0)
}

// Solution 2:
function sumOfMinimums(arr) {
    let minimum = []
    for(let i = 0; i < arr.length; i++){
      minimum.push(Math.min(...arr[i]))
      }
     return minimum.reduce((sum, current) => sum + current, 0)
   }