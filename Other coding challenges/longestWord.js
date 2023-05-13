/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//For loop method
function longestWord(text) {
    let input = text.split(' ')
    let maxLength = 0
    let result = ''
    for(let i = 0; i < input.length; i++){
      if(input[i].length > maxLength){
        maxLength = input[i].length
        result = input[i]
      }
    }
   return result
 }

 //Sort Method
 function longestWord(text) {
    return text.split(' ').sort((a,b) => b.length - a.length)[0]
}

// Reduce method
function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

// Tests:

test('longestWord is a function', () => {
    expect(typeof longestWord).toEqual('function');
  });
  
  test('returns the longet word in a mixed case string of text', () => {
    expect(longestWord('Top Shelf Web Development Training on Scotch') ).toEqual('Development');
  });
  
  test('returns the longet word in a lowercase string', () => {
    expect(longestWord('the ultimate guide to js algorithms') ).toEqual('algorithms');
  });
  test('returns the longet word in an uppercase string', () => {
    expect(longestWord('BUILDING FOR THE NEXT BILLION USERS') ).toEqual('BUILDING');
  });
