/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

Starter code:

function accum(s) {
	// your code
}

*/

Solution 1:

function accum(s) {
  return s.toLowerCase().split('').map((x,i) => x.toUpperCase() + x.repeat(i)).join('-')
}
