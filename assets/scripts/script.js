const cpChoice = document.getElementById("computer_choice");
const usChoice = document.getElementById("user_choice");
const gameResult = document.getElementById("result");

const winComputer = document.getElementById("computer_score");
const winUser = document.getElementById("user_score");

const gameViewResult = document.getElementById("box-game_result");

let score = [0, 0];

document.getElementById("hand-rock").addEventListener("click", () => {
  userChoice("rock");
});

document.getElementById("hand-paper").addEventListener("click", () => {
  userChoice("paper");
});

document.getElementById("hand-scissors").addEventListener("click", () => {
  userChoice("scissors");
});

function userChoice(userSelection) {
  let computerSelection = computerChoice();
  usChoice.innerHTML = userSelection;
  if (computerSelection === userSelection) {
    gameResult.innerHTML = `Draw`;
    lookForTheWiner("draw");
  } else if (
    (computerSelection === "rock" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "rock")
  ) {
    gameResult.innerHTML = `You Win!!`;
    score[0]++;
    winUser.innerHTML = score[0];
    lookForTheWiner("win");
  } else {
    score[1]++;
    winComputer.innerHTML = score[1];
    gameResult.innerHTML = `You Loss`;
    lookForTheWiner("lose");
  }
}

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  cpChoice.innerHTML = `${choices[randomChoice]}`;
  return choices[randomChoice];
}

function lookForTheWiner(winner) {
  switch (winner) {
    case "draw":
      gameViewResult.classList.remove("lose");
      gameViewResult.classList.remove("win");
      gameViewResult.classList.add("draw");
      break;
    case "win":
      gameViewResult.classList.remove("lose");
      gameViewResult.classList.remove("draw");
      gameViewResult.classList.add("win");
      break;
    case "lose":
      gameViewResult.classList.remove("draw");
      gameViewResult.classList.remove("win");
      gameViewResult.classList.add("lose");
      break;
  }
}
