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
