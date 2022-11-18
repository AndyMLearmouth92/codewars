/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

Starter code:

function printerError(s) {
    // your code
}

*/

// Solution 1:

function printerError(s) {
  if(s.match(/[n-zN-Z]/g) == null){
    return `0/${s.length}`
  }
    else{
      return s.match(/[n-zN-Z]/g).length.toString() + `/${s.length}`
  }
}

// Solution 2:

const printerError = s => (s.match(/[n-zN-Z]/g) || []).length + '/' + s.length;

// Solution 3:

function printerError(s) {
  let numberOfErrors = 0
   for(let i = 0; i < s.length; i++){
     if(s[i] > 'm'){
       numberOfErrors += 1
     }
   }
  return numberOfErrors + '/'+s.length
}

// Solution 4:

function printerError(s) {
  let splitArray = s.split('')
  let numberOfErrors = []
   for(let i = 0; i < splitArray.length; i++){
     if(splitArray[i] > 'm'){
       numberOfErrors.push(splitArray[i])
     }
   }
  return numberOfErrors.length + '/'+s.length
}

