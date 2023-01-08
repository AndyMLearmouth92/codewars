/* The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases

Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples

Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1]
Input:

fibsFizzBuzz(20)
Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
##Good Luck!##



Starter code:

var fibsFizzBuzz = function(n) {
    // Your code here.
}

*/

// Solution:

var fibsFizzBuzz = function(n) {
    var a = 1, b = 0, temp;
    let result = []
    while (n > 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
      if(b % 3 == 0 && b % 5 == 0){
        result.push('FizzBuzz')
      }else if(b % 3 == 0){
        result.push('Fizz')
      }else if(b % 5 == 0){
        result.push('Buzz')
      }else{
        result.push(b)
      }
    }
    return result
  }