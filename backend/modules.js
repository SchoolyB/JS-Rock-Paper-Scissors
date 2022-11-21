// TODO: NEED TO REDO MODULE ONE 
// START IF MODULE ONE...RPS BUTTON FUNCTIONALITY
function rock_button_clicked() {
  userInput = "rock";
}

function paper_button_clicked(){
  userInput = "paper";
}

function scissors_button_clicked(){
  userInput = "scissors"
}

document.getElementById("rock_btn").addEventListener("click",rock_button_clicked);
document.getElementById("paper_btn").addEventListener("click", paper_button_clicked);
document.getElementById("scissors_btn").addEventListener("click", scissors_button_clicked);
// END OF MODULE ONE


// START OF MODULE TWO...SELECTION AREA HIDE IMAGES USING JS RATHER THAN CSS
// TODO: need to rename vars

function hide_images_on_load() {
  //hides rock
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
  //hides the nad div on load
  const h = document.getElementById("hand_container")
  h.style.visibility = "hidden"
}
// END OF MODULE TWO


//START OF MODULE THREE...SHOW SELECT AREA ROCK PAPER SCISSORS AND SHOOT IMAGES ON A TIMER 
function makeRockVisible() {
  const show_rock = document.getElementById("rock_hand")
  show_rock.style.visibility = "visible";
  }

function makePaperVisible() {
  const show_rock = document.getElementById("paper_hand")
  show_rock.style.visibility = "visible";
  }

function makeScissorsVisible() {
  const show_rock = document.getElementById("scissors_hand")
  show_rock.style.visibility = "visible";
  }

function makeShootVisible() {  
  const show_shoot = document.getElementById("shoot")
  show_shoot.style.visibility = "visible";
  }

function show_rps_on_timer() { //shows images on a timer when called FINALLY GOT IT TO WORK
  show_hand_container()
  setTimeout(makeRockVisible, 1000)
  setTimeout(makePaperVisible, 2000)
  setTimeout(makeScissorsVisible, 3000)
  setTimeout(makeShootVisible, 4000)
  setTimeout(hide_images_after_shown, 5000)
  setTimeout(hide_hand_container, 5000)
}
// END OF MODULE THREE


// START OF MODULE FOUR...HIDING RPS IMAGES AFTER THEY HAVE APPEARED ON SCREEN// KEEP SHOOT ON SCREEN UNTIL USER AND COMPUTER CHOOSE
// TODO:change var names
function hide_images_after_shown() {

  const x = document.getElementById("rock_hand")
  x.style.visibility = "hidden"

    
  const y = document.getElementById("paper_hand")
  y.style.visibility = "hidden"

    
  const z = document.getElementById("scissors_hand")
  z.style.visibility = "hidden"
}
// END OF MODULE FOUR


// START OF MODULE FIVE...SHOWS  AND HIDES THE CONTAINER THAT HAS THE RPS HAND IMAGES 
function show_hand_container() {
  const showHandContainer = document.getElementById("hand_container")
  showHandContainer.style.visibility = "visible"
}

function hide_hand_container() {
  const hideHandContainer = document.getElementById("hand_container")
  hideHandContainer.style.visibility = "hidden"
}
// END OF MODULE FIVE


// START OF MODULE SIX...HIDES THE SHOOT IMAGE AFTER THE BOTH USERS MAKE THEIR DECISION
// TODO: incomplete function
function hide_shoot_after_shown() {
  const hideShoot = document.getElementById("shoot")
  hideShoot.style.visibility = "hidden"
}
// END OF MODULE SIX