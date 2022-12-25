"use strict";
let darkButton = document.querySelector(".dark-theme");
let lightButton = document.querySelector(".light-theme");
let logo = document.querySelector(".logo-img");

darkButton.onclick = function () {
  document.body.classList.remove("light");
  logo.src = "img/logo.png";
  lightButton.classList.remove("active");
  darkButton.classList.add("active");
};

lightButton.onclick = function () {
  document.body.classList.add("light");
  logo.src = "img/logo-dark.png";
  darkButton.classList.remove("active");
  lightButton.classList.add("active");
};
