/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

Starter code:

function sumMix(x){

}
*/

// Solution 1:

function sumMix(x){
    return x.reduce((sum, current) => Number(sum) + Number(current), 0)
  }

// Solution 2:

function sumMix(x){
    let sum = 0
    for(let i = 0; i < x.length; i++){
      sum += Number(x[i])
  }
    return sum
  }

// Solution 3:

function sumMix(x){
    let sum = 0
    x.forEach(item => {
      sum += Number(item)
     })
      return sum
}

// Solution 4:

function sumMix(x){
    let nums = x.map(i => {
    return Number(i);
  });
   return nums.reduce((sum, current) => sum + current, 0)
  }
