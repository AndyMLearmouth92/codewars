/* Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

Starting code:

function divisors(integer) {
  
};

*/

// Solution 1:

function divisors(integer) {
  // New array to store divisors
  let newArr = []
  // Loop to iterate upto the given integer
  for(let i = 2; i < integer; i++){
  // If integer is divisible by iteration push to new array
    if(integer % i === 0){
      newArr.push(i)
    }
  }
  // If length of array is > 0 show array or show integer is prime.
  let answer = newArr.length !== 0 ? newArr : `${integer} is prime`
  return answer
};

// Solution 2:

function divisors(integer) {
  let result = []
  for (let i = 2; i <= Math.floor(integer / 2); ++i){
    if (integer % i == 0){
      result.push(i);
    }
  } 
  return result.length ? result : integer + ' is prime'
};
