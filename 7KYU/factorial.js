/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

Starter code:

function factorial(n){
    //your code here
  }

*/

// Solution 1:

const factorial = (n) => {
    let product = 1
    for(let i = 1; i <= n; i++){
     product *= i
    }
     return product
   }

// Solution 2:

const factorial = n => {
  if(n < 2){
    return 1
  }else{
    return factorial((n-1)) * n
  } 
}
