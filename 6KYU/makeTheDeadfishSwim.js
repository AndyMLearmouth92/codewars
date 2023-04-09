/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

Starter code:

// Return the output array, and ignore all non-op characters
function parse( data )
{
  
}
*/

// Solution:

function parse( data )
{
  let count = 0
  let result = []
  let inputArr = data.split('') 
  for(let i = 0; i <= inputArr.length; i++){
    if(inputArr[i] == 'i'){
      count ++
    }else if(inputArr[i] == 'd'){
      count --
    }else if(inputArr[i] == 's'){
      count = count * count
    }else if(inputArr[i] == 'o'){
      result.push(count)
    }
  }
    return result
}