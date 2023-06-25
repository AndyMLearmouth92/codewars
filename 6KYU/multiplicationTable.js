/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

Starter code:

multiplicationTable = function(size) {
  // insert code here
}
*/

// Solution:

multiplicationTable = function(size) {
    let result = []
    for(let i = 1; i <= size; i++){
      let innerResult=[]
      for(let j = 1; j < size+1; j++){
        innerResult.push(j*i)
      }
      result.push(innerResult)
    }
    return result
  }