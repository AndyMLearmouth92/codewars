/* Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

Starter code:

function squares(x, n) {

}
*/

// Solution 1:

function squares(x, n) {
  let result = []
  for(let i = 0; i < n; i++){
    result.push(x)
    x *= x
  }
  return result
}

// Solution 2:

function squares(x, n) {
    var result = []
    if(n < 1){
      return []
    }else if(n === 1){
      return [x]
    }else{
      let i = 0
      while (i < n) {
        if(i < 1){
          var currentNum = x
          result.push(currentNum)
          i++
        }
        if(i >= 1){
          currentNum = currentNum * currentNum
          result.push(currentNum)
          i++
        }
    }
   }
  return result
  }
