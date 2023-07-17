// Given a string of characters, return the character that appears the most often.

// Solution 1:


function mostCommonCharacter(array) {
    const map = {}
    let maxCharValue = 0
    let maxChar = ''
    for(let i = 0; i < array.length; i++){
        if(!map[array[i]]){
            map[array[i]] = 1
        }else{
            map[array[i]]++
        }
    }
  for(let char in map) {
        if(map[char] > maxCharValue) {
            maxCharValue = map[char]
            maxChar = char
        }
    }
    return maxChar
};

// test 1 [2,2,2,3,4,5,6,3,4,4,4]
// test 2 "Hello World!"

// Solution 2:

const max = string => {
    const characters = {};
  
    for (let character of string)
      characters[character] = characters[character] + 1 || 1;
  
    let maxCount = 0;
    let maxCharacter = null;
  
    for (let character in characters) {
      if (characters[character] > maxCount) {
        maxCount = characters[character];
        maxCharacter = character;
      }
    }
    return maxCharacter;
  };
  