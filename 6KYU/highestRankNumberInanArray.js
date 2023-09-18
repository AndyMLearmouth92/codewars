/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

Starter code:

function highestRank(arr){
  
}
*/

// Solution:

function highestRank(arr) {
  let modeMap = {},
    maxEl = arr[0],
    maxCount = 1;

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

// Solution 2:

function highestRank(arr) {
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Number(
    Object.keys(hashmap).reduce((a, b) => (hashmap[a] > hashmap[b] ? a : b))
  );
}

// Solution 3:

function highestRank(arr) {
  let count = 0;
  let highestCount = 0;
  let mode = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > highestCount) {
      highestCount = count;
      mode = arr[i];
      count = 0;
    }
  }
  return mode;
}
