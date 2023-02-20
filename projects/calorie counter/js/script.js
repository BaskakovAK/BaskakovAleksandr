"use strict";

const genderMale = document.querySelector("#gender-male");
const genderFemale = document.querySelector("#gender-female");

const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const activityMinimal = document.querySelector("#activity-minimal");
const activityLow = document.querySelector("#activity-low");
const activityMedium = document.querySelector("#activity-medium");
const activityHigh = document.querySelector("#activity-high");
const activityMaximal = document.querySelector("#activity-maximal");

const sumbitButton = document.querySelector(".form__submit-button");
const resetButton = document.querySelector(".form__reset-button");

const counterResult = document.querySelector(".counter__result");
const caloriesNorm = counterResult.querySelector("#calories-norm");
const caloriesMinimal = counterResult.querySelector("#calories-minimal");
const caloriesMaximal = counterResult.querySelector("#calories-maximal");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const valueCheck = function () {
  if (
    Number(age.value) !== 0 &&
    Number(height.value) !== 0 &&
    Number(weight.value) !== 0
  ) {
    sumbitButton.disabled = false;
  }

  if (
    Number(age.value) !== 0 ||
    Number(height.value) !== 0 ||
    Number(weight.value) !== 0
  ) {
    resetButton.disabled = false;
  }
};

const getCalorieCalculation = function () {
  counterResult.classList.remove("counter__result--hidden");

  let calorie = 10 * weight.value + (6, 25 * height.value) - 5 * age.value;

  if (genderMale.checked) {
    calorie += 5;
  } else if (genderFemale.checked) {
    calorie -= 161;
  }

  if (activityMinimal.checked) {
    calorie = calorie * 1.2;
  } else if (activityLow.checked) {
    calorie = calorie * 1.375;
  } else if (activityMedium.checked) {
    calorie = calorie * 1.55;
  } else if (activityHigh.checked) {
    calorie = calorie * 1.725;
  } else if (activityMaximal.checked) {
    calorie = calorie * 1.9;
  }

  let calorieMin = calorie * 0.85;
  let calorieMax = calorie * 1.15;

  caloriesNorm.textContent = Math.round(calorie);
  caloriesMinimal.textContent = Math.round(calorieMin);
  caloriesMaximal.textContent = Math.round(calorieMax);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

age.oninput = function () {
  valueCheck();
};

height.oninput = function () {
  valueCheck();
};

weight.oninput = function () {
  valueCheck();
};

sumbitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  getCalorieCalculation();
});

resetButton.onclick = function () {
  sumbitButton.disabled = true;
  counterResult.classList.add("counter__result--hidden");
};
