'use strict';

// 1. generate random number between 1 and 20
// 2. Store that number under guess variable.
// 3. Have user input a number under number variable.
// 4. Tell user if their guess is too high or too low or correct. Display message under message variable.
// 5. Score goes down by 1 every time user guesses incorrectly.
// 6. Goal is to record highscore.
// 7. User can hit again button to try and get a better highscore.

// query selectors

let number = document.querySelector('.number');
let message = document.querySelector('.message');
let againBtn = document.querySelector('.again');
let checkBtn = document.querySelector('.check');
let score = document.querySelector('.score');
let guessGrab = document.querySelector('.guess');
let highscore = document.querySelector('.highscore');
let h1 = document.querySelector('h1');

// random number

let random = Math.ceil(Math.random() * 20);
console.log(random);

// game logic

checkBtn.addEventListener('click', function () {
  let guess = Number(guessGrab.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.innerText = 'Enter a number!';
  }
  if (guess === 0 || guess > 20) {
    message.innerText = `Pick a number between 1 and 20!`;
  } else if (guess === random) {
    message.innerText = '🥳 Correct!';
    message.style.color = 'white';
    number.innerText = random;
    document.body.style.backgroundColor = 'green';
    h1.innerText = `You're the big winner!!!!`;
    if (highscore.innerText < score.innerText) {
      highscore.innerText = score.innerText;
    }
  } else if (guess < random) {
    if (score.innerText > 1) {
      message.innerText = `${guess} is too low!\n Try again!`;
      message.style.color = "red"
      score.innerText -= 1;
      document.querySelector('.guess').value = ''
    } else {
      message.innerText = `😢 You lost the game!`;
      score.innerText = 0;
    }
  } else if (guess > random) {
    if (score.innerText > 1) {
      message.innerText = `${guess} is too high!\nTry again!`;
      message.style.color = "red"

      score.innerText -= 1;
      document.querySelector('.guess').value = ''
    } else {
      message.innerText = `😢 You lost the game!`;
      score.innerText = 0;
    }
  }
});

// again button to start a new game 

againBtn.addEventListener('click', function () {
  random = Math.ceil(Math.random() * 20);
  console.log(random);
  number.innerText = '?';
  score.innerText = 20;
  message.innerText = 'Start guessing...';
  message.style.color = "white"
  h1.innerText = 'Guess My Number!';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = ''
});
