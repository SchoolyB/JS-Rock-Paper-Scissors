function main() {
  let userInput = prompt("choose rock, paper, or scissors"); 
  let  userResult = alert(`You chose ${userInput}`)
  let compInput = Math.random();
  
  if (compInput < .33) { //COMP CHOSE ROCK
    if (userInput === "rock") {
      alert("Both players chose rock its a draw")
    } else if (userInput === "paper") {
        alert("The computer chose rock and you chose paper...Paper covers rock you win")
    } else if (userInput === "scissors") {
        alert("the computer chose rock ... and you chose scissors...rock smashes scissors you lose")
    } else { 
        alert("Please enter a valid response")
      }
  }
  if (compInput === .66) { //COMP CHOSE PAPER
    if (userInput === "rock") {
      alert("the computer chose paper.. and you chose rock...paper covers rock you lose")
    } else if (userInput === "paper") {
        alert("Both players chose paper its a draw")
    } else if (userInput === "scissors") { 
        alert("the computer chose paper..and you chose scissors. scissors cuts paper you win")
    } else {
        alert("Please enter a valid response")
    }
  }
    
  if (compInput > .66) { //COMP CHOSE SCISSORS
    if (userInput === "rock") { 
      alert("The computer chose scissor..and you chose rock...rock smashes scissors you win")
    } else if (userResult === "paper") {
        alert("The computer chose scissors and you chose paper..scissors cuts paper you lose")
    } else if (userInput === "scissors") {
        alert("BOTH PLAYERS CHOSE SCISSORS ITS A DRAW")
    }
    else {
        alert("Please enter a valid response")
    }
  }
    
  else {
    alert("this wasn't supposed to happen");
  }


}

main();
