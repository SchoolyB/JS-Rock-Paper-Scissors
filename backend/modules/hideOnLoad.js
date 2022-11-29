// !HIDES ALL IMAGES. IS CALLED WHEN THE BODY OF THE PAGE LOADS

// TODO: need to rename vars
hide_images_on_load = () => {
  
  const a = document.getElementById("rock_hand");
  a.style.visibility = "hidden";

  //hides paper on load
  const b = document.getElementById("paper_hand");
  b.style.visibility = "hidden";

  //hides scissors on load
  const c = document.getElementById("scissors_hand");
  c.style.visibility = "hidden";

  //hides shoot on load
  const d = document.getElementById("shoot")
  d.style.visibility = "hidden";

  //hides user red x on load
  const e = document.getElementById("user_red_x")
  e.style.visibility = "hidden";

  //hides comp red x on load
  const f = document.getElementById("comp_red_x")
  f.style.visibility = "hidden";

  //hides comp tie on load
  const g = document.getElementById("tie_game")
  g.style.visibility = "hidden";

  //hides the hand container on load
  const h = document.getElementById("hand_container")
  h.style.visibility = "hidden";

  //hides the user's rock hand on load
  const i = document.getElementById("user_rock_hand")
  i.style.visibility = "hidden";

  //hides the user's paper hand on load
  const j = document.getElementById("user_paper_hand")
  j.style.visibility = "hidden";
  
  //hides the user's scissors hand on load
  const k = document.getElementById("user_scissors_hand")
  k.style.visibility = "hidden";
  
  //hides the comp's rock hand on load
  const l = document.getElementById("comp_rock_hand")
  l.style.visibility = "hidden";
  
  //hides the comp's paper hand on load
  const m = document.getElementById("comp_paper_hand")
  m.style.visibility = "hidden";
  
  //hides the comp's scissors hand on load
  const n = document.getElementById("comp_scissors_hand")
  n.style.visibility = "hidden";
 
  //hides the container that houses the "shoot" and "tie/draw" images on load
  const o = document.getElementById("middle_section_container")
  o.style.visibility = "hidden";
}