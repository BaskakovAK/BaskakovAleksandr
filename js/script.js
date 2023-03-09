"use strict";

const funProjectOpenButton = document.querySelector(".fun-projects--open");
const funProjectCloseButton = document.querySelector(
  ".portfolio__close-button"
);
const funProjectWindow = document.querySelector(
  ".portfolio__funprojects-modal-wrapper"
);

const landingPagesOpenButton = document.querySelector(".landing-pages--open");
const landingPagesCloseButton = document.querySelector(
  ".portfolio__landing-pages-close-button"
);
const landingPagesWindow = document.querySelector(
  ".portfolio__landing-pages-modal-wrapper"
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

landingPagesOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  landingPagesWindow.classList.remove("closed");
  landingPagesWindow.classList.add("opened");
});

landingPagesCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  landingPagesWindow.classList.add("closed");
  landingPagesWindow.classList.remove("opened");
  console.log(1);
});
