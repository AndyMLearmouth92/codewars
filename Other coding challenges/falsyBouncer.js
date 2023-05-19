/*
Given an array, remove all falsy values from the array and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// Find truthy values using a for of loop
function falsyBouncer(array) {
    let truthyValues = []
    for(value of array){
        if(value){
            truthyValues.push(value)
        }
    }
    return truthyValues
}

//Find truthy values using a filter
function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)  
    })
}

//A pretty close one it is! From our performance test, we see that the for…of loop is the faster approach to solving this problem. However, the **.filter()** method is only approximately 5% slower.

test('falsyBouncer is a function', () => {
    expect(typeof falsyBouncer).toEqual('function');
});

test('Removes all falsy values', () => {
    expect(falsyBouncer([1, 0, null, '', 5])).toEqual([1, 5]);
})

test('Removes all falsy values', () => {
    expect(falsyBouncer([NaN, 0, null, '', undefined])).toEqual([]);
})