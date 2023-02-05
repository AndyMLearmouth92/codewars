/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

Starter code:

function removeDuplicateWords (s) {
  // your perfect code...
}
*/

// Solution 1:

function removeDuplicateWords (s) {
    let arrayWords = s.split(' ')
    return [...new Set(arrayWords)].join(' ')
  }

// Solution 2:

const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ')
