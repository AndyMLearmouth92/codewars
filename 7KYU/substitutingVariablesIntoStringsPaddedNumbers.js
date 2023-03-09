/* Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

Starter code:

function solution(value){
    //...
  }
  */

//   Solution 1:

function solution(value){
    return `Value is ${value.toString().padStart(5,'0')}`
  }

//   Solution 2:

const solution = (value) => 'Value is ' + ('000000' + value).slice(-5)