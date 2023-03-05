/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g palindromeChecker('racecar') // will return true
*/

//Built in methods
function palindromeChecker(text) {
    let input = text.toLowerCase()
    return input === input.split('').reverse().join('')
}

// Pallindrome check using every iteration
function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')
    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index -1]
    })
    return result
}

// Pallindrome check using a for loop and optimised so it only runs to half way.
function palindromeChecker(text) {
    let input = text.split('')
    for(let i = 0; i < input.length/2; i++){
        if(input[i] !== input[input.length - 1 - i]){
            return false
        }
    }
    return true
}

// Tests:

test('palindromeChecker is a function', () => {
    expect(typeof palindromeChecker).toEqual('function');
  });
  
  test('"php" is a palindrome', () => {
    expect(palindromeChecker('php')).toBeTruthy();
  });
  
  test('" php  " is not a palindrome', () => {
    expect(palindromeChecker(' php  ')).toBeFalsy();
  });
  
  test('"developer" is not a palindrome', () => {
    expect(palindromeChecker('developer')).toBeFalsy();
  });
  
  test('"2002" a palindrome', () => {
    expect(palindromeChecker('2002')).toBeTruthy();
  });

