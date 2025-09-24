let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

// step 3
const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);

  return options[randIdx];
};

// step 4
const drawGame = () => {
  msg.innerText = "Game draw";
  msg.style.backgroundColor = "black"
};

// step 5

const showWinner = (userWin) => {

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "Green"
    }else{
        compScore++;
        comScorePara.innerText = compScore
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red"
    }
}

// step 2
const playgame = (userChoice) => {
  // Generate computer choice
  const compChoice = genComChoice();

  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    }else{
        // rock,paper
        userWin = compChoice === "rock" ? false : true
    }
    showWinner(userWin);
  }

  
};

// Step 1
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
