// !FUNCTION TO HIDE ANY "ROCK,PAPER,SCISSORS" IMAGE ON SCREEN 

hideUnusedChoice = () => {
  const hideUnusedChoices = document.getElementsByClassName("user_hand", "comp_hand")
  hideUnusedChoices.style.visibility = "hidden"
}
