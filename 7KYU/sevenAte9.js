/* Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

Starter code:

function sevenAte9(str) {
  
}
*/

// Solution:

function sevenAte9(str) {
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (
      strArray[i] === "9" &&
      strArray[i - 1] === "7" &&
      strArray[i + 1] === "7"
    ) {
      strArray.splice(i, 1);
    }
  }
  return strArray.join("");
}
