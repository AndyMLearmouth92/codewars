/* CHALLENGE
Given a string of text, find and return the most recurring character. e.g maxRecurringChar('aabacada') // will return 'a'
*/

//Character map with an iterative method (For of loop)
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

//Character map and then forming arrays
function maxRecurringChar(text) {
    let charMap = {}
    let charArray =[]
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    vaulesArray = Object.values(charMap)
    maxCharValue = Math.max(...vaulesArray)

    return charArray[vaulesArray.indexOf(maxCharValue)]
}

// Tests:

test('maxRecurringChar is a function', () => {
    expect(typeof maxRecurringChar).toEqual('function');
  });
  
  test('Finds the most frequently used character', () => {
    expect(maxRecurringChar('sisusbsnshsjsmskslstsw')).toEqual('s');
  });
  
  test('Finds the most frequently used character even with mixed capitalization', () => {
    expect(maxRecurringChar('AbAdAabnmkAAAynjfaA')).toEqual('A');
  });
  
  test('Finds the most used number as well', () => {
    expect(maxRecurringChar('b2n3n2m2l2k2i2o2')).toEqual('2');
  });
