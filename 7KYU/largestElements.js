/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

Starter code:

function largest(n,xs){
    // Find the n highest elements in a list
}

*/

// Solution 1:

function largest(n,xs){
   return xs.sort((a,b) => a-b).slice(xs.length-n)
}
