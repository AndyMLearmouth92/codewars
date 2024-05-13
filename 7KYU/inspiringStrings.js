/* Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples

"red white blue"  =>  "white"
"red blue gold"   =>  "gold"

Starter code:

function longestWord(stringOfWords) {
  // Give me back the longest word!
}
*/

// Solution 1:

const longestWord = (s) =>
  s.split(" ").reduceRight((a, b) => (b.length > a.length ? b : a));

//   Solution 2:

const longestWord = (stringOfWords) => {
  return stringOfWords
    .split(" ")
    .sort((b, a) => b.length - a.length)
    .pop();
};

// Solution 3:

const longestWord = (stringOfWords) => {
  const words = stringOfWords.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};
