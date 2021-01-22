'use strict';
/*
document.querySelector('.message').textContent = 'Correct number!!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '??';
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // no number in input box
    if (!guess) {
        document.querySelector('.message').textContent = 'NO input Number!!!';
        document.querySelector('body').style.backgroundColor = '#FF6347';
        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'you Guess right ';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess too high
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('body').style.backgroundColor = '#bfefff';
            document.querySelector('main').style.color = 'Black';
            document.querySelector('body').style.color = 'Black';

            document.querySelector('.message').textContent = 'you Guess High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the game!!!';
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
        // when guess to low
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('body').style.backgroundColor = '#A52A2A';
            document.querySelector('.message').textContent = 'you Guess low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the game!!!';
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
    }
});
// reset game.
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});