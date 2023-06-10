/* I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

Starter code:

function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
}
*/

// Solution 1:

function nthFibo(n) {
    let a = 1, b = 0, temp;
  
    while (n > 1){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }
    return b;
  }