/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

Starter code:

function noOdds( values ){
  // Return all non-odd values
}

*/

// Solution 1:

function noOdds( values ){
    return values.filter(e => e % 2 == 0)
  }

// Solution 2:

const noOdds = (values) => values.filter(e => e % 2 == 0)
