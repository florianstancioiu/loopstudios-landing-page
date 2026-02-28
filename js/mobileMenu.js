const $openMenuBtn = document.querySelector(".open-menu-btn");
const $closeMenuBtn = document.querySelector(".close-menu-btn");
const $mobileMenu = document.querySelector(".mobile-menu");

$openMenuBtn.addEventListener("click", () => {
  $mobileMenu.classList.add("visible");
});

$closeMenuBtn.addEventListener("click", () => {
  $mobileMenu.classList.remove("visible");
});
