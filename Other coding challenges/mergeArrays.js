/*
 Given two or more arrays, write a function that combines their elements into one array without any repetition. E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Flatten arrays and set method
function mergeArrays(...arrays) {
    let newArr = arrays.flat()
    let result = [...new Set(newArr)]
    return result
}

// For each loop using set method
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return [...new Set([...jointArray])]
}

// Using filter method
function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

//Using reduce method
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

// Tests:

test('mergeArrays is a function', () => {
    expect(typeof mergeArrays).toEqual('function');
  });
  
  test('Combines 5 arrays of numbers without dubplicates', () => {
    expect(mergeArrays([1,2],[2,3],[3,4],[4,5])).toEqual([1,2,3,4,5]);
  });
  
  test('Combines 3 arrays of strings without dubplicates', () => {
    expect(mergeArrays(['a','b','z'],['m','n','a'],['z','y'])).toEqual(['a','b', 'z', 'm', 'n', 'y']);
  });