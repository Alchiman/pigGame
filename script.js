'use strict';
//selecting elements
const score1El = document.getElementById('score--1');
const score0El = document.getElementById('score--0');
const diceEl = document.querySelector('.dice');
const buttonNewEl = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality

buttonRoll.addEventListener('click', () => {
  // generate randome number
  const dice = Math.floor(Math.random() * 6) + 1;
  //display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
});
