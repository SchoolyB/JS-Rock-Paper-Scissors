// !MAIN FUNCTION TO RUN THE PROGRAM

import {

  makeRockVisible,
  makePaperVisible,
  makeScissorsVisible,
  makeShootVisible,
  makeMiddleSectionVisible,
  compChooses,
  hide_images_after_shown,
  hide_hand_container
  
  } from "../modules"

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