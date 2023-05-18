/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
    let count = 0
    if(stringA.length === stringB.length){
      for(let i = 0; i < stringA.length; i++){
        if(stringA[i].toLowerCase() !== stringB[i].toLowerCase()){
            count++
        }
      }
    }else{
      return 'Strings are not the same length'
    }
    return count
}

// Tests:

test('hammingDistance is a function', () => {
    expect(typeof hammingDistance).toEqual('function')
  })
  
  test('returns the hamming distance for letters', () => {
    expect(hammingDistance('river', 'rover')).toEqual(1)
  })
  
  test('returns the hamming distance for numbers', () => {
    expect(hammingDistance('1011101', '1001001')).toEqual(2)
  })
  
  test('returns the hamming distance for letters', () => {
    expect(hammingDistance('karolin', 'kerstin')).toEqual(3)
  })
  
  test('returns the hamming distance for letters', () => {
    expect(hammingDistance('drummer', 'dresser')).toEqual(3)
  })