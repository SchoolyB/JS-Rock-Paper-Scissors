// TODO: need to find bug that causes conditionals to run even when they shouldn't

//  MAIN FUNCTION
function main() {

  // DECLARING COMPINPUT VAR TO USE MATH.RANDOM()
    let compInput = Math.random();
    
  // DECLARING POSSIBLE OPTION FOR USER AND COMP
    let option = [
      "rock",
      "paper",
      "scissors"
    ];
  
    // INITIAL PROMPT AND DECLARING USERINPUT VAR
    let userInput = prompt(`Please select either,
    ${option[0]},
    ${option[1]},
    ${option[2]}`);
    //  CALL BACK TO USER CHOICE
  alert(`You chose ${userInput}`) 
  
    // EQUATING COMP MATH DECISIONS TO GIVEN OPTION
    if (compInput <= .33) {
      compInput = option[0]
    } else if (compInput >= .66) {
      compInput = option[1]
    } else { 
      compInput = option[2]
    }
 
  
    
  // USER ROCK CONDITIONS
    if (userInput && compInput === option[0]) {
      alert(`Both players chose ${option[0]} its a draw`)
    } else if (userInput === option[0] && compInput === option[1]){
      alert(`You chose  ${option[0]}, and the computer chose ${option[1]}...Paper covers rock you lose`)
    } else if (userInput === option[0] && compInput === option[2]) {
      alert(`You chose ${option[0]} and the computer chose ${option[2]}...Rock smashes scissors you win`)
    } 
  
    // USER PAPER CONDITIONS
    if (userInput && compInput === option[1]) {
      alert(`Both players chose ${option[1]} its a draw`)
    } else if (userInput === option[1] && compInput === option[0]){
      alert(`You chose  ${option[1]}, and the computer chose ${option[0]}...Paper covers rock you win`)
    } else if (userInput === option[1] && compInput === option[2]) {
      alert(`You chose ${option[1]} and the computer chose ${option[2]}...Scissors cuts paper you lose`)
    } 
  
    // USER SCISSORS CONDITIONS
    if (userInput && compInput === option[2]) {
      alert(`Both players chose ${option[2]} its a draw`)
    } else if (userInput === option[2] && compInput === option[0]){
      alert(`You chose  ${option[2]}, and the computer chose ${option[0]}...Rock smashes scissors you lose`)
    } else if (userInput === option[2] && compInput === option[1]) {
      alert(`You chose ${option[2]} and the computer chose ${option[1]}...Scissors cuts paper you win`)
    } 
  
  };
  
  main();