/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

Starter code:

function alphabetPosition(text) {
  return text;
}

*/

// Solution 1:

function alphabetPosition(text) {
  let result = "";
  for (var i = 0; i < text.length; i++){
    let code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }
  return result.slice(0, result.length-1);
}

// Solution 2:

function alphabetPosition(text) {
  let splitText = text.toLowerCase().split('')
  let posOfAlphabet = []
  for(let i = 0; i < text.length; i++){
    if(splitText[i] === 'a'){
      posOfAlphabet.push(1)
    }else if(splitText[i] === 'b'){
      posOfAlphabet.push(2)
    }else if(splitText[i] === 'c'){
      posOfAlphabet.push(3)
    }else if(splitText[i] === 'd'){
      posOfAlphabet.push(4)
    }else if(splitText[i] === 'e'){
      posOfAlphabet.push(5)
    }else if(splitText[i] === 'f'){
      posOfAlphabet.push(6)
    }else if(splitText[i] === 'g'){
      posOfAlphabet.push(7)
    }else if(splitText[i] === 'h'){
      posOfAlphabet.push(8)
    }else if(splitText[i] === 'i'){
      posOfAlphabet.push(9)
    }else if(splitText[i] === 'j'){
      posOfAlphabet.push(10)
    }else if(splitText[i] === 'k'){
      posOfAlphabet.push(11)
    }else if(splitText[i] === 'l'){
      posOfAlphabet.push(12)
    }else if(splitText[i] === 'm'){
      posOfAlphabet.push(13)
    }else if(splitText[i] === 'n'){
      posOfAlphabet.push(14)
    }else if(splitText[i] === 'o'){
      posOfAlphabet.push(15)
    }else if(splitText[i] === 'p'){
      posOfAlphabet.push(16)
    }else if(splitText[i] === 'q'){
      posOfAlphabet.push(17)
    }else if(splitText[i] === 'r'){
      posOfAlphabet.push(18)
    }else if(splitText[i] === 's'){
      posOfAlphabet.push(19)
    }else if(splitText[i] === 't'){
      posOfAlphabet.push(20)
    }else if(splitText[i] === 'u'){
      posOfAlphabet.push(21)
    }else if(splitText[i] === 'v'){
      posOfAlphabet.push(22)
    }else if(splitText[i] === 'w'){
      posOfAlphabet.push(23)
    }else if(splitText[i] === 'x'){
      posOfAlphabet.push(24)
    }else if(splitText[i] === 'y'){
      posOfAlphabet.push(25)
    }else if(splitText[i] === 'z'){
      posOfAlphabet.push(26)
    }
  }
  return posOfAlphabet.join(" ")
}
