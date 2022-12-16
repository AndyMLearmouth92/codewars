/* Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :

N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes

The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found.

Starter code:

function maxMultiple(divisor, bound){
  //your code here
}

*/

// Solution 1:

const maxMultiple = (divisor, bound) => bound-bound%divisor

// Solution 2:

function maxMultiple(divisor, bound){
  let total = 0
  while (total <= bound) {
  total += divisor
    if(total > bound){
      total -= divisor
      break
     }   
   }
  return total
  }
