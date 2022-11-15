// TODO: FIGURE OUT HOW TO KILL PROGRAM WHEN USER ENTERS NO
// TODO: CONTINUE TO BUILD ON FUNCTION SO USER CAN SEE A SCORE
// TODO: BUILD GUI IN HTML/CSS

let userScore = 0  
let compScore = 0


function play_again() {
  RPS();
}


function tell_score() {
alert(`Your score is ${userScore} to the computers ${compScore}`)
}
function kill() {
  alert("ENDING PROGRAM")

  close();
}

function play_again_prompt() {
  let user_play_again = prompt("would you like to play again? enter yes or no")
  if (user_play_again === "yes" || "Y" || "y" || "YES" || "yea" || "yea" || "yep" || "yessir") {
    RPS();
  } else if (play_again === "no" || "N" || "n" || "nope" || "NO" || "nah") {
    score();
    close();
  };

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
      compScore + 1
    }
  
    if (userInput === "rock" && compInput === "scissors") {
      alert(`You  chose ${userInput} and the computer chose ${compInput}...rock smashes scissors you win!`)
      userScore + 1
    }


    //USER PAPER INPUT  
    if (userInput === "paper" && compInput === "rock") {
      alert(`You  chose ${userInput} and the computer chose ${compInput}...paper covers rock you win`)
      userScore + 1
    }

    if (userInput === "paper" && compInput === "scissors") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...paper covers rock you lose`)
      compScore + 1
    }
  
  
    //USER SCISSORS INPUT
    if (userInput === "scissors" && compInput === "rock") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...rock smashes scissors you lose`)
      compScore + 1
    }
  
    if (userInput === "scissors" && compInput === "paper") {
      alert(`You chose ${userInput} and the computer chose ${compInput}...scissors cuts paper you win`)
      userScore + 1
    }
  
    play_again_prompt();

}

RPS();
