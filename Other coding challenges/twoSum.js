/* Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});

Starter code:

const twoSum = (array, sum) => {
};
*/

// Solution:

const twoSum = (array, sum) => {
  const pairs = [];
  const store = [];

  for (let part1 of array) {
    const part2 = sum - part1;
    if (store.indexOf(part2) !== -1) {
      pairs.push([part1, part2]);
    } else {
      store.push(part1);
    }
  }

  return pairs;
};
