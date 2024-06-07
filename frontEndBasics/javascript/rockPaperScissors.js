function playRockPaperScissors() {
  let playerScore = 0;
  let computerScore = 0;
  let outcome = {
    "rockpaper": 0, 
    "rockscissors": 1, 
    "scissorsrock": 0, 
    "scissorspaper": 1, 
    "paperscissors": 0,
    "paperrock": 1
  };

  do {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    if ((humanChoice == computerChoice)) {
      console.log("Tie Round!")
      continue;
    } else if (!["rock", "paper", "scissors"].includes(humanChoice)) {
      console.log("You must have mistyped.")
    } else if (outcome[humanChoice + computerChoice] == 1) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);
    console.log(`Human: ${playerScore}\n\nComputer: ${computerScore}`);
  } while(playerScore < 3 && computerScore < 3);

  if (playerScore >= 3) {
    console.log("Player Wins!")
  } else if (computerScore >= 3) {
    console.log("Computer Wins!")
  }
}

function getHumanChoice() {
  return prompt("rock, paper, or scissors?");
}

function getComputerChoice() {
  let choice = Math.round(Math.random() * 100) / 100;
  if(choice <= 0.33) {
    return "rock";
  } else if (choice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
};

