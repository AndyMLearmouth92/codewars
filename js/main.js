//Code Wars:

//Complete the solution so that it reverses the string passed into it.

function solution(str){
    return str.split('').reverse().join('')
}

solution('Hello')

//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase()
  }

  // Sum Numbers
function sum (numbers) {
    return numbers.reduce((sum, current) => sum + current, 0)
};

function opposite(number) {
    return -number
  }

  //Convert number to reversed array of digits

  function digitize(n) {
    return n.toString().split('').reverse().map((x)=> Number(x))
  }

  //Given an array of integers your solution should find the smallest integer. 

  class SmallestIntegerFinder {
      findSmallestInt(args) {
     const min = args.reduce((a, b) => Math.min(a, b))
    }
  }

  //Write a program that creates the following array, then calculates and shows the array's maximum value.

  const values = [3, 11, 7, 2, 9, 10];

  let max = values[0];
  
  for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
  max = values[i];
  }
  }
  
  console.log(max);

  //Find the smallest Integer

  class SmallestIntegerFinder {
    findSmallestInt(args) {
     let min = args.reduce((a, b) => Math.min(a, b))
     console.log(min)
    }
  }
    
    SmallestIntegerFinder([34, -345, -1, 100])

    //Create a function that has a loop that prints '21' 21 times to the console and then call that function.

    for(let i = 0; i < 21; i++){
        console.log(21)
    }
 

//Complete the method that takes a boolean value and return a "Yes"string for true, or a "No" string for false.

function boolToWord(bool){
  if(bool === true){
      return 'Yes'
}else if(bool === false){
    return 'No'
}
}
//OR

const boolToWord = bool => bool ? 'Yes' : 'No'

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return Number(n.toString().split('').sort((a, b)=> b - a).join(''))
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(x => x * 2);
}

//You need to double the integer and return it.

function doubleInteger(i) {
  return i*2
}

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return (n % x === 0 && n % y ===0)? true : false
}

//with an if statement

function isDivisible(n, x, y) {
  if(n % x === 0 && n % y === 0){
    return true
  }else{
    return false
}
  }

  //Clock shows h hours, m minutes and s seconds after midnight. //Your task is to write a function which returns the time since midnight in milliseconds.

  function past(h, m, s){
    let hours = h * 60 * 60 * 1000;
    let minutes = m * 60 * 1000;
    let seconds = s * 1000;
    
    return hours + minutes + seconds;
  }


  //Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.


  function paperwork(n, m) {
    if(n >= 0 && m >= 0){
      return n*m
    } else if(n < 0 || m < 0){
      return 0
    }
  }

  //Ternary operator

  function paperwork(n, m) {
    return (n >= 0 && m >= 0)? n*m : 0
  }

  //Arrow function and ternary operator

  const paperwork = (n, m) => (n >= 0 && m >= 0)? n*m : 0
  

  //Pre fizzbuzz

  function preFizz(n) {
    let newArray = []
    for(let i = 1; i <= n; i++){
      newArray.push(i)
    }
    return newArray
  }

  //Given a list of integers, determine whether the sum of its elements is odd or even.

  const oddOrEven = array => array.reduce((sum, current) => sum + current, 0) % 2 == 0 ? "even" : "odd"

  //OR

  function oddOrEven(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++){
      sum = array[i] + sum
    }
   if(sum % 2 == 0){
     return 'even'
   }else{
     return 'odd'
   }
 }

 //Return the number (count) of vowels in the given string.

 function getCount(str) {
  let vowelsCount = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for(let char of str) {
      if(vowels.includes(char)) {
          vowelsCount++
      }
  }

  return vowelsCount;
}

//OR

function getCount(str) {
  return (str.match(/[aeiou]/gi)||[]).length
}

//The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

function removeSmallest(arr) {
  const smallest = Math.min(...arr);
  const index = arr.indexOf(smallest);
  
  return arr.filter((_, i) => i !== index);
}

// Given an array of integers your solution should find the smallest integer. 
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function smallestIntegerFinder(arr){
  let sorted = arr.sort((a, b) => a-b)
  console.log(sorted[0])
  }

  
  // Write a function which calculates the average of the numbers in a given list.

  // Note: Empty arrays should return 0.

  function find_average(array) {
    let sum = 0
    let average = 0
    for(let i = 0; i < array.length; i++){
      sum = sum + array[i]
      if(array === 0 || array.length == 0){
        return 0
    }
      average = sum / array.length
      }
    return average;
  }