const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player Selected: ${player}`;
    computerText.textContent = `Computer Selected: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "It's A Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER"
      ? "You Win! You Beat The Computer!"
      : "You Lose! Try Again.";
  } else if (computer == "PAPER") {
    return player == "SCISSORS"
      ? "You Win! You Beat The Computer!"
      : "You Lose! Try Again.";
  } else if (computer == "SCISSORS") {
    return player == "ROCK"
      ? "You Win! You Beat The Computer!"
      : "You Lose! Try Again.";
  }
}
