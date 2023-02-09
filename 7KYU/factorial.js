/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

Starter code:

function factorial(n){
    //your code here
  }

*/

const factorial = (n) => {
    let product = 1
    for(let i = 1; i <= n; i++){
     product *= i
    }
     return product
   }