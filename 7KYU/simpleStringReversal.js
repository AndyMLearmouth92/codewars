/* In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

Starter code:

function solve(str){
   //..
}
*/

// Solution:

const solve = (s) => {
  const spaces = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      spaces.push(i);
    }
  }
  const reversedString = s.replace(/\s/g, "").split("").reverse().join("");
  let reversedWithSpaces = reversedString;
  for (let i = 0; i < spaces.length; i++) {
    const pos = spaces[i];
    reversedWithSpaces =
      reversedWithSpaces.slice(0, pos) + " " + reversedWithSpaces.slice(pos);
  }
  return reversedWithSpaces;
};
