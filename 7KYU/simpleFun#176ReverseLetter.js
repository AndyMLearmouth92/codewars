/*Task

Given a string str, reverse it and omit all non-alphabetic characters.

Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output

[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

Starter code:

function reverseLetter(str) {
  //coding and coding..

}
*/

// Solution 1:

function reverseLetter(str) {
    return str.replace(/['`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/ ]/gi, "").split('').reverse().join('')
  }

//   Solution 2:

const reverseLetter = (str) => str.replace(/[^a-z]/gi,'').split('').reverse().join('')
