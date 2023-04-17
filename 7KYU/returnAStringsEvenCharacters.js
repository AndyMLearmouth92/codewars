/* Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

Starter code:

function evenChars(string) {
//keep coding!
}

*/

// Solution:

function evenChars(string) {
  let inputArr = string.split("");
  if (inputArr.length < 2 || inputArr.length > 100) {
    return "invalid string";
  } else {
    return inputArr.filter((e, i) => i % 2 !== 0);
  }
}

// Solution 2:

function validParentheses(parenStr) {
  let counter = 0;

  for (let char of parenStr) {
    if (char === "(") counter++;
    if (char === ")") counter--;

    if (counter < 0) return false;
  }
  return counter === 0;
}
