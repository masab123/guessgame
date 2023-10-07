'use strict';
const min = 1;
const max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
let checkScore = 20;
let highscore = 0;
//const unMask = document.querySelector('.number');

const messageChange = document.querySelector('.message');

const check = document.querySelector('.check');
console.log(randomNum);
check.addEventListener('click', function () {
  const actualValue = Number(document.querySelector('.guess').value);
  if (!actualValue) {
    messageChange.textContent = 'Please Enter correct Value';
  } else if (actualValue === randomNum) {
    messageChange.textContent = 'You Won';
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#355E3B';
    document.querySelector('.number').style.width = '30rem';
    if (checkScore > highscore) {
      highscore = checkScore;
      document.querySelector('.highscore').textContent = highscore;
      console.log(highscore);
    }
  } else if (actualValue !== randomNum) {
    if (checkScore > 1) {
      messageChange.textContent =
        actualValue > randomNum ? 'Too High' : 'Too Low';
      checkScore--;
      document.querySelector('.score').textContent = checkScore;
    } else {
      messageChange.textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.btn').addEventListener('click', function () {
  checkScore = 20;
  document.querySelector('.score').textContent = checkScore;
  messageChange.textContent = 'start guessing...';
  randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});
