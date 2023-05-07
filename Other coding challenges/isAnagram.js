/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams of each other. Return true if the pass the test and false if they don't. E.g isAnagram('silent', 'listen') // should return true
*/

//For loop method with a sort
function isAnagram(stringA, stringB) {
    let inputA = stringA.split('').sort()
    let inputB = stringB.split('').sort()
    for(let i = 0; i < inputA.length; i++){
        if(inputA[i] !== inputB[i]){
          return false
           
        }
    }
  return true
}

// DIRECT COMPARISON

function isAnagram(stringA, stringB) {

  const sanitizeString = function (str) {
      return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
  }

  return sanitizeString(stringA) == sanitizeString(stringB)

}

// CHARACTER MAP COMPARISON

function isAnagram(stringA, stringB) {

  function createCharMap(text) {
      let charMap = {}
      for (let char of text) {
          if (charMap.hasOwnProperty(char)) {
              charMap[char]++
          } else {
              charMap[char] = 1
          }
      }
      return charMap
  }

  if (stringA.length === stringB.length) {

      let stringAMap = createCharMap(stringA)
      let stringBMap = createCharMap(stringB)

      for (let char in stringAMap) {
          if (stringAMap[char] !== stringBMap[char]) {
              return false
          }
      }

      return true
  } else {
      return false
  }
}

// Tests:

test('isAnagram is a function', () => {
    expect(typeof isAnagram).toEqual('function')
  })
  
  test('"dog" is an anagram of "god"', () => {
    expect(isAnagram('dog', 'god')).toBeTruthy()
  })
  
  test('"Scotchy is Scotch!" is an anagram of "Scotch is Scotchy!"', () => {
    expect(isAnagram('Scotchy is Scotch!', 'Scotch is Scotchy!')).toBeTruthy()
  })
  
  test('"I do not work weekends." is not an anagram of "I do not work weekdays!"', () => {
    expect(isAnagram('I do not work weekends.', 'I do not work weekdays!')).toBeFalsy()
  })