/* 
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples

explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"

Starter code:

function explode(s) {
  return "";
}

*/

// Solution 1:

function explode(s) {
    return s.split('').map(e => e.repeat(e)).join('')
}

// Solution 2:

function explode(s) {
    let splitInput = s.split('')
    let explodedDigits = ''
    for(let i = 0; i < splitInput.length; i++){
      explodedDigits += splitInput[i].repeat(splitInput[i])
    }
      return explodedDigits
  }

