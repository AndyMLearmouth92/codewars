/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

Starter code:

function shortcut (string) {
  return '';
}

*/

// Solution 1:

function shortcut (string) {
return string.replace(/[aeiou]/gi, '')
}

// Solution 2:

function shortcut (string) {
    let vowels = 'aeiou'
    let constanants = ''
    for(let i = 0; i < string.length; i++){
      if(!(vowels.includes(string[i]))){
        constanants += string[i]
      }
    }
    return constanants
  }
