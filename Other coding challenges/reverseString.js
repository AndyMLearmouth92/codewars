/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// 1) Chaining in-built methods
function reverseString(text) {
    return text.split('').reverse().join('')
}

// 2) Chaining in-built methods with a spread
function reverseString(text) {
    return [...text].reverse().join('')
}

// 3) The for loop way
function reverseString(text) {
    let result = ''
    for(let i = text.length-1; i >= 0; i--){
        result += text[i]
    }
    return result
}

// 4) The for of loop way
function reverseString(text) {
    let result = ''
    for(let char of text){
        result = char + result
    }
    return result
 }


// 5) The recursive way
function reverseString(text) {
    if(text === ''){
        return ''
    }else{
        return reverseString(text.substr(1)) + text[0]
    }
}

// 6) Reduce
function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc, '')
}

// 7) Reduce with spread syntax
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Tests:

test('reverseString is a function', () => {
    expect(typeof reverseString).toEqual('function');
  });
  
  test('reverses a string of text', () => {
    expect(reverseString('aeiou')).toEqual('uoiea');
  });
  
  test('reverses a string containing numbers', () => {
    expect(reverseString('123456789')).toEqual('987654321');
  });
  
  test('reverses a string containing mixed case characters', () => {
    expect(reverseString('AsDfGhJkL')).toEqual('LkJhGfDsA');
  });