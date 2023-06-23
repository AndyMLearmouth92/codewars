/* In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try:

Sum of prime-indexed elements

Sum of integer combinations

Starter code:

function repeats(arr){
//..
};
*/

// Solution 1:

function repeats(arr){
    return arr.filter((e => arr.indexOf(e) === arr.lastIndexOf(e))).reduce((sum, current) => sum + current, 0)
  };

// Solution 2:

function repeats(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        sum += arr[i]
      }
    }
    return sum
  };
