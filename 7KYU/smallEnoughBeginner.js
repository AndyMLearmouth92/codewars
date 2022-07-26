/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */


// Solution 1:

function smallEnough(a, limit){
 let sorted = a.sort((a, b) => a - b)
 if(sorted[sorted.length-1] <= limit){
   return true
}else{
  return false
}
}


// Refactored:

function smallEnough(a, limit){
return Math.max(...a) <= limit
}
