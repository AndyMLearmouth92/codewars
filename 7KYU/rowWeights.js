/*Scenario

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Starter code:

function rowWeights(array){
    //your code here
  }
  */

//   Solution 1:

  function rowWeights(array){
    let team1 = array.filter((e,i) => i % 2 !== 0).reduce((sum, current) => sum + current, 0)
    let team2 = array.filter((e,i) => i % 2 === 0).reduce((sum, current) => sum + current, 0)
    return [team2, team1]
  }

//   Solution 2:

  function rowWeights(array){
    let team1 = 0
    let team2 = 0
    for(let i = 0; i<array.length; i++){
      if(i % 2 !== 0){
        team1 += array[i]
      }else{
        team2 += array[i]
      }
    }
    return [team2, team1]
  }
