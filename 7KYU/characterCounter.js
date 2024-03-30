/* You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples

"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.

Starter code:

function validateWord(s)
{
  //Code goes here!
}

*/

// Solution 1:

const validateWord = (s) => {
  const c = s.toLowerCase();
  return c.length % new Set(c).size == 0;
};

// Solution 2:

const validateWord = (s) => {
  let charMap = {};
  const input = s.toLowerCase().split("");
  for (let char of input) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  const values = Object.values(charMap);
  return values.every((val) => val === values[0]);
};
