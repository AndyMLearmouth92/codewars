/*
write a function that takes in a number (n) and console logs 1 to n, if the number is a multiple of 3 you should log 'Fizz, if the number is a multiple of 5 you should log 'Buzz' and if the number is a multiple of both 3 and 5 you should log 'Fizzbuzz'
*/

function fizzBuzz(num){
    for(let i = 1; i < num; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('Fizz Buzz')
        }else if(i % 3 == 0){
            console.log('Fizz')
        }else if(i % 5 == 0){
            console.log('Buzz')
        }else{
            console.log('num')
        }
    }
}

fizzBuzz(100)