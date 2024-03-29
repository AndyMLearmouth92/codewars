/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

Starter code:

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
  }
*/

// Solution 1:

function getAverage(marks){
    return Math.floor(marks.reduce((sum, current) => sum + current, 0) / marks.length)
  }

// Solution 2:

function getAverage(marks){
    let total = 0
    for(let i = 0; i < marks.length; i++){
      total += marks[i]
    }
   return Math.floor(total / marks.length)
  }

//   Solution 3:

function getAverage(marks){
    let total = 0
    marks.forEach(item => {
      total += item
    })
    return Math.floor(total / marks.length)
  }
