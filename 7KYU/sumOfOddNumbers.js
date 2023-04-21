/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Starter code:

function rowSumOddNumbers(n) {
	// TODO
}

*/

// Solution 1:

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}

// Solution 2:

function rowSumOddNumbers(n) {
    let startNum = n*(n-1)+1
      let rowArr = [startNum]
    for(let i = 0; i < n -1; i++){
      rowArr.push(rowArr[i]+2)
    }
    return rowArr.reduce((sum, current) => sum + current)
  }
