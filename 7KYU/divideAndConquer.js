/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.

Starter code:

function divCon(x){

}
*/

// Solution 1:

function divCon(x){
    let string = x.filter(e => typeof(e) == 'string' ? e : false)
    let number = x.filter(e => typeof(e) == 'number' ? e : false)
    return number.reduce((sum, current) => sum + current, 0) - string.reduce((sum, current) => Number(sum) + Number(current), 0)
    }

// Solution 2:

function divCon(x){
    let string = []
    let number = []
    for(let i = 0; i < x.length; i++){
      if(typeof(x[i]) == 'string'){
        string.push(x[i])
      }else{
        number.push(x[i])
      }
    }
     return number.reduce((sum, current) => sum + current, 0) - string.reduce((sum, current) => Number(sum) + Number(current), 0)
   }

