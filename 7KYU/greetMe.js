/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

Starter code:

var greet = function(name) {

};
*/

// Solution:

var greet = function(name) {
    let amendedName = name.toLowerCase()
    let firstLetter = name.charAt(0).toUpperCase()
    return `Hello ${firstLetter+amendedName.slice(1)+'!'}`
    };