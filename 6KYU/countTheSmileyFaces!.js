/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces:  ;( :> :} :]

Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

Starter code:

//return the total number of smiling faces in the array
function countSmileys(arr) {

}

*/

// Solution 1:

//return the total number of smiling faces in the array
function countSmileys(arr) {
let numberOfSmileyFaces = 0
let smileyFaces = [':)', ':D', ';)', ';D', ':-)', ':~)', ':-D', ':~D', ';-)', ';~)', ';~D', ";-D"]
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < smileyFaces.length; j++){
    if(arr[i] === smileyFaces[j]){
      numberOfSmileyFaces += 1
    }
  }
}
  return numberOfSmileyFaces
}

// Solution 2:

function countSmileys(arr) {
//Count number of smiley faces
let numOfSmileys = 0
//Iterate through the elements of the array
for(let i = 0; i < arr.length; i++){
//If elements make a smiley face add one to the count.
  if(arr[i][0] === ':' || arr[i][0] === ';' ){
      if((arr[i][1] === '-' || arr[i][1] === '~') && (arr[i][2] === ')' || arr[i][2] === 'D') || (arr[i][1] === ')' || arr[i][1] === 'D')){
        numOfSmileys += 1
      }
    }
  }
  return numOfSmileys
}


