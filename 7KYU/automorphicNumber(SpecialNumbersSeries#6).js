/* A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Starter code:

function automorphic(n){
  //your code here
}
*/

// Solution 1:

const automorphic = (n) =>
  String(n * n).endsWith(n) ? "Automorphic" : "Not!!";
