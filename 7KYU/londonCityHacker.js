/* You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

Starter code:

function londonCityHacker(journey) {
  //code me up baby!
}

*/

// Solution 1:

function londonCityHacker(journey) {
  let price = 0
  for(let i = 0; i < journey.length; i++){
    if(journey[i] === null){
      price = 0.00
    }else if(journey[i] === journey[i].toString()){
      price += 2.40
    }else{
      price += 1.50
      if(typeof journey[i+1] === 'number'){
        i++
      }
    }
  }
  return `£${price.toFixed(2)}`
}
