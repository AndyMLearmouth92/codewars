/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

Starter code:

function gimme (triplet) {

}
*/

// Solution 1:

function gimme (triplet) {
    const original = [...triplet]
    const middle = triplet.sort((a,b)=> a-b)
    for(let i = 0; i < original.length; i++){
      if(original[i] == middle[1]){
        return i
      }
     }
    }

// Solution 2:

const gimme = function (arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return arr.findIndex((item)  => {
    if (item > min && item < max) {
    return item
   }
  }
)};

// Solution 3:

function gimme (triplet) {
  let middleValue = [...triplet].sort((a,b) => a-b)[1]
  return triplet.indexOf(middleValue)
}
