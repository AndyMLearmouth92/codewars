/* Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

Starter code:

function consonantCount(str) {
  // ...
}

*/

// Solution :

function consonantCount(str) {
    let con = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    return con == null ? 0 : con.length
  }

