/* Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example

123  => 6
223  => 7
1337 => 14

Starter code:

function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}

*/

// Solution 1:

function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  Math.floor(integer).toString();
    for(var i = 0; i < digits.length; i++) {
      sum += Number(digits[i]);
    }
    return sum
  }

// Solution 2:

const getSumOfDigits = (integer) => String(integer).split('').reduce((sum, current) => Number(sum) + Number(current), 0)
