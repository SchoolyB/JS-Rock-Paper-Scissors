import { userInput} from "../backend/selections.js"

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


// START OF MODULE TWO...SELECTION AREA IMAGE TIMER FUNCTIONALITY
function rock_appear() {
  document.querySelector("rock_hand").style.opacity = 1;

}
// END OF MODULE TWO



// START OF MODULE THREE...SELECTION AREA HIDE IMAGES USING JS RATHER THAN CSS
function hide_images() {
  document.getElementById("rock_hand").style.display = "none"
  document.getElementById("paper_hand").style.opacity = 0;
  document.getElementById("scissors_hand").style.opacity = 0;
  document.getElementById("shoot").style.opacity = 0;
  document.getElementById("tie").style.opacity = 0;
}


  
