//Vars:

const result = document.getElementById("box-game_result");

let computerScore = 0;
let userScore = 0;

//Objet game
let choices_object = {
  rock: {
    rock: "draw",
    scissors: "win",
    paper: "lose",
  },
  paper: {
    rock: "win",
    scissors: "lose",
    paper: "draw",
  },
  scissors: {
    rock: "lose",
    scissors: "draw",
    paper: "win",
  },
};

//Event Listener
document.getElementById("hand-rock").addEventListener("click", () => {
  userClickOn("rock");
});

document.getElementById("hand-paper").addEventListener("click", () => {
  userClickOn("paper");
});

document.getElementById("hand-scissors").addEventListener("click", () => {
  userClickOn("scissors");
});

function userClickOn(select) {
  let choices = ["rock", "paper", "scissors"];
  let randomSelectComputer = Math.floor(Math.random() * 3);
  let computer_choice = choices[randomSelectComputer];

  document.getElementById("user_choice").innerHTML = select;
  document.getElementById("computer_choice").innerHTML = computer_choice;

  switch (choices_object[select][computer_choice]) {
    case "win":
      userScore++;
      whoWin("You Win!!");
      break;
    case "draw":
      whoWin("It's draw");
      break;
    case "lose":
      computerScore++;
      whoWin("You lose");
      break;
  }
  resultDecoration(choices_object[select][computer_choice]);
}

function whoWin(theWinnerIs) {
  document.getElementById("result").innerHTML = theWinnerIs;
  document.getElementById("computer_score").innerHTML = computerScore;
  document.getElementById("user_score").innerHTML = userScore;
}

function resultDecoration(show) {
  switch (show) {
    case "win":
      result.classList.remove("lose");
      result.classList.remove("draw");
      result.classList.add("win");
      break;
    case "lose":
      result.classList.remove("win");
      result.classList.remove("draw");
      result.classList.add("lose");
      break;
    case "draw":
      result.classList.remove("lose");
      result.classList.remove("win");
      result.classList.add("draw");
      break;
  }
}
