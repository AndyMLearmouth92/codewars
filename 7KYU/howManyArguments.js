// Create a function called args_count that returns the number of arguments provided.

// Solution 1:

function args_count (args){
  return arguments.length
}

// Solution 2:

const args_count = (...args) => args.length
