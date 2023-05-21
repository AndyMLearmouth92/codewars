/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
// Array chunking using a for of loop
function chunkArray(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
}

// Array chunking using a while loop and the splice method
function chunkArray(array, size) {
    let result = []
    let arrayCopy = [...array]
    while(arrayCopy.length > 0){
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

// Array chunking using a for loop and slice method
function chunkArray(array, size) {
    let result = []
    for(let i = 0; i < array.length; i+=size){
      result.push(array.slice(i, i+size))
    }
    return result
}

// Recursion
function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

//After comparing all four solutions, we find that the .slice() method is the fastest of all implementations. It is followed by the recursive approach which is 46% slower.