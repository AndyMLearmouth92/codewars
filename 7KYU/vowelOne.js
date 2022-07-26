/* vowelOne

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

Starter code:

function vowelOne(s){
  // ...
}
*/

// Solution 1:

function vowelOne(s){
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}

// Solution 2:

function vowelOne(s){
  return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}

// Solution 3:

function vowelOne(s){
let splitString = s.toLowerCase().split('')
let result = []
//Loop through the array
for(let i = 0; i < splitString.length; i++){
  //Check for vowels
  if(splitString[i] === 'a' || splitString[i] === 'e' || splitString[i] === 'i' || splitString[i] === 'o' || splitString[i] === 'u'){
   result.push(1)
  }else{
   result.push(0)
  }
 }
 return result.join('')
}
