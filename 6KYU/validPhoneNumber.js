/* Write a function that accepts a string, and returns true if it is in the form of a phone number. 
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) 

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false

Starter code:

function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
}
*/

// Solution 1:

function validPhoneNumber(phoneNumber){
    if(phoneNumber.length === 14 && phoneNumber[0] === '(' && phoneNumber[4] === ')' && phoneNumber[5] === ' ' && phoneNumber[9] === '-'){
      return true
    }
    return false
  }

// Solution 2:

function validPhoneNumber(phoneNumber){
    let regex = /^(\(...\))\s(...)-(....)$/;
    return regex.test(phoneNumber);
  }
