/* Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
 
Output should have 2 digits precision.

Starter code:

function heron(a, b, c) {
    return 0;
  }
*/

// Solution:

function heron(a, b, c) {
    let semiPerimeter = (a+b+c)/2
    return Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c))
  }