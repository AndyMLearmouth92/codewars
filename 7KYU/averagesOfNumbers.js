/* #Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-)

Starter code:

function averages(numbers) {

}
*/

// Solution:

function averages(numbers) {
    let arrayOfAverages = []
    if(numbers){
      for(let i = 0; i < numbers.length-1; i++){
        arrayOfAverages.push((numbers[i] + numbers[i+1])/2)
      }
      }
      return arrayOfAverages
    }

    // Solution 2:

    function averages(numbers) {
        if(numbers){
          return numbers.map((e,i,arr) => (e + arr[i+1]) /2).slice(0,-1)
          }else{
            return []
          }
        }
