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