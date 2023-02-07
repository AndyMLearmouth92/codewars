/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

Starter code:

function stringTransformer(str) {
  // Your code here
}
*/

// Solution 1:

function stringTransformer(str) {
    return str.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('').split(' ').reverse().join(' ')
}

// Solution 2:

function stringTransformer(str) {
    let reversedCase = str.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
    let reversedWord = reversedCase.split(' ').reverse().join(' ')
    return reversedWord
  }