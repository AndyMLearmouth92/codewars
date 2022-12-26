/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

Starter code:

function greet (name, owner) {
    // Add code here
  }

  */

//   Solution 1:

function greet (name, owner) {
    if(name == owner){
      return `Hello boss`
    }else{
      return 'Hello guest'
    }
  }
  