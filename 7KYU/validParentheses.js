/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

Starter code:

function validParentheses(parenStr) {
  // Your code here
}
*/

// Solution:

function validParentheses(parenStr) {
  const stack = [];

  for (let i = 0; i < parenStr.length; i += 1) {
    const top = stack[stack.length - 1];

    if (parenStr[i] === "(") {
      stack.push(parenStr[i]);
    } else if (parenStr[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
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
