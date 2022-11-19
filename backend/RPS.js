// TODO: BUILD GUI IN HTML/CSS
// TODO: WORK ON FUNCTION THAT SHOWS A IMAGE OF THE USERS CHOICE ON SCREEN WHEN BUTTON IS CLICKED
// TODO: CONTINUE TO WORK ON DISPLAYING IMAGES THAT USER CHOOSES
// TODO: WORK ON FUNCTION THAT SHOWS COMPUTERS CHOICE WHEN IT DECIDES
// TODO: ADD A TIMER THAT APPEARS ON SCREEN
// TODO: ADD A SCOREBOARD AT TOP OF WEBPAGE
// TODO: ADD BUTTON TO START THE GAME WHICH RUNS main() FUNCTION
// TODO: MAKE BACKGROUND FOR IMAGES TRANSPARENT...LOOK INTO SVG FILE TYPES INSTEAD OF PNG
// TODO: BUILD A NEW run_again() FUNCTION
// TODO: ADD MORE TODOS......

//IDEA:
//PUT A TIMER IN PROGRAM AND AS IT COUNTS FROM 1 UP TO 3
//IT WILL DISPLAY TEXT ON SCREEN THAT SAYS "ROCK, PAPER, SCISSORS,SHOOT!"
//AS IT DISPLAYS TEXT FOR EACH CHOICE, THE IMAGES OF EACH CHOICE WOULD
//APPEAR BRIEFLY ON SCREEN AND THEN QUICKLY FADE OUT. ONCE THE WORD "SHOOT"
//APPEARS ON SCREEN THE IMAGES OF BOTH THE COMPUTER AND USER SELECTION
//WILL BE DISPLAYED.....COOL IDEA. GOOD JS PRACTICE



import { userInput, compInput } from "../backend/selections.js"

let score = {
  userScore : 0,
  compScore : 0
}

function tell_score() {
alert(`Your score is ${score.userScore} to the computers ${score.compScore}`)
}

function main() {
    if (compInput <= .33) {
      compInput = "rock"
    } else if (compInput >= .66) {
      compInput = "paper"
    } else {
      compInput = "scissors"
    }

    //ESTABLISHING A DRAW CONDITION
    if (userInput === compInput) {
      document.getElementById("tie").style.opacity = 1;
    }

    //USER ROCK LOSE CONDITION
    if (userInput === "rock" && compInput === "paper") {
      document.getElementById("rock_hand").style.opacity = 1;
      document.getElementById("paper_hand").style.opacity = 1;
      document.getElementById("user_red_x").style.opacity = 1; 
      compScore = compScore + 1;
    }

    //USER ROCK WIN CONDITION 
  if (userInput === "rock" && compInput === "scissors") {
    document.getElementById("rock_hand").style.opacity = 1;
    document.getElementById("scissors_hand").style.opacity = 1;
    document.getElementById("comp_red_x").style.opacity = 1;
      userScore = userScore + 1;
    }

    //USER PAPER WIN CONDITION  
  if (userInput === "paper" && compInput === "rock") {
    document.getElementById("paper_hand").style.opacity = 1;
    document.getElementById("rock_hand").style.opacity = 1;
    document.getElementById("comp_red_x").style.opacity = 1;
      userScore = userScore + 1;
    }

    //USER PAPER LOSE CONDITION 
  if (userInput === "paper" && compInput === "scissors") {
    document.getElementById("paper_hand").style.opacity = 1;
    document.getElementById("scissor_hand").style.opacity = 1;
    document.getElementById("user_red_x").style.opacity = 1;
      compScore = compScore + 1;
    }

    //USER SCISSORS LOSE CONDITION
  if (userInput === "scissors" && compInput === "rock") {
    document.getElementById("scissors_hand").style.opacity = 1;
    document.getElementById("rock_hand").style.opacity = 1;
    document.getElementById("red_red_x").style.opacity = 1;
      compScore = compScore + 1;
    }   
    //USER SCISSORS WIN CONDITION
  if (userInput === "scissors" && compInput === "paper") {
    document.getElementById("scissors_hand").style.opacity = 1;
    document.getElementById("paper_hand").style.opacity = 1;
    document.getElementById("comp_red_x").style.opacity = 1;
      userScore = userScore + 1;
    }
    
    
    tell_score();

}

//NOW FOR THE FUN STUFF.....



// EXPORTING FUNCTIONS TO MODULE FILES
export {score };