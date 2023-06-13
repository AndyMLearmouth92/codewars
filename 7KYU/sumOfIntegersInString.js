/* Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

Starter code:

function sumOfIntegersInString(s){
  return // what the function name says
}
*/

// Solution 1:

function sumOfIntegersInString(s){
    let nums = s.split(/([^0-9])/g).map(e => parseInt(e)).filter(Boolean)
    return nums.reduce((sum, current) => sum + current, 0)
  }

// Solution 2:

function sumOfIntegersInString(s) {
    return (s.match(/\d+/g) || []).reduce((s, c) => s + +c, 0);
  }