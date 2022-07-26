/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

// Solution:

// Return an array
function fizzbuzz(n)
{
  // New array to store numbers between 0 and N
  let newArr = []
  // for loop to get from 0 to N
  for(let i = 1; i <= n; i++){
    // Conditional - 3 = Fizz, 5 = buzz, 3&5 = FizzBuzz or i = non number
    if(i % 3 === 0 && i % 5 === 0){
      newArr.push('FizzBuzz')
    }else if(i % 3 === 0){
       newArr.push('Fizz')
    }else if(i % 5 === 0){
       newArr.push('Buzz')
    }else{
       newArr.push(i)
    }
  }
  return newArr
}
