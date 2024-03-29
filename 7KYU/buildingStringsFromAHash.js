/* Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

Starter code:

function solution(pairs){
    // TODO: complete
  }
*/

// Solution 1:

function solution(pairs){
    return Object.keys(pairs).map(function(value){return value + " = " + pairs[value];}).join(',')
  }

// Solution 2:

function solution(pairs){
    let array = []
    for(let pair in pairs){
      array.push((pair+ ' = ' +pairs[pair]))
    }
    return array.join(',')
  }