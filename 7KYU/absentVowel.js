/* Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples

"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

Starter code:

function absentVowel(x){

}
*/

// Solution 1:

function absentVowel(x){
    let vowels = ['a','e','i','o','u']
    for(let i = 0; i < vowels.length; i++){
      if(x.indexOf(vowels[i]) === -1){
        return i
      }
    }
  }

//   Solution 2:

function absentVowel(x){
    let vowels = ['a','e','i','o','u']
    for(let i = 0; i < vowels.length; i++){
      if(!x.includes(vowels[i])){
        return i
      }
    }
  }

//   Solution 3:

  function absentVowel(x){
    if(x.indexOf('a') === -1){
      return 0
    }else if(x.indexOf('e') === -1){
      return 1
    }else if(x.indexOf('i') === -1){
      return 2
    }else if(x.indexOf('o') === -1){
      return 3
    }else if(x.indexOf('u') === -1){
      return 4
    }
}

