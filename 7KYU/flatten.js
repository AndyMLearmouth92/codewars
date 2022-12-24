/* Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]

Starter code:

var flatten = function (array){
  // TODO: Program me
}

*/

// Solution 1:

var flatten = function (array){
    return array.flat()
  }

  //Solution 2:

  var flatten = array => array.flat()