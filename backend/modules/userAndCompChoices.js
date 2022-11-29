// !USER CAN COMPUTER CHOICES THE USERCHOOSESROCK/PAPER/SCISSORS FUNCTIONS ARE BOUND TO BUTTONS IN THE INDEX.HTML


// !START IF MODULE ONE...DECLARE SCORE VARS IN GLOBAL SCOPE
let userScore = 0;
let compScore = 0;
let userInput = ""

// BOUND TO THE ROCK BUTTON IN THE HTML. MAKES THE USERS CHOICE EQUAL "ROCK", LOGS THAT CHOICE
// ALSO MAKES THE "ROCK" IMAGE ON THE USERS SIDE APPEAR ON SCREEN 
userChoosesRock = () => {
  userInput = "rock"
  const userRock = document.getElementById("user_rock_hand");
  console.log(`user chose ${userInput}`)
  userRock.style.visibility = "visible";
}

// BOUND TO THE PAPER BUTTON IN THE HTML. MAKES THE USERS CHOICE EQUAL "PAPER", LOGS THAT CHOICE
// ALSO MAKES THE "PAPER" IMAGE ON THE USERS SIDE APPEAR ON SCREEN 
userChoosesPaper = () => {
  userInput = "paper"
  const userPaper = document.getElementById("user_paper_hand");
  console.log(`user chose ${userInput}`)
  userPaper.style.visibility = "visible";
}

// BOUND TO THE SCISSORS BUTTON IN THE HTML. MAKES THE USERS CHOICE EQUAL "SCISSORS", LOGS THAT CHOICE
// ALSO MAKES THE "SCISSORS" IMAGE ON THE USERS SIDE APPEAR ON SCREEN 
userChoosesScissors = () => {
  userInput = "scissors"
  const userScissors = document.getElementById("user_scissors_hand");
  console.log(`user chose ${userInput}`)
  userScissors.style.visibility = "visible";
}


// USES THE MATH.RANDOM() FUNCTION TO HAVE THE COMP TO MAKE A CHOICE, MAKES MAKES WHICHEVER CHOICE
// THE COMP MAKES VISIBLE ON SCREEN. LOGS THE CHOICE THE COMP MAKES 
compInput = Math.random();

compChooses = () => {
  if (compInput <= .33) {
    compInput = "rock"
    const compRock = document.getElementById("comp_rock_hand")
    compRock.style.visibility = "visible"
    console.log(`comp chose ${compInput}`)
  } else if (compInput >= .66) {
    compInput = "paper"
    const compPaper = document.getElementById("comp_paper_hand")
    compPaper.style.visibility = "visible"
    console.log(`comp chose ${compInput}`)
  } else {
    compInput = "scissors"
    const compScissors = document.getElementById("comp_scissors_hand")
    compScissors.style.visibility = "visible"
    console.log(`comp chose ${compInput}`)
    
  }
}

export {compChooses,userScore,compScore}