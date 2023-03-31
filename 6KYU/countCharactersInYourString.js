/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Starter code:

function count(string) {
    // TODO
    return {};
  }
  */

// Solution:

function count(string) {
    return string.split('').reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  }