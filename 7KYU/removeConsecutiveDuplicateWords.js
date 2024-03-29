/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

Starter code:

function removeConsecutiveDuplicates(string) {
  return '';
}
*/

// Solution 1:

function removeConsecutiveDuplicates(string) {
    return string.split(' ').filter((e,i,arr) => arr[i] !== arr[i+1]).join(' ')
  }

// Solution 2:

function removeConsecutiveDuplicates(string) {
    let input = string.split(' ')
    let result = []
    if(string === ''){
      return ''
    }else{
      for(let i = 0; i < input.length; i++){
        if(input[i] !== input[i+1]){
          result.push(input[i])
        }
      }
    }
    return result.join(' ')
  }