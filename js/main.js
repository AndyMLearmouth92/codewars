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

 