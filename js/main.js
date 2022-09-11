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

  //In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  function filter_list(l) {
    let newArr = []
    for(let i = 0; i < l.length; i++){
      if(typeof(l[i]) === 'number'){
        newArr.push(l[i])
      }
    }
      return newArr
  }


  //Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

  function invert(array) {
    return array.map(x => x * -1);
 }

//  Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if((flower1 + flower2) %2 !== 0){
    return true
  }else{
    return false
  }
}

//OR

function lovefunc(flower1, flower2){
  return (flower1 + flower2) %2 !== 0 ? true : false
}

//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverseArray(arr){
  let reversedList = arr.reverse()
  console.log(reversedList)
}

reverseArray(['bulb', 'char', 'squirt'])

//OR

function reverseArray(arr){
  console.log(arr.reverse())
}

reverseArray(['bulb', 'char', 'squirt'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function squaredCubed(arr1, arr2){
  let squaring = arr1.map(x => x * x)
  let squared = squaring.reduce((sum, current) => sum + current, 0)
  let cubing = arr2.map(x => x * x * x)
  let cubed = cubing.reduce((sum, current) => sum + current, 0)
  if(squared > cubed){
      console.log(true)
  }else if(cubed > squared){
      console.log(false)
  }else{
      console.log('Same')
}
}

squaredCubed([2,4,6],[2,4,6])

function squaredCubed(a,b){
return a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
}

squaredCubed([2,2,2],[2,2,2])

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(arr){
  console.log(arr.filter((x,i) => x % i===0))
}




//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function stringsAndNums(arr){
  return arr.reduce((sum, current) => Number(sum) + Number(current), 0)
}


// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let bublRareCandy = 11

let caterpieRareCandy = 6

let weedleRareCandy = 6

let totalCandies = bublRareCandy + caterpieRareCandy + weedleRareCandy


//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function fahrenheitToCelcius(fahrenheit){
    let celcius = (fahrenheit-32)/1.8
    console.log(celcius)
}

function charmanderBattle(currentTemp){
    let converted = fahrenheitToCelcius(currentTemp)
    if(converted > 0){
        console.log('charmander can battle')
    }else{
        console.log('charmander cannot battle')
    }
}

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function undergroundPokemonLeague(partySize){
    for(let i = 1; i <= partySize; i++){
        console.log('Pikachu I choose you')
    }
}

undergroundPokemonLeague(6)


//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
  let newArr = []
  if(nums !== null){
  return nums.sort((a, b) => a - b)
}else{
  return newArr
}
  }

  //OR

  function solution(nums){
    if(nums){
    return nums.sort((a, b) => a - b)
  }else{
    return []
  }
    }

    //OR

    function solution(nums){
      return nums !== null ? nums.sort((a, b) => a - b) : []
    
    }

    //Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

    function sortByLength (array) {
      return array.sort((a,b) => a.length - b.length)
    };


    //Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

    function arithmetic(a, b, operator){
      if(operator === 'add'){
        return a+b
      }else if(operator === 'subtract'){
        return a-b
      }else if(operator === 'multiply'){
        return a*b
      }else if(operator === 'divide'){
        return a/b
      }
    }

    //OR

    function arithmetic(a, b, operator){
      if(operator === 'add') return a+b
      if(operator === 'subtract') return a-b
      if(operator === 'multiply') return a*b
      if(operator === 'divide') return a/b
  }

  //OR

  function arithmetic(a, b, operator){
    switch (operator){
      case 'add':
      return a + b; 
      case 'subtract':
      return a - b;
      case 'multiply':
      return a*b;
      case 'divide':
      return a/b;
  }
    }

//     Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
  let bmi = weight / (height ** 2)
  if(bmi <= 18.5){
  return "Underweight";
    }else if(bmi <= 25.0){
      return "Normal"
    }else if(bmi <= 30.0){
      return "Overweight"
    }else if(bmi > 30){
      return "Obese"
    }
}

//OR

function bmi(weight, height) {
  let bmi = weight / (height ** 2)
  return bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese" 
}


//Array Homework Class 31
//Level 8

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  let sum = 0
  for(let i = 0; i < x.length; i++){
    sum += Number(x[i])
}
  return sum
}