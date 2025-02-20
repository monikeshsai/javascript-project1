'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCard = 20;
let highScore = 0;
document.querySelector('.score').textContent = scoreCard;
//document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    displayMessage('Correct answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (scoreCard > highScore) {
      highScore = scoreCard;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (scoreCard > 1) {
      scoreCard--;
      document.querySelector('.score').textContent = scoreCard;
      displayMessage(
        guess > secretNumber ? 'too Higher Guess' : 'too lower Guess'
      );
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
  // } else if (guess > secretNumber) {
  //   if (scoreCard > 1) {
  //     scoreCard--;
  //     document.querySelector('.score').textContent = scoreCard;
  //     document.querySelector('.message').textContent = 'too Higher Guess';
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // } else if (guess < secretNumber) {
  //   if (scoreCard > 1) {
  //     scoreCard--;
  //     document.querySelector('.score').textContent = scoreCard;
  //     document.querySelector('.message').textContent = 'too lower Guess';
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  scoreCard = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scoreCard;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
