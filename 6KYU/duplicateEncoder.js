/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

Starter code:

function duplicateEncode(word){
    // ...
}
*/

// Solution 1:

function duplicateEncode(word){
    let lCWord = word.toLowerCase()
    return lCWord.split('').map(e => lCWord.indexOf(e) !== lCWord.lastIndexOf(e) ? ')' : '(').join('')
  }

//   Solution 2:

function duplicateEncode(word){
    let result = []
    let lCWord = word.toLowerCase()
      for (var i=0; i<lCWord.length; i++) {
        if (lCWord.indexOf(lCWord[i]) !== lCWord.lastIndexOf(lCWord[i])) {
         result.push(')');
        }else{
         result.push('(')
        }
      }
    return result.join('')
  }

// Solution 3:

function duplicateEncode(word){
  let result = []
  let input = word.toLowerCase()
  for(let char of input){
    if(input.indexOf(char) === input.lastIndexOf(char)){
      result.push('(')
    }else{
      result.push(')')
    }
   }
   return result.join('')
}
