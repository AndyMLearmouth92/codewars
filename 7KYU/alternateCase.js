/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

Starter code:

function alternateCase(s) {
    return '';
  }
*/

// Solution 1:

function alternateCase(s) {
    return s.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  }

// Solution 2:

function alternateCase(s) {
    let result = []
    let input = s.split('')
    for(let i = 0; i < input.length; i++){
      if(input[i] == input[i].toUpperCase()){
        result.push(input[i].toLowerCase())
      }else{
        result.push(input[i].toUpperCase())
      }
    }
    return result.join('')
  }