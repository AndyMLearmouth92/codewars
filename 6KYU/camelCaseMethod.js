/* Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)

Starter code:

String.prototype.camelCase=function(){
  //your code here
}
*/

// Solution:
String.prototype.camelCase=function(){
    return this.split(' ').map(e=> e.charAt(0).toUpperCase()+e.slice(1)).join('')
  }