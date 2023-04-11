/*
Return the lowest index at which a value (second argument) should beinserted into an array (first argument) once it has been sorted. The returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


//For loop comparing size
function whereIBelong(arr, num) {
    let input = arr.sort((a,b) => a-b)
    for(let i = 0; i < input.length; i++){
       if(arr[i] >= num){
          return i
       }
    }
    return arr.length
 }
 
 // For loop using a count
 function whereIBelong(arr, num) {
 
    var counter = 0
    for (i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            counter++
        }
    } 
 
    return counter
 }
 
 //While loop
 function whereIBelong(arr, num) {
    arr.sort((a, b) => {
        return a - b
    })
 
    let counter = 0;
    while (num > arr[counter]) {
        counter++
    }
 
    return counter
 }
 
 //Sort and index of
 function whereIBelong(arr, num) {
    arr.push(num)
    arr.sort((a, b) => a - b)
    return arr.indexOf(num)
 }
 
 //The best performing implementation as shown above is the use of a for-loop to count the smaller values. All other solutions considered are over 90% slower as noticed in the screenshot.
 
//  Tests:

test('whereIBelong is a function', () => {
    expect(typeof whereIBelong).toEqual('function');
  });
  
  test('returns the appropriate index', () => {
    expect(whereIBelong([1,2,3,4], 1.5)).toEqual(1);
  });
  
  
  test('returns the index of the specified number', () => {
    expect(whereIBelong([10, 20, 30, 40, 50], 30)).toEqual(2);
  });
  
  test('returns the index even with an empty array', () => {
    expect(whereIBelong([], 1)).toEqual(0);
  });

