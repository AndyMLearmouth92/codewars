/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

Starter code:

function solve(s){
    //..
}
*/

// Solution 1:

function solve(s){
    let up=s.split('').filter(e=>e.match(/[A-Z]/)).length
    let down=s.split('').filter(e=>e.match(/[a-z]/)).length
    return down>=up?s.toLowerCase():s.toUpperCase();
}

// Solution 2:

function solve(s){
    let upperCase = 0
    let lowerCase = 0
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i].toUpperCase()){
        upperCase++
      }else{
        lowerCase++
      }
    }
    return lowerCase >= upperCase ? s.toLowerCase() : s.toUpperCase()
  }