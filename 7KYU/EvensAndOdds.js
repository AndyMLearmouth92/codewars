/* This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.

Starter code:

function evensAndOdds(num){
	//your code here
}
*/

// Solution 1:

const evensAndOdds = (num) => num.toString(num % 2 ? 16 : 2);

// Solution 2:

function evensAndOdds(num) {
  if (num % 2 === 0) {
    return (num >>> 0).toString(2);
  } else {
    return num.toString(16);
  }
}
