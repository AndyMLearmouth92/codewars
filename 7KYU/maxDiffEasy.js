/* You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

Starter code:

function maxDiff(list) {
    return 0;
  };
*/

// Solution 1:

function maxDiff(list) {
    return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
   };

// Solution 2:

function maxDiff(list) {
    if(list.length <= 1){
      return 0
    }else{
      let sorted = list.sort((a,b) => a-b)
      return sorted.slice(-1) - sorted[0]
    }
  };

