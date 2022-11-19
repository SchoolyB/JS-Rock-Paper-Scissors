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

