/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

Starter code:

function bump(x){

}
*/

// Solution 1:

const bump = (x) => x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!'

// Solution 2:

const bump = (x) => x.split('').filter(e => e == 'n').length > 15 ? 'Car Dead' : 'Woohoo!'

// Solution 3:

function bump(x){
    let array = x.split('')
    let count = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] == 'n')
        count ++
      }
    return count > 15 ? 'Car Dead' : 'Woohoo!'
    }
