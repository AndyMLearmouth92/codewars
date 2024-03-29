/* Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. 
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

Starter code:

function spacey(array){

}
*/

// Solution 1:

function spacey(array) {
  let str = "";
  return array.map((e) => (str += e));
}

// Solution 2:

function spacey(array) {
  let holdingStr = "";
  let result = [];
  for (let i = 0; i < array.length; i++) {
    holdingStr += array[i];
    result.push(holdingStr);
  }
  return result;
}
