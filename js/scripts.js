"use strict";

const fetchCreations = async () => {
  try {
    const response = await fetch("./creations.json");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

const fillCreation = ($clone, creation) => {
  $clone
    .querySelector(".desktop-image")
    .setAttribute("srcset", creation.image.desktop);
  $clone
    .querySelector(".mobile-image")
    .setAttribute("srcset", creation.image.mobile);
  $clone.querySelector(".title").textContent = creation.title;

  return $clone;
};

const renderCreations = (data) => {
  const $template = document.querySelector("#creation-item-template");
  const $container = document.querySelector(".creations-list");

  for (let i = 0; i < data.length; i++) {
    const $clone = document.importNode($template.content, true).children[0];
    const item = data[i];
    const $updatedClone = fillCreation($clone, item);

    $container.appendChild($updatedClone);
  }
};

const creations = await fetchCreations();

renderCreations(creations);
