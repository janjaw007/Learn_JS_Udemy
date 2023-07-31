'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackroundColor = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};
const changeWidthNumber = function (value) {
  document.querySelector('.number').style.width = value;
};

let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number!';
    displayMessage('🚫 No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    changeBackroundColor('#60b347');
    changeWidthNumber('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is too high & low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
  //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     displayScore() = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     displayScore() = 0;
  //   }
  // }
});

//Again reset
document.querySelector('.again').addEventListener('click', function () {
  //set score to zero
  score = 20;
  //random number
  secretNumber = randomNumber();
  console.log(secretNumber);
  //set message to default
  displayMessage('Start guessing...');
  displayScore(score);
  //set value of guess to empty
  displayNumber('?');
  document.querySelector('.guess').value = '';
  //set css to default
  changeBackroundColor('#222');
  changeWidthNumber('15rem');
});
