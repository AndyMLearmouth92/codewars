/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

Starter code:

function expandedForm(num) {
  // Your code here
}

*/

// Solution:

function expandedForm(num) {
    let arr = num.toString().split('');
    for(let i = 0 ; i < arr.length; i++ ){
    for(let y = arr.length - i; y > 1; y--){
      arr[i] += '0'; 
      }
     }
     arr = arr.filter(e => !e.startsWith(0));
     return arr.join(' + ')
    }