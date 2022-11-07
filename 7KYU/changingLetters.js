/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

Starter code:

function swap (string) {
  return '';
}

*/

// Solution 1:

function swap (string) {
  let vowels = ['a','e', 'i', 'o', 'u']
  return string.split("").map(x => vowels.includes(x) ? x.toUpperCase() : x).join('')
}

// Solution 2:

let vowels = ['a','e', 'i', 'o', 'u']
  const swap = (string) => string.split("").map(x => vowels.includes(x) ? x.toUpperCase() : x).join('')

//  Solution 3:
  
  function swap (string) {
 return string.replace(/([aeiou])/g, x => x.toUpperCase());
}

// Solution 4:

function swap (string) {
  let result = []
  //Loop through the given string to identify vowels
  for(let i = 0; i <= string.length; i++){
  //if a vowel push onto a new array and make uppercase
    if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
      result.push(string[i].toUpperCase())
    }else{
      result.push(string[i])
    }
  }
  return result.join('')
}
