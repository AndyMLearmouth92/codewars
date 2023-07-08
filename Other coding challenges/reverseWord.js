//Given a string of characters as input, write a function that returns it with the characters reversed. No methods

// Solution 1:

function reverseWord(word){
    let reversedWord = ''
    for(let i = word.length-1; i > -1; i--){
        reversedWord += word[i]
    }
    console.log(reversedWord)
}

// Solution 2:

function reverseWord(word){
    let reversedWord = ''
    for(let i = 0; i < word.length; i++){
       reversedWord = word[i] + reversedWord
    }
    console.log(reversedWord)
}