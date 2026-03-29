"use strict";

const $openMenuBtn = document.querySelector(".open-menu-btn");
const $closeMenuBtn = document.querySelector(".close-menu-btn");
const $mobileMenu = document.querySelector(".mobile-menu");

if ($openMenuBtn) {
  $openMenuBtn.addEventListener("click", () => {
    $mobileMenu.classList.add("visible");
  });
}

if ($closeMenuBtn) {
  $closeMenuBtn.addEventListener("click", () => {
    $mobileMenu.classList.remove("visible");
  });
}
