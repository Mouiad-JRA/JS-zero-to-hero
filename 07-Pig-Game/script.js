"use strict";

// Select the Element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let score0El = document.getElementById('score--0'); //document.querySelector('#score--0');
let score1El = document.getElementById("score--1");
let diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");

let scores, currentScore, activePlayer, playing;
// Start Conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  btnHold.classList.remove("hidden");
  btnRoll.classList.remove("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
  console.log(player1El.classList)
  console.log(player0El.classList)
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  currentScore = 0;
};
// Roll the dice
btnRoll.addEventListener("click", function () {
  // generate random dice roll and display the dice,
  // check for 1 if true switch else add it and display it
  // if (playing) {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
  // }
});

btnHold.addEventListener("click", function () {
  // Add current score to the active player and
  // check if it equals 100 and finish the game else change the player
  // if (playing) {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    // Finish the Game
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    diceEl.classList.add("hidden");
    btnHold.classList.add("hidden");
    btnRoll.classList.add("hidden");
  } else {
    switchPlayer();
  }
  // }
});

btnNew.addEventListener("click", init);
