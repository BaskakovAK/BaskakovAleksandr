const funProjectsPopup = document.querySelector(".fun-projects");
const funProjectsCloseButton = document.querySelector(
  ".fun-projects--close-button"
);
const funProjectsOpenButton = document.querySelector(
  ".fun-projects--open-button"
);

funProjectsCloseButton.onclick = function () {
  funProjectsPopup.style.display = "none";
};

funProjectsOpenButton.onclick = function () {
  funProjectsPopup.style.display = "block";
};
