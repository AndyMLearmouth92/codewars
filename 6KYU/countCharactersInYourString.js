/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Starter code:

function count(string) {
    // TODO
    return {};
  }
  */

// Solution 1:

function count(string) {
    return string.split('').reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  }

// Solution 2:

function count(string) {
  let result = {}
  for(let i = 0; i < string.length; i++){
    if(!result[string[i]]){
      result[string[i]] = 1
    }else{
      result[string[i]]++
    }
  }
  return result
}

// Solution 3:

function count(string) {
  let result = {}
  for (const char in string) {
    if(!result[string[char]]){
      result[string[char]] = 1
    }else{
      result[string[char]]++
    }
  }
  return result;
}

