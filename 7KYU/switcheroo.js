/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

Startercode:

function switcheroo(x){

}
*/

// Solution 1:

const switcheroo = x => x.split('').map(e => e == 'a' ? 'b': e == 'b' ? 'a' : e).join('')

// Solution 2:

function switcheroo(x){
    let output = ''
    for(let i = 0; i < x.length; i++){
        if(x[i] == 'a'){
        output += 'b'
        }else if(x[i] == 'b'){
        output += 'a'
        }else{
        output += 'c'
        }
  }
    return output
  }
