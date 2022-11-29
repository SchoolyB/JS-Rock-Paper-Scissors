// !DETERMINES IF THE USER OR COMP WINS OR LOSSES/KEEPS A SCORE
// !ALSO MAKES RED X APPEAR OVER THE LOSER SIDE
  //USER ROCK LOSE CONDITION  
  if (userInput === "rock" && compInput === "paper") {
    const userRockLosses = document.getElementById("user_red_x")
    userRockLosses.style.visibility = "visible"
    compScore = compScore + 1;
  }
  
  //USER ROCK WIN CONDITION 
  if (userInput === "rock" && compInput === "scissors") {
    const userRockWins = document.getElementById("comp_red_x")
    userRockWins.style.visibility = "visible"
    userScore = userScore + 1;
  }
  
  
  //USER PAPER WIN CONDITION
  if (userInput === "paper" && compInput === "rock") {
    const userPaperWins = document.getElementById("comp_red_x")
    userPaperWins.style.visibility = "visible"
    userScore = userScore + 1;
  }
  
  
  //USER PAPER LOSE CONDITION 
  if (userInput === "paper" && compInput === "scissors") {
    const userPaperLoses = document.getElementById("user_red_x")
    userPaperLoses.style.visibility = "visible"
    compScore = compScore + 1;
  }
  
  
  //USER SCISSORS LOSE CONDITION
  if (userInput === "scissors" && compInput === "rock") {
    const userScissorsLoses = document.getElementById("user_red_x")
    userScissorsLoses.style.visibility = "visible"
    compScore = compScore + 1;
  }
  
  
  //USER SCISSORS WIN CONDITION
  if (userInput === "scissors" && compInput === "paper") {
    const userScissorsWins = document.getElementById("comp_red_x")
    userScissorsWins.style.visibility = "visible";
    userScore = userScore + 1;
  }

  
  
  