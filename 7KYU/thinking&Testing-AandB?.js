/* No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

Starter code:

function testit(a,b){
  return a+b;
}

Test Cases:

describe( "Sample Tests" , () => {
  it( "Test", () => {
    //a+b?
    assert.strictEqual(testit(0,1), 1, "")
    assert.strictEqual(testit(1,2), 3, "")
    assert.strictEqual(testit(10,20), 30, "")
    //a*b?
    assert.strictEqual(testit(1,1), 1, "")
    assert.strictEqual(testit(1,3), 3, "")
    //try "Attempt" find more...
  })
})
*/

// Solution:

const testit = (a, b) => a | b;
