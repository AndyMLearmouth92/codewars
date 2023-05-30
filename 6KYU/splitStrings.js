/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

Starter code:

function solution(str){
   
}
*/

// Solution 1:

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }

//  Solution 2:

 function solution(str){
    let result = []
    let input = str.split('')
    for(let i = 0; i < input.length; i += 2){
      if(input[i+1]){
        result.push(input[i]+input[i+1])
      }else{
        result.push(input[i]+'_')
      }
    }
    return result
  }