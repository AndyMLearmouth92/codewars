/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Starter code:

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
  }

*/

// Solution 1:

var uniqueInOrder=function(iterable){
    let uniqueInOrder = []
    for(let i = 0; i < iterable.length; i++){
      if(iterable[i] !== iterable[i+1]){
       uniqueInOrder.push(iterable[i])
      }
    }
    return uniqueInOrder
  }

//   Solution 2:

var uniqueInOrder=function(iterable){
    return [...iterable].filter((e,i) => e !== iterable[i-1])
  }