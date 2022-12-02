/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Starter code:

function grow(x){

}

*/

// Solution 1:

const grow = (x) => x.reduce((sum, current) => sum * current)

// Solution 2:

function grow(x){
    return x.reduce((sum, current) => sum * current)
  }
