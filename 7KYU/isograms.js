/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

Starter code:

function isIsogram(str){
  //...
}

*/

// Solution 1:

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

// Solution 2:

function isIsogram(str){
//Convert to lower case
  let string = str.toLowerCase()
//Two loops to iterate through the string
  for(let i = 0; i < string.length; i++){
    for(let j = i + 1; j < string.length; j++){
//Compare the characters.
      if(string[i]===string[j]){
        return false
      }
    }
  }
  return true
}
