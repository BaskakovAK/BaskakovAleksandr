"use strict";

const funProjectOpenButton = document.querySelector(".fun-projects--open");
const funProjectCloseButton = document.querySelector(
  ".portfolio__close-button"
);
const funProjectWindow = document.querySelector(
  ".portfolio__funprojects-modal-wrapper"
);

funProjectOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  funProjectWindow.classList.remove("closed");
  funProjectWindow.classList.add("opened");
});

funProjectCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  funProjectWindow.classList.add("closed");
  funProjectWindow.classList.remove("opened");
});
