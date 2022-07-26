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

// Solution 2:

function largest(n,xs){
  let answer = []
  let sorted = xs.sort((a,b) => b-a)
  for(let i = 0; i < n; i++){
    answer.push(sorted[i])
  }
  return answer.reverse()
}

// Solution 3:

const largest = (n,xs) => xs.sort((a,b) => a-b).slice(xs.length-n)
