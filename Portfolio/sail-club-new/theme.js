let darkThemeButton = document.querySelector(".theme-button-dark");
let lightThemeButton = document.querySelector(".theme-button-light");
let sansSerifButton = document.querySelector(".font-button-sans-serif");
let serifButton = document.querySelector(".font-button-serif");

darkThemeButton.onclick = function () {
  document.body.classList.add("dark");
  darkThemeButton.classList.add("active");
  lightThemeButton.classList.remove("active");
};

lightThemeButton.onclick = function () {
  document.body.classList.remove("dark");
  lightThemeButton.classList.add("active");
  darkThemeButton.classList.remove("active");
};

sansSerifButton.onclick = function () {
  document.body.classList.remove("serif");
  sansSerifButton.classList.add("active");
  serifButton.classList.remove("active");
};

serifButton.onclick = function () {
  document.body.classList.add("serif");
  serifButton.classList.add("active");
  sansSerifButton.classList.remove("active");
};
