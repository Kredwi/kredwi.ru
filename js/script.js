const rightScrollButton = document.getElementById("right-button");
const leftScrollButton = document.getElementById("left-button");
const components = document.querySelector(".components");

rightScrollButton.addEventListener("click", () => {
  components.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

leftScrollButton.addEventListener("click", () => {
  components.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

const burderMenu = document.getElementById("burder-menu");
function toggleBurgerMenu() {
  if (window.getComputedStyle(burderMenu).display == "none")
    burderMenu.style.display = "block";
  else burderMenu.style.display = "none";
}
