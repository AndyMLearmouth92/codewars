/* You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

Starter code:

function catMouse(x){
  
}
*/

// Solution 1:

function catMouse(x){
    return x.split("m")[0].length > 4 ? 'Escaped!' : 'Caught!'
}

// Solution 2:

function catMouse(x){
    let input = x.split('')
    let count = 0
    for(let i = 0; i < input.length; i++){
      if(input[i] === 'C' && (input[i+1] === 'm' || input[i+2] === 'm' || input[i+3] === 'm' || input[i+4] === 'm')){
        return 'Caught!'
      }else{
        return 'Escaped!'
      }
    }
   }