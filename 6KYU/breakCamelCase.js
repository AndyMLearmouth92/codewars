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
