/* CHALLENGE
Given a string of text, return the number of vowels found within the text e.g vowelsCounter('anehizxcv') // will return 3
*/

// Solution 1: Iterative approach
function vowelsCounter(text) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for(let letter of text.toLowerCase()){
      if(vowels.includes(letter)){
        count++
      }
    }
    return count
}

// Solution 2: Regular expressions
function vowelsCounter(text) {
   let matchingInstances = text.match(/[aeiou]/gi)
   if(matchingInstances){
       return matchingInstances.length
   }else{
       return 0
   }
}
//Most optimal solution. Approx 88% faster than the iterative method.

// Tests:

test('vowelsCounter is a function', () => {
    expect(typeof vowelsCounter).toEqual('function');
  });
  
  test('returns the number of vowels found', () => {
    expect(vowelsCounter('aeiou')).toEqual(5);
  });
  
  test('returns the number of vowels found when string is capitalized', () => {
    expect(vowelsCounter('AEIOU')).toEqual(5);
  });
  
  test('returns the number of vowels found when all alphabets are passed in', () => {
    expect(vowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });
  
  test('returns the number of vowels found when string has mixed capitalization', () => {
    expect(vowelsCounter('Abcdegfizzjbhso')).toEqual(4);
  });
