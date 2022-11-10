/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

Starter code:

function createPhoneNumber(numbers){
  
}
*/

// Solution 1:

function createPhoneNumber(numbers){
  let result = '(xxx) xxx-xxxx'
  for(let i = 0; i < numbers.length; i++){
    result = result.replace('x', numbers[i])
  }
  return result
}

// Solution 2:

function createPhoneNumber(phoneNum){
  let firstThree = [phoneNum[0],phoneNum[1],phoneNum[2]].join('')
  let secondThree = [phoneNum[3],phoneNum[4],phoneNum[5]].join('')
  let finalFive = [phoneNum[6],phoneNum[7],phoneNum[8],phoneNum[9],phoneNum[10]].join('')
  return `(${firstThree}) ${secondThree}-${finalFive}`
}
