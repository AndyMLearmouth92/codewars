/* Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"

Starter code:

function evenOrOdd(str) {

}
*/

// Solution:

function evenOrOdd(str) {
  let input = str.split("");
  let oddSum = input
    .filter((e, i) => e % 2 !== 0)
    .reduce((sum, current) => Number(sum) + Number(current), 0);
  let evenSum = input
    .filter((e, i) => e % 2 === 0)
    .reduce((sum, current) => Number(sum) + Number(current), 0);
  if (oddSum > evenSum) {
    return "Odd is greater than Even";
  } else if (evenSum > oddSum) {
    return "Even is greater than Odd";
  } else {
    return "Even and Odd are the same";
  }
}
