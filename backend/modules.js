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

function hide_images() {
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
  const g = document.getElementById("tie")
  g.style.visibility = "hidden";
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
  makeRockVisible()
  setTimeout(makePaperVisible, 1500)
  setTimeout(makeScissorsVisible, 3000)
  setTimeout(makeShootVisible, 4500)
}
// END OF MODULE THREE





