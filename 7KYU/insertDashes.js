/* Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).

Starter code:

function insertDash(num) {
   //code me
}
*/

// Solution 1:

function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
 }

// Solution 2:

function insertDash(num) {
    let arr = String(num).split('')
    return arr.map((e,i,arr) => arr[i] % 2 !== 0 && (arr[i+1] % 2 !== 0 && i !== arr.length-1) ? e+'-' : e).join('')
 }