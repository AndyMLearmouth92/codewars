/* Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

Starter code:

function isItLetter(character) {
  return true || false ;
}

*/

// Solution 1:

function isItLetter(character) {
  if (/[a-zA-Z]/.test(character)) {
    return true;
  }
  return false;
}

// Solution 2:

function isItLetter(character) {
  return character.toUpperCase() !== character.toLowerCase();
}
