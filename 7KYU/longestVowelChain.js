/* The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

Starter code:

function solve(s){
    return 0;
   }

*/

// Solution:

function solve(s) {
  let array = ["a", "e", "i", "o", "u"];
  let currentCount = 0;
  let highestCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (array.includes(s[i])) {
      currentCount++;
      if (currentCount > highestCount) {
        highestCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  return highestCount;
}
