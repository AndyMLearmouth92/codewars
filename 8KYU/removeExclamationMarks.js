/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Starter code:

function removeExclamationMarks(s) {
  return '';
}

*/

// Solution 1:

function removeExclamationMarks(s) {
  return s.replace(/!/g, "")
}

// Solution 2:

const removeExclamationMarks = s => s.replace(/!/g, '')

// Solution 3:

function removeExclamationMarks(s) {
  let withoutExMark = []
  for(let i = 0; i < s.length; i++){
    if(s[i] !== '!'){
      withoutExMark.push(s[i])
    }
  }
  return withoutExMark.join('')
}
