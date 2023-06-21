/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

Starter code:

function cleanString(s) {
  ... your code ...
}
*/

// Solution 1:

function cleanString(s) {
    let result = []
    for(let i = 0; i < s.length; i++){
      if(s[i] === '#'){
        result.pop()
      }else{
        result.push(s[i])
      }
    }
    return result.join('')
  }

//   Solution 2:

  function cleanString(string) {
    let result = []
    for(let char of string){
      if(char === '#') result.pop()
      else if(char) result.push(char)
    }
    return result.join('')
  }