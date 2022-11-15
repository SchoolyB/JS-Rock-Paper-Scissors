// TODO: BUILD GUI IN HTML/CSS

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