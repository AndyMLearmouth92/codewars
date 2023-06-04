/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  //WRITE SOME MAGIC
}
*/

// Solution 1:

function reverse(str){
    let arr = str.split(" "); 
    for(let i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    return arr.join(" ").trim(); 
  }

//   Solution 2:

  function reverse(str){
    return str.split(' ').map((e,i) => i % 2 !== 0 ? e.split('').reverse().join('') : e).join(' ').trim()
  }