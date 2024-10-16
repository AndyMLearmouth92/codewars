/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )

121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square

Starter code:

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return -1;
}
*/

// Solution 1:

const findNextSquare = (sq) => {
  let root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
};

// Solution 2:

const findNextSquare = (sq) => {
  if (Math.sqrt(sq) % 1 === 0) {
    let num = Math.sqrt(sq) + 1;
    return num * num;
  } else {
    return -1;
  }
};
