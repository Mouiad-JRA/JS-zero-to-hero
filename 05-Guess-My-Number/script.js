'use strict';

/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13 ;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
*/
const secretNumber = Math.trunc(Math.random()*20)+1;
let score =  20 ;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener(
    'click' , function (){
            const guess = Number(document.querySelector('.guess').value);  // String 2 Number
        if (!guess){
            document.querySelector('.message').textContent='You Didn\'t Enter a Number'
        } else if( guess === secretNumber){
            document.querySelector('.message').textContent = 'Congrats, You Choose The Correct Number!';
        } else if (guess > secretNumber){
            if (score >1)
            {
                document.querySelector('.message').textContent = 'Too High!';
                score -= 1;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'Game Over';
                document.querySelector('.score').textContent = 0;
            }
        } else if (guess < secretNumber){
            if (score >1){
                document.querySelector('.message').textContent = 'Too Low!';
                score -= 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'Game Over';
                document.querySelector('.score').textContent = 0;
            }
        }
    });