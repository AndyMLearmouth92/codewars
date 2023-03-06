/* Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

Starter code:

function mostFrequentItemCount(collection) {
  // Do your magic. :)
}
*/

// Solution 1:

function mostFrequentItemCount(collection) {
    let charMap = {}
      let maxCharValue = 0
      let maxChar = ''
      for (let char of collection) {
          if (charMap.hasOwnProperty(char)) {
              charMap[char]++
          } else {
              charMap[char] = 1
          }
      }
      for (let char in charMap) {
          if (charMap[char] > maxCharValue) {
              maxCharValue = charMap[char]
          }
      }
      return maxCharValue
  }