/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Starting code:

function getDivisorsCnt(n){
    // todo
}

*/

// Solution 1:

function getDivisorsCnt(n){
//Variable to count divisors
  let count = 0
  // for loop to count up to n
  for(let i = 1; i <= n; i++){
  // conditional to calculate whether n is divisible by i
    if(n % i === 0){
      count += 1
    }
  }
  return count
}

// Solution 2:

function getDivisorsCnt(n){
  let count = 0
  for(let i = 1; i <= n; i++) if(n % i === 0) count++
  return count
}

// Solution 3:

function getDivisorsCnt(n){
  let count = 0
  for(let i = 0; i <=n; i++) if(n%i === 0) count += 1
  return count
}
