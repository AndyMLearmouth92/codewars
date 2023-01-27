/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

Starter code:

function capitalize(s){
  return [];
};

*/

// Solution:

function capitalize(s){
    let evenIndexCaps = s.split('').map((e,i) => i % 2 == 0 ? e.toUpperCase(): e).join('')
    let oddIndexCaps = s.split('').map((e,i) => i % 2 != 0 ? e.toUpperCase(): e).join('')
    return [evenIndexCaps, oddIndexCaps]
  };

