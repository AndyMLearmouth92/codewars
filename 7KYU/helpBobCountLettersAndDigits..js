/* Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

Starter code:

function countLettersAndDigits(input) {
  return 0;
}
*/

// Solution 1:

function countLettersAndDigits(input) {
  let alphaNums = input.match(/[a-z\d]/gi);
  return alphaNums !== null ? alphaNums.length : 0;
}

// Solution 2:

function countLettersAndDigits(input) {
  let letters = 0;
  let numbers = 0;
  for (let i = 0; i < input.length; i++) {
    if (/[a-zA-Z]/g.test(input[i])) {
      letters++;
    } else if (/\d/.test(input[i])) {
      numbers++;
    }
  }
  return letters + numbers;
}
