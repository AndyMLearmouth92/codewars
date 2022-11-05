/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  return 0;
}
*/

// Solution 1:

function stray(numbers) {
    let strayCharacter = numbers[0];
    // compare [0] to [1] and [2]
    if(strayCharacter !== numbers[1] && strayCharacter !== numbers[2]){
      return strayCharacter;
    }else{
      //Find the first different value
      for(let i = 1; i < numbers.length; i++){
      if(strayCharacter !== numbers[i]){
        return numbers[i];
      }
    }
    }
 }
 
 
//  Solution 2:
 
 function stray(numbers) {
  //Find highest and lowest in array
  let max = Math.min(...numbers)
  let min = Math.max(...numbers)
  //Filter array and check max
  return numbers.filter(x => x == max).length == 1 ? max : min
}
