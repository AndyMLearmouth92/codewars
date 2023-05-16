/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g reverseInteger(-123) // should return -321
*/

function reverseInteger(num) {
    let stringConvert = num.toString().split('')
    return parseInt([...stringConvert].reduce((acc, char) => char + acc, '')) * Math.sign(num)
}

// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))
    
    return (reversedNumber * Math.sign(num))
}

// Tests:

test('reverseInteger function exists', () => {
    expect(reverseInteger).toBeDefined();
  });
  
  test('reverseInteger handles 0 as an input', () => {
    expect(reverseInteger(0)).toEqual(0);
  });
  
  test('reverseInteger flips a positive number', () => {
    expect(reverseInteger(5)).toEqual(5);
    expect(reverseInteger(15)).toEqual(51);
    expect(reverseInteger(90)).toEqual(9);
    expect(reverseInteger(2359)).toEqual(9532);
  });
  
  test('reverseInteger flips a negative number', () => {
    expect(reverseInteger(-5)).toEqual(-5);
    expect(reverseInteger(-15)).toEqual(-51);
    expect(reverseInteger(-90)).toEqual(-9);
    expect(reverseInteger(-2359)).toEqual(-9532);
  });