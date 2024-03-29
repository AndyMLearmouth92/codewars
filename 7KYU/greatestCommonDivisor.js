/* 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

Starter code:

function mygcd(x,y){
    //your code here
  }
*/

// Solution 1:

function mygcd(x,y){
    if(!y){
      return x
    }
    return mygcd(y,x%y)
  }

// Solution 2:

const mygcd = (x,y) => !y ? x : mygcd(y, x%y)

// Solution 3:

function mygcd(x,y){
  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}
