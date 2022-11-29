

// button functionality and console logging
function userChooseRock() {
  userChoice = "rock"
  console.log(`the user chose ${userChoice}`)
  }
function userChoosePaper() {
  userChoice = "paper"
  console.log(`the user chose ${userChoice}`)
}
function userChooseScissors() {
  userChoice = "scissors"
  console.log(`the user chose ${userChoice}`)
}
let main = () => {
  let userScore = 0;
  let compScore = 0;
  let userChoice = ""
  let compChoice = Math.random()


// determining computer choice
  if (compChoice <= .33) {
    compChoice = "rock"
    console.log(`the computer chose ${compChoice}`)
  } else if (compChoice >= .66) {
    compChoice = "paper"
    console.log(`the computer chose ${compChoice}`)
  } else {
    compChoice = "scissors"
    console.log(`the computer chose ${compChoice}`)    
  }



  conditions = () => {
    if (userChoice === compChoice) {
      console.log("its a draw")
    }
    if (userChoice === "rock" && compChoice === "paper") {
      console.log("you lose")
      compScore = compScore + 1
    }
    if (userChoice === "rock" && compChoice === "scissors") {
      console.log("you win")
      userScore = userScore + 1
    }
    if (userChoice === "paper" && compChoice === "scissors") {
      console.log("you lose")
      compScore = compScore + 1
    }
    if (userChoice === "paper" && compChoice === "rock") {
      console.log("you win")
      userScore = userScore + 1
    }
    if (userChoice === "scissors" && compChoice === "paper") {
      console.log("you win")
      userScore = userScore + 1
    }
    if (userChoice === "scissors" && compChoice === "rock") {
      console.log("you lose")
      compScore = compScore + 1
    }
  }
  showScore = () => {
    console.log(`the score is now ${userScore} to ${compScore}`)
  }
  conditions();
  setTimeout(showScore,10000)  

}


main();
