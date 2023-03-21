/* Complete the solution so that the function will break up camel casing, using a space between words.

Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Starter code:

// complete the function
function solution(string) {
    
}
*/

// Solution 1:

function solution(string) {
    return string.split('').map((e,i) => e == e.toUpperCase() ? ' ' + e : e).join('')
 }

// Solution 2:

// complete the function
function solution(string) {
    let brokenCamelCase = ''
    for(let i = 0; i < string.length; i++){
      if(string[i]== string[i].toUpperCase()){
        brokenCamelCase += ' ' + string[i]
      }else{
        brokenCamelCase += string[i]
      }
    }
    return brokenCamelCase
  }

//   Solution 3:

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  }

