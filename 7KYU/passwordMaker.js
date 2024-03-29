/* One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:

"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"

Starter code:

function makePassword(phrase) {
  // Your code here
}
*/

// Solution 1:

const makePassword = (phrase) => {
  return phrase
    .split(" ")
    .map((e) => e[0])
    .join("")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5");
};

// Solution 2:

const makePassword = (phrase) => {
  phrase = phrase.split(" ");
  let result = [];
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i][0] === "i" || phrase[i][0] === "I") {
      result.push("1");
    } else if (phrase[i][0] === "o" || phrase[i][0] === "O") {
      result.push("0");
    } else if (phrase[i][0] === "s" || phrase[i][0] === "S") {
      result.push("5");
    } else {
      result.push(phrase[i][0]);
    }
  }
  return result.join("");
};
