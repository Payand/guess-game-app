'use strict';
/*
document.querySelector('.message').textContent = 'Correct number!!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '??';
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
*/

// random number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
//put document query textcontent inside function ,class name massage on HTML.
const massageDisplay = function(massage) {
    document.querySelector('.message').textContent = massage;
};
//put document query style inside function ,body tag on HTML and CSS.
const bodyDisplay = function(body) {
    document.querySelector('body').style.backgroundColor = body;
};
//put document query style inside function, class name number on HTML and CSS.
const numberStyle = function(number) {
    document.querySelector('.number').style.width = number;
};
//put document query textContent inside function, class name number on HTML and CSS.
const numberTextContent = function(number) {
    document.querySelector('.number').textContent = number;
};

// define a event handler (click).
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // no number in input box.
    if (!guess) {
        massageDisplay('No input Number ?????');
        document.querySelector('body').style.backgroundColor = '#FF6347';

        // when player wins.
    } else if (guess === secretNumber) {
        massageDisplay('you Guess right ');
        bodyDisplay('#60b347');
        numberStyle('30rem');
        numberTextContent(secretNumber);

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when guess too high or low and highscore.
        // body color changes if you guess high or low.
        //you can uncomment line 59 to 61 and commentout line 51 to 57.
        // in line 59 to 61 ternery function hase been implemented.
    } else if (guess !== secretNumber) {
        if (score > 0) {
            if (guess > secretNumber) {
                massageDisplay('you Guess High!!!!');
                bodyDisplay('#87ceeb');
            } else {
                massageDisplay('you guess low!!!!');
                bodyDisplay('#9b7653');
            }

            //guess > secretNumber ?
            //massageDisplay('you Guess High!!!') :
            // massageDisplay('you guess low !!!!');

            score--;
            document.querySelector('.score').textContent = score;
            // print out message display when you are out of guesses.
            // change display of body to red when you are out of guesses.
        } else {
            massageDisplay('you are out of guess!!!');
            bodyDisplay('#FF0000');
        }
    }
});
// reset game.
document.querySelector('.again').addEventListener('click', function() {
    bodyDisplay('#222');
    numberStyle('15rem');
    massageDisplay('Start guessing...');
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    numberTextContent('?');

    secretNumber = Math.trunc(Math.random() * 20) + 1;
});