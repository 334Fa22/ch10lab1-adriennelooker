/*
  Student Name: Adrienne Looker
  File Name: script.js
  Date: September 19, 2022
*/

// Hamburger menu fucntion
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
