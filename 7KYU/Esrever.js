/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

Starter code:

reverse = function(array) {
  // TODO: program me!
}
*/

// Solution 1:

reverse = function(array) {
    let reverse = []
    for(let i = 0; i < array.length; i++){
      reverse.unshift(array[i])
    }
    return reverse
  }