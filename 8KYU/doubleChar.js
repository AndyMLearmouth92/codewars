/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Starter code:

function doubleChar(str) {
  // Your code here
}
*/

// Solution 1:

function doubleChar(str) {
  return str.split("").map((e) => e + e).join("");
}

// Solution 2:

function doubleChar(str) {
  let doubleChar = ''
  for(let i = 0; i < str.length; i++){
    doubleChar += str[i]+str[i]
  }
  return doubleChar
}
