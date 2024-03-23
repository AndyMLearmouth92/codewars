/* Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

Starter code:

function planeSeat(a){

}
*/

// Solution:

const planeSeat = (a) => {
  const letter = a.match(/[a-zA-Z]+/g);
  const num = Number(a.match(/\d+/g));
  if (num < 21 && (letter == "A" || letter == "B" || letter == "C")) {
    return "Front-Left";
  } else if (num < 21 && (letter == "D" || letter == "E" || letter == "F")) {
    return "Front-Middle";
  } else if (num < 21 && (letter == "G" || letter == "H" || letter == "K")) {
    return "Front-Right";
  } else if (
    num > 20 &&
    num < 41 &&
    (letter == "A" || letter == "B" || letter == "C")
  ) {
    return "Middle-Left";
  } else if (
    num > 20 &&
    num < 41 &&
    (letter == "D" || letter == "E" || letter == "F")
  ) {
    return "Middle-Middle";
  } else if (
    num > 20 &&
    num < 41 &&
    (letter == "G" || letter == "H" || letter == "K")
  ) {
    return "Middle-Right";
  } else if (
    num > 40 &&
    num < 61 &&
    (letter == "A" || letter == "B" || letter == "C")
  ) {
    return "Back-Left";
  } else if (
    num > 40 &&
    num < 61 &&
    (letter == "D" || letter == "E" || letter == "F")
  ) {
    return "Back-Middle";
  } else if (
    num > 40 &&
    num < 61 &&
    (letter == "G" || letter == "H" || letter == "K")
  ) {
    return "Back-Right";
  } else {
    return "No Seat!!";
  }
};

// Solution 2:

const planeSeat = (a) => {
  const letter = a[a.length - 1];
  const num = parseInt(a);
  if (num > 60 || letter == "I" || letter == "J") {
    return "No Seat!!";
  }
  return `${num > 20 ? (num > 40 ? "Back-" : "Middle-") : "Front-"}${
    letter > "C" ? (letter > "F" ? "Right" : "Middle") : "Left"
  }`;
};
