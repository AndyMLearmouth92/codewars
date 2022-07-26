/*
Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

Starter code:

var capitals = function (word) {
	// Write your code here
};

*/

// Solution 1:

var capitals = function (word) {
	return word.split('').map((x,i) => x === x.toUpperCase() ? i : -1).filter((x)=> x >= 0)
};


// Solution 2:

var capitals = function (word) {
  let capitalLetterPositions = []
  //Iterate through the string
	for(let i = 0; i < word.length; i++){
  //Check if element is capitalised
    if(word[i] === word[i].toUpperCase()){
      capitalLetterPositions.push(i)
    }
  }
  return capitalLetterPositions
};
