/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Starter code:

function findOutlier(integers){
  //your code here
}
*/

// Solution 1:

function findOutlier(integers){
    let even = integers.filter(e => e % 2 == 0)
    let odd = integers.filter(e => e % 2 != 0)
    return even.length == 1 ? Number(even) : Number(odd)
  }

// Solution 2:

function findOutlier(integers){
    let odd = []
    let even = []
    let sort = integers.map(e => e % 2 == 0 ? even.push(e) : odd.push(e))
    return even.length == 1 ? Number(even) : Number(odd)
  }

//   Solution 3:

function findOutlier(integers){
    let odd = []
    let even = []
    for(let i = 0; i < integers.length; i++){
      if(integers[i] % 2 == 0){
        even.push(integers[i])
      }else{
        odd.push(integers[i])
      }
    }
    if(odd.length < even.length){
     return Number(odd)
    }else{
      return Number(even)
    }
  }
