/* Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example

[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0

Starter code:

function consecutive(array) {
//code me
  return 0;
}
*/

// Solution 1:

const consecutive = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return length ? max - min - length + 1 : 0;
};

// Solution 2:

const consecutive = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  let count = 0;
  for (let i = min; i < max; i++) {
    if (!array.includes(i)) {
      count++;
    }
  }
  return count;
};
