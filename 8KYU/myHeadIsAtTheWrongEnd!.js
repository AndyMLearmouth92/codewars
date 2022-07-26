/* You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
  
Starter code:

function fixTheMeerkat(arr) {
 //your code here 
}
*/

// Solution 1:

function fixTheMeerkat(arr) {
 return arr.reverse()
}

// Solution 2:

const fixTheMeerkat = arr => arr.reverse() 

// Solution 3:

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

// Solution 4:

function fixTheMeerkat(arr) {
 return [arr[2], arr[1], arr[0]]
}

// Solution 5:

function fixTheMeerkat(arr) {
 let headBodyTail = []
 for(let i = 0; i < arr.length; i++){
   headBodyTail.unshift(arr[i])
 }
  return headBodyTail
}
