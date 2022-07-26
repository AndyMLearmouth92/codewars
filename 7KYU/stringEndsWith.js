/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Starter code:

function solution(str, ending){
  // TODO: complete
}
*/

// Solution 1:

function solution(str, ending){
  if(str.endsWith(ending)){
    return true
  }else{
    return false
  }
}

// Solution 2:

const solution = (str, ending) => str.endsWith(ending)

// Solution 3:

function solution(str, ending){
 let string = str.split('')
 // Length is used for the slice as ending can be different lengths
 let length = string.length - ending.length
 // Check if the slice is the same as the ending
 if(string.slice(length).join('') === ending){
   return true
 }else{
   return false
 }
}
