/* Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]

Starter code:

function doubleEveryOther(a) {
  return a;
}
*/

// Solution:

function doubleEveryOther(a) {
  return a.map((e, i) => (i % 2 !== 0 ? e * 2 : e));
}
