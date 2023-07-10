/* Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

If the average length is not an integer, use Math.round().

The input array's length > 1

Starter code:

function averageLength() { 
    // good luck
  }

*/

// Solution 1:

function averageLength(x) { 
    let average = Math.round(x.reduce((sum, current) => sum + current.length, 0)/x.length)
    return x.map(element => element[0].repeat(average))
  }

// Solution 2:

function averageLength(x) { 
    let count = 0
    for(let i = 0; i < x.length; i++){
      count += x[i].length
    }
    let average = Math.round(count/x.length)
    return x.map(e => e.charAt(0).repeat(average))
  }