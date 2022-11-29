// ! HIDES THE ROCK PAPER IN SCISSOR HANDS THAT ARE ON A TIMER AFTER THEY HAVE APPEARED ON SCREEN
// TODO:change var names

// HIDES THE "ROCK,PAPER,SCISSORS" HANDS IMAGES THAT ARE ON A TIMER SHOW ON SCREEN
hide_images_after_shown = () => {
  const x = document.getElementById("rock_hand")
  x.style.visibility = "hidden"


  const y = document.getElementById("paper_hand")
  y.style.visibility = "hidden"

    
  const z = document.getElementById("scissors_hand")
  z.style.visibility = "hidden"
}

// HIDES THE CONTAINER THAT THE ENCLOSES THE "ROCK,PAPER,SCISSORS" HANDS IMAGES
hide_hand_container = () => { 
  const hideHandContainer = document.getElementById("hand_container")
  hideHandContainer.style.visibility = "hidden"
}

export { hide_images_after_shown, hide_hand_container}