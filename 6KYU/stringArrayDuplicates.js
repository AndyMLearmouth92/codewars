/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

Starter code:

function dup(s) {
//..
};
*/

// Solution 1:

function dup(s) {
    return s.map(e => e.replace(/(.)\1+/g,'$1'))
  };

// Solution 2:

const dup = (s) => s.join(' ').split('').filter((e,i,arr) => arr[i] !== arr[i+1]).join('').split(' ')

// Solution 3:

function dup(array) {
    let result = []
    let input = array.join(' ').split('')
    for(let i = 0; i < input.length; i++){
      if(input[i] !== input[i+1]){
        result.push(input[i])
      }
    }
    return result.join('').split(' ')
  };
