const burderMenu = document.getElementById("burder-menu");
function toggleBurgerMenu() {
  if (window.getComputedStyle(burderMenu).display == "none")
    burderMenu.style.display = "block";
  else burderMenu.style.display = "none";
}
