/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Starter code:

function XO(str) {
    //code here
}

*/

// Solution 1:

function XO(str) {
 //Make string lower case and then turn into an array
 let newArr = str.toLowerCase().split('')
 //Filter to count x and o and compare them to see if they are equal
 return newArr.filter(x => x === 'o').length === newArr.filter(x => x === 'x').length
}


// Solution 2:

function XO(str) {
//Regex to match x and o
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return (x && x.length) === (o && o.length)
}

// Solution 3:

function XO(str) {
  //Turn the string to an array
  let newArr = str.split('')
  //create arrays to store x and o
  let x = []
  let o = []
  //Loop through the new array
  for(let i = 0; i < newArr.length; i++){
  //Conditional to select x and o including both cases
   if(newArr[i] === 'x' || newArr[i] === 'X'){
     x.push(newArr[i])
   }else if(newArr[i] === 'o' || newArr[i] === 'O'){
     o.push(newArr[i])
   }
  }
  //Compare length of x and o arrays
  if(x.length === o.length){
    return true
  }else{
    return false
  }
}

