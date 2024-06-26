/* Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

"Sky scra per" -> "Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"

Starter code:

function ghostBusters(building) {

}
*/

// Solution 1:

const ghostBusters = (building) => {
  return /\s/.test(building)
    ? building.replace(/\s+/g, "")
    : "You just wanted my autograph didn't you?";
};

// Solution 2:

const ghostBusters = (building) =>
  building.includes(" ")
    ? building.split(" ").join("")
    : "You just wanted my autograph didn't you?";
