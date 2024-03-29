/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

Starter code:

function toWeirdCase(string){
  //TODO
}
*/

// Solution 1:

function toWeirdCase(string){
    let weirdStringCase = '';
    let counter = 0;
      
    for(var i = 0; i < string.length; i++) {
      if(string[i] === ' ') {
        weirdStringCase += ' ';
        counter = 0;
      }else if(counter % 2 === 0) {
         weirdStringCase += string[i].toUpperCase();
         counter++;
      }else if(counter % 2 !== 0) {
         weirdStringCase += string[i].toLowerCase();
         counter++;
       }
      }
      return weirdStringCase;
    };

// Solution 2:

function toWeirdCase(string){
    let weirdStringCase = []
    let input = string.split(' ')
    for(let i = 0; i < input.length; i++){
      weirdStringCase.push(input[i].split('').map((e,i) => i % 2 == 0 ? e.toUpperCase() : e).join('') + ' ')
    }
      return weirdStringCase.join('').slice(0, -1)
    }
