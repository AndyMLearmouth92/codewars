/* Welcome to the Codewars Bar!

Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples

"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

Starter code:

function hydrate(s) {
  // your code here
}
*/

// Solution 1:

function hydrate(s) {
    let sumOfDrinks = s.match(/\d+/g).reduce((sum, current) => Number(sum) + Number(current), 0);
    return sumOfDrinks > 1 ? `${sumOfDrinks} glasses of water` : `${sumOfDrinks} glass of water`;
  }

// Solution 2:

function hydrate(s) {
  let sumOfDrinks = s.split(' ').filter(e => parseInt(e)).reduce((sum, current) => Number(sum) + Number(current), 0)
  return sumOfDrinks > 1 ? `${sumOfDrinks} glasses of water` : `1 glass of water`
}
  