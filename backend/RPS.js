// TODO: BUILD GUI IN HTML/CSS
// TODO: WORK ON FUNCTION THAT SHOWS A IMAGE OF THE USERS CHOICE ON SCREEN WHEN BUTTON IS CLICKED
// TODO: CONTINUE TO WORK ON DISPLAYING IMAGES THAT USER CHOOSES
// TODO: WORK ON FUNCTION THAT SHOWS COMPUTERS CHOICE WHEN IT DECIDES
// TODO: ADD A TIMER THAT APPEARS ON SCREEN
// TODO: ADD A SCOREBOARD AT TOP OF WEBPAGE
// TODO: ADD BUTTON TO START THE GAME WHICH RUNS RPS() FUNCTION
// TODO: MAKE BACKGROUND FOR IMAGES TRANSPARENT...LOOK INTO SVG FILE TYPES INSTEAD OF PNG
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

    //ESTABLISHING A DRAW CONDITION
    if (userInput === compInput) {
      alert("its a draw")
    };


    //USER ROCK LOSE CONDITION
    if (userInput === "rock" && compInput === "paper") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...paper covers rock you lose`)
      compScore = compScore + 1;
    }

    //USER ROCK WIN CONDITION 
    if (userInput === "rock" && compInput === "scissors") {
      alert(`You  chose ${userInput} and the computer chose ${compInput}...rock smashes scissors you win!`)
      userScore = userScore + 1;
    }

    //USER PAPER WIN CONDITION  
    if (userInput === "paper" && compInput === "rock") {
      alert(`You  chose ${userInput} and the computer chose ${compInput}...paper covers rock you win`)
      userScore = userScore + 1;
    }

    //USER PAPER LOSE CONDITION 
    if (userInput === "paper" && compInput === "scissors") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...paper covers scissors you lose`)
      compScore = compScore + 1;
    }

    //USER SCISSORS LOSE CONDITION
    if (userInput === "scissors" && compInput === "rock") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...rock smashes scissors you lose`)
      compScore = compScore + 1;
    }   
    //USER SCISSORS WIN CONDITION
    if (userInput === "scissors" && compInput === "paper") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...scissors cuts paper you win`)
      userScore = userScore + 1;
    }
    
    //MAIN FUNCTION ESCAPE SEQUENCE 
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




function hide_rock() {
  let x = document.getElementById("rock-hand");
  x.style.opacity = 0;
}

function hide_paper() {
  let y = document.getElementById("paper-hand");
  y.style.opacity = 0;
}

function hide_scissors() {
  let z = document.getElementById("scissors-hand");
  z.style.opacity = 0;
}

hide_rock();