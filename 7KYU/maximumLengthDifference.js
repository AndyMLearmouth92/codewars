/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Starter code:

function mxdiflg(a1, a2) {
    // your code
}
*/

// Solution 1:

function mxdiflg(a1, a2) {
  let input1Lengths = a1.map((e) => e.length);
  let input2Lengths = a2.map((e) => e.length);
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  } else {
    return Math.max(
      Math.max(...input1Lengths) - Math.min(...input2Lengths),
      Math.max(...input2Lengths) - Math.min(...input1Lengths)
    );
  }
}

// Solution 2:

function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) {
    return -1;
  }
  a1.sort((a, b) => a.length - b.length);
  a2.sort((a, b) => a.length - b.length);
  return Math.max(
    Math.abs(a1[0].length - a2[a2.length - 1].length),
    Math.abs(a2[0].length - a1[a1.length - 1].length)
  );
}
