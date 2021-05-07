'use strict';

// Selectors
const player0Element = document.querySelector('.player--0');

const player1Element = document.querySelector('.player--1');

const score0Element = document.querySelector('#score--0');

const score1Element = document.getElementById('score--1');

const current0Element = document.getElementById('current--0');

const current1Element = document.getElementById('current--1');

// Declare vars
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;

// Starting values
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');};

// Dice Rolling
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
    //2 Display the dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;

    //3 Check for 1
    if (dice !== 1) {
      // Add to current score
        currentScore += dice;
        document.getElementById(
            `current--${activePlayer}`
        ).textContent = currentScore;
        } else {
      // Switch player
        switchPlayer();
    }
  }});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1 Add the current score to active player score
        scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent =
          scores[activePlayer];
    // 2 End game if player score is 100 or larger
        if (scores[activePlayer] >= 100) {
        playing = false;
        diceElement.classList.add('hidden');

        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        } else {
      // Switch  player
          switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);