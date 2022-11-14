/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

Starter code:

function toCamelCase(str){

}

*/

// Solution 1:

function toCamelCase(str){
let split = str.split(/[-_]+/)
return split.map((x,i) => i > 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x).join('')
}

// Solution 2:

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
