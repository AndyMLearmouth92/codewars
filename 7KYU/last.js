/* Find the last element of the given argument(s).

Examples

last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

Starter code:

function last(list){

}
*/

// Solution 1:

function last(list) {
    let lastArgument = arguments[arguments.length-1];
    let lastElement = list[list.length-1];
    return arguments.length > 1 ? lastArgument : lastElement || lastArgument;
  }

// Solution 2:

function last(list){
    let last = arguments[arguments.length - 1];
    return last[last.length - 1] || last;
  }