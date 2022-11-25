// !START IF MODULE ONE...DECLARE SCORE VARS IN GLOBAL SCOPE
let userScore = 0;
let compScore = 0;
let userInput = ""
// !END OF MODULE ONE


// !START OF MODULE TWO...SELECTION AREA HIDE IMAGES USING JS RATHER THAN CSS
// TODO: need to rename vars
hide_images_on_load = () => {
  
  const a = document.getElementById("rock_hand");
  a.style.visibility = "hidden";

  //hides paper
  const b = document.getElementById("paper_hand");
  b.style.visibility = "hidden";

  //hides scissors
  const c = document.getElementById("scissors_hand");
  c.style.visibility = "hidden";

  //hides shoot
  const d = document.getElementById("shoot")
  d.style.visibility = "hidden";

  //hides user red x
  const e = document.getElementById("user_red_x")
  e.style.visibility = "hidden";

  //hides comp red x
  const f = document.getElementById("comp_red_x")
  f.style.visibility = "hidden";

  //hides comp tie
  const g = document.getElementById("tie_game")
  g.style.visibility = "hidden";

  //hides the hand div on load
  const h = document.getElementById("hand_container")
  h.style.visibility = "hidden";
  
  const i = document.getElementById("user_rock_hand")
  i.style.visibility = "hidden";

  const j = document.getElementById("user_paper_hand")
  j.style.visibility = "hidden";
  
  const k = document.getElementById("user_scissors_hand")
  k.style.visibility = "hidden";
  
  const l = document.getElementById("comp_rock_hand")
  l.style.visibility = "hidden";
  
  const m = document.getElementById("comp_paper_hand")
  m.style.visibility = "hidden";
  
  const n = document.getElementById("comp_scissors_hand")
  n.style.visibility = "hidden";
  
  const o = document.getElementById("middle_section_container")
  o.style.visibility = "hidden";
}
// !END OF MODULE TWO


//!START OF MODULE THREE...SHOW SELECT AREA ROCK PAPER SCISSORS AND SHOOT IMAGES ON A TIMER 
makeRockVisible = () => {
  const show_rock = document.getElementById("rock_hand")
  show_rock.style.visibility = "visible";
}

makePaperVisible = () => {
  const show_rock = document.getElementById("paper_hand")
  show_rock.style.visibility = "visible";
  
}

makeScissorsVisible = () => {
  const show_rock = document.getElementById("scissors_hand")
  show_rock.style.visibility = "visible";
  
}

makeShootVisible = () => {
  const show_shoot = document.getElementById("shoot")
  show_shoot.style.visibility = "visible";
  
}

makeMiddleSectionVisible = () => { 
  const show_middle_section = document.getElementById("middle_section_container")
  show_middle_section.style.visibility = "visible";
}

// !END OF MODULE THREE


// !START OF MODULE FOUR...HIDING RPS IMAGES AFTER THEY HAVE APPEARED ON SCREEN// KEEP SHOOT ON SCREEN UNTIL USER AND COMPUTER CHOOSE
// TODO:change var names
hide_images_after_shown = () => {
  const x = document.getElementById("rock_hand")
  x.style.visibility = "hidden"

    
  const y = document.getElementById("paper_hand")
  y.style.visibility = "hidden"

    
  const z = document.getElementById("scissors_hand")
  z.style.visibility = "hidden"
}
// END OF MODULE FOUR


// !START OF MODULE FIVE...SHOWS  AND HIDES THE CONTAINER THAT HAS THE RPS HAND IMAGES 
show_hand_container = () => { 
  const showHandContainer = document.getElementById("hand_container")
  showHandContainer.style.visibility = "visible"
}

hide_hand_container = () => { 
  const hideHandContainer = document.getElementById("hand_container")
  hideHandContainer.style.visibility = "hidden"
}
// !END OF MODULE FIVE


// !START OF MODULE SIX...HIDES THE SHOOT IMAGE AFTER THE BOTH USERS MAKE THEIR DECISION
// TODO: incomplete function need to finish
function hide_shoot_after_shown() {
  const hideShoot = document.getElementById("shoot")
  hideShoot.style.visibility = "hidden"
}
// !END OF MODULE SIX


// !START OF MODULE SEVEN...SHOW TIE GAME IMAGE WHEN USER AND COMP CHOOSE SAME THING
show_draw = () => { 
  const draw  = document.addEventListener("tie")
  draw.style.visibility = "visible"
}
   
// !END OF MODULE SEVEN


// !START OF MODULE EIGHT...SHOW USER IMAGES AFTER BUTTON IS CLICKED 
userChoosesRock = () => {
  userInput = "rock"
  const userRock = document.getElementById("user_rock_hand");
  console.log(`user chose ${userInput}`)
  userRock.style.visibility = "visible";
}

userChoosesPaper = () => {
  userInput = "paper"
  const userPaper = document.getElementById("user_paper_hand");
  console.log(`user chose ${userInput}`)
  userPaper.style.visibility = "visible";
}

userChoosesScissors = () => {
  userInput = "scissors"
  const userScissors = document.getElementById("user_scissors_hand");
  console.log(`user chose ${userInput}`)
  userScissors.style.visibility = "visible";
}
// !END OF MODULE EIGHT


// !START OF MODULE NINE...RUNS FUNCTIONS THAT COMPUTER USES TO MAKE ITS CHOICE
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
// !END OF MODULE NINE


// !START OF MODULE TEN...DETERMINES IF THE USER OR COMP WINS OR LOSSES/KEEPS A SCORE
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
// !END OF MODULE TEN


// !START OF MODULE ELEVEN... HIDE USERS CHOICE IMAGES...SHOULD BE ON A TIMER 
hideUnusedChoice = () => {
  const hideUnusedChoices = document.getElementsByClassName("user_hand")
}
// !END OF MODULE ELEVEN


// !MODULE TWELVE...DISPLAYS THE SCORE
// !IN CONSOLE AND ON SCREEN
showScore = () => {
  console.log(`The score is now User: ${userScore} to Computer: ${compScore}`)
}

// !END OF MODULE TWELVE

// ?main function to run game
main = () => {

  show_hand_container()
  setTimeout(makeRockVisible, 1000)
  setTimeout(makePaperVisible, 2000)
  setTimeout(makeScissorsVisible, 3000)
  setTimeout(makeMiddleSectionVisible, 3900)
  setTimeout(makeShootVisible, 4000)
  setTimeout(compChooses, 4500)
  setTimeout(hide_images_after_shown, 7000)
  setTimeout(hide_hand_container, 7000)
  setTimeout(showScore, 8000);
}
