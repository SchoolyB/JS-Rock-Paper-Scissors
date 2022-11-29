// !EACH FUNCTION BELOW SHOWS ALL THE IMAGES ON THE SCREEN. THEY ARE CALLED WHEN NECESSARY 

// MAKES THE "ROCK" HAND THAT IS ON A TIMER SHOW ON SCREEN
makeRockVisible = () => {
  const show_rock = document.getElementById("rock_hand")
  show_rock.style.visibility = "visible";
}

// MAKES THE "PAPER" HAND THAT IS ON A TIMER SHOW ON SCREEN
makePaperVisible = () => {
  const show_rock = document.getElementById("paper_hand")
  show_rock.style.visibility = "visible";
  
}

// MAKES THE "SCISSORS" HAND THAT IS ON A TIMER SHOW ON SCREEN
makeScissorsVisible = () => {
  const show_rock = document.getElementById("scissors_hand")
  show_rock.style.visibility = "visible";
  
}

// MAKES THE "SHOOT" IMAGE SHOW ON SCREEN
makeShootVisible = () => {
  const show_shoot = document.getElementById("shoot")
  show_shoot.style.visibility = "visible";
  
}
// MAKES THE CONTAINER THAT HAS "SHOOT" AND "DRAW/TIE" IMAGES SHOW ON SCREEN
makeMiddleSectionVisible = () => { 
  const show_middle_section = document.getElementById("middle_section_container")
  show_middle_section.style.visibility = "visible";
}

// MAKES THE "HAND CONTAINER" THAT IS ON A TIMER SHOW ON SCREEN
show_hand_container = () => { 
  const showHandContainer = document.getElementById("hand_container")
  showHandContainer.style.visibility = "visible"

}

// MAKES THE "DRAW/TIE" IMAGE SHOW ON SCREEN
show_draw = () => { 
  const draw  = document.addEventListener("tie")
  draw.style.visibility = "visible"
}


export {
  makeRockVisible,
  makePaperVisible,
  makeScissorsVisible,
  makeShootVisible,
  makeMiddleSectionVisible,
  showHandContainer,
  show_draw,
}
