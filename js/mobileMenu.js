"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $openMenuBtn = document.querySelector(".open-menu-btn");
  const $closeMenuBtn = document.querySelector(".close-menu-btn");
  const $mobileMenu = document.querySelector(".mobile-menu");

  if (!$mobileMenu) {
    return;
  }

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
});
