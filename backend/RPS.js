// TODO: BUILD GUI IN HTML/CSS
// TODO: WORK ON FUNCTION THAT SHOWS A IMAGE OF THE USERS CHOICE ON SCREEN WHEN BUTTON IS CLICKED
// TODO: CONTINUE TO WORK ON DISPLAYING IMAGES THAT USER CHOOSES
// TODO: WORK ON FUNCTION THAT SHOWS COMPUTERS CHOICE WHEN IT DECIDES
// TODO: ADD A TIMER THAT APPEARS ON SCREEN
// TODO: ADD A SCOREBOARD AT TOP OF WEBPAGE
// TODO: ADD MORE TODOS......
//IDEA:
//PUT A TIMER IN PROGRAM AND AS IT COUNTS FROM 1 UP TO 3
//IT WILL DISPLAY TEXT ON SCREEN THAT SAYS "ROCK, PAPER, SCISSORS,SHOOT!"
//AS IT DISPLAYS TEXT FOR EACH CHOICE, THE IMAGES OF EACH CHOICE WOULD
//APPEAR BRIEFLY ON SCREEN AND THEN QUICKLY FADE OUT. ONCE THE WORD "SHOOT"
//APPEARS ON SCREEN THE IMAGES OF BOTH THE COMPUTER AND USER SELECTION 
//WILL BE DISPLAYED.....COOL IDEA. GOOD JS PRACTICE  

let userScore = 0  
let compScore = 0


function tell_score() {
alert(`Your score is ${userScore} to the computers ${compScore}`)
}


  function RPS() {
    let compInput = Math.random()
    let userInput = prompt("Please choose either rock paper or scissors")
    

    if (userInput === "rock") {
      userInput = "rock"
    } else if (userInput === "paper") {
      userInput = "paper"
    } else if (userInput === "scissors") {
      userInput = "scissors"
    }

    if (compInput <= .33) {
      compInput = "rock"
    } else if (compInput >= .66) {
      compInput = "paper"
    } else {
      compInput = "scissors"
    }

    if (userInput === compInput) {
      alert("its a draw")
    };


    // USER ROCK INPUT
    if (userInput === "rock" && compInput === "paper") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...paper covers rock you lose`)
      compScore = compScore + 1;
  
    }
  
    if (userInput === "rock" && compInput === "scissors") {
      alert(`You  chose ${userInput} and the computer chose ${compInput}...rock smashes scissors you win!`)
      userScore = userScore + 1;
    }


    //USER PAPER INPUT  
    if (userInput === "paper" && compInput === "rock") {
      alert(`You  chose ${userInput} and the computer chose ${compInput}...paper covers rock you win`)
      userScore = userScore + 1;
    }

    if (userInput === "paper" && compInput === "scissors") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...paper covers scissors you lose`)
      compScore = compScore + 1;
    }
  
  
    //USER SCISSORS INPUT
    if (userInput === "scissors" && compInput === "rock") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...rock smashes scissors you lose`)
      compScore = compScore + 1;
    }
  
    if (userInput === "scissors" && compInput === "paper") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...scissors cuts paper you win`)
      userScore = userScore + 1;
    }

    //ESCAPE SEQUENCE 
    function run_again() {
      let play_again = prompt("Would you like to play again? Enter yes or no")
      if (play_again === "yes" === "YES") {
        RPS();
      }
    }



    tell_score();
    run_again();

}

RPS();


//NOW FOR THE FUN STUFF.....


//FUNCTION TO DISPLAY AN IMAGE OF THE USERS CHOICE ON SCREEN
function display_rock() {
  const img_of_rock = document.getElementById("rock").style.visibility = "visible";
}
//FUNCTION TO DISPLAY AN IMAGE OF THE USERS CHOICE ON SCREEN
function display_paper() {
  const img_of_rock = document.getElementById("paper").style.visibility = "visible";
}
//FUNCTION TO DISPLAY AN IMAGE OF THE USERS CHOICE ON SCREEN
function display_scissors() {
  const img_of_rock = document.getElementById("scissors").style.visibility = "visible";
}
