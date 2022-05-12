"use strict";

let secretNumber = generateNumber();
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // String 2 Number
  // No Input
  if (!guess) {
    document.querySelector(".message").textContent =
      "You Didn't Enter a Number";
    // Winner
  } else if (guess === secretNumber) {
    changeLogic(
      "Congrats, You Choose The Correct Number!",
      score,
      secretNumber,
      guess,
      "green",
      "30rem"
    );
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = 'red';
      document.getElementById("stop").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = generateNumber();
  score = 20;
  changeLogic("Start guessing...", score, "?", "", "black", "15rem");
});

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function changeLogic(
  message,
  score,
  numberText,
  guess,
  background,
  numberStyle
) {
  document.querySelector(".message").textContent = message;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = numberText;
  document.querySelector(".guess").value = guess;
  document.querySelector("body").style.backgroundColor = background;
  document.querySelector(".number").style.width = numberStyle;
}
