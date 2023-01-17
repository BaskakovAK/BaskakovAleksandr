"Use strict";
const body = document.querySelector("body");
const hedgehog = document.querySelector(".hedgehog");
const upButton = document.querySelector(".up-button");
const leftButton = document.querySelector(".left-button");
const downButton = document.querySelector(".down-button");
const rightButton = document.querySelector(".right-button");
const giveButton = document.querySelector(".give-button");
const pickButton = document.querySelector(".pick-button");
const apple = document.querySelector(".apple");
const inventoryVal = document.querySelector(".inventory");
const stockVal = document.querySelector(".stock");
const xVal = document.querySelector(".x");
const yVal = document.querySelector(".y");
const xValApple = document.querySelector(".x-apple");
const yValApple = document.querySelector(".y-apple");
const message = document.querySelector(".message");
const closeButton = document.querySelector(".close-learning");
//
//
//
//
//
let x = 180;
let y = 70;
let appleX = 0;
let appleY = 0;
let inventory = 0;
let stock = 0;
const appleHitBox = 40;
const step = 7.5;
//
//
//
//
//
const moveUp = function () {
  x -= step;
  hedgehog.style.top = x + "px";
};

const moveDown = function () {
  x += step;
  hedgehog.style.top = x + "px";
};

const moveLeft = function () {
  y -= step;
  hedgehog.style.left = y + "px";
};

const moveRight = function () {
  y += step;
  hedgehog.style.left = y + "px";
};

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const spawnApple = function () {
  apple.style.visibility = "visible";
  appleX = randomNumber(180, 550);
  appleY = randomNumber(170, 780);
  apple.style.top = appleX + "px";
  apple.style.left = appleY + "px";
  console.log("Apple spawned");
  refreshCoord();
};

const refreshCoord = function () {
  yVal.textContent = y;
  xVal.textContent = x;
  yValApple.textContent = appleY;
  xValApple.textContent = appleX;
};

const getApple = function () {
  apple.style.visibility = "hidden";
  inventory += 1;
  inventoryVal.textContent = "(" + inventory + ")";
};
//
//
//
//
//
spawnApple();

upButton.onclick = function () {
  if (x >= 120) {
    if (inventory <= 0) {
      hedgehog.style.backgroundImage = "url('img/hog_up.png')";
      moveUp();
    } else if (inventory >= 1) {
      hedgehog.style.backgroundImage = "url('img/hog_up_apple.png')";
      moveUp();
    }
    refreshCoord();
  }
};

leftButton.onclick = function () {
  if (y >= 80) {
    if (inventory <= 0) {
      hedgehog.style.backgroundImage = "url('img/hog_left.png')";
      moveLeft();
    } else if (inventory >= 1) {
      hedgehog.style.backgroundImage = "url('img/hog_left_apple.png')";
      moveLeft();
    }
    refreshCoord();
  }
};

downButton.onclick = function () {
  if (x <= 530) {
    if (inventory <= 0) {
      hedgehog.style.backgroundImage = "url('img/hog_down.png')";
      moveDown();
    } else if (inventory >= 1) {
      hedgehog.style.backgroundImage = "url('img/hog_down_apple.png')";
      moveDown();
    }
    refreshCoord();
  }
};

rightButton.onclick = function () {
  if (y <= 780) {
    if (inventory <= 0) {
      hedgehog.style.backgroundImage = "url('img/hog_right.png')";
      moveRight();
    } else if (inventory >= 1) {
      hedgehog.style.backgroundImage = "url('img/hog_right_apple.png')";
      moveRight();
    }
    refreshCoord();
  }
};
//
//
//
//
//
pickButton.onclick = function () {
  if (
    x - appleHitBox <= appleX &&
    x + appleHitBox >= appleX &&
    y - appleHitBox <= appleY &&
    y + appleHitBox >= appleY &&
    inventory <= 0
  ) {
    getApple();
    message.textContent = "Apple getted!";
    spawnApple();
  } else if (
    x - appleHitBox <= appleX &&
    x + appleHitBox >= appleX &&
    y - appleHitBox <= appleY &&
    y + appleHitBox >= appleY &&
    inventory >= 1
  ) {
    message.textContent = "There is no space in the inventory";
  } else {
    message.textContent = "Apple is far away";
  }
};

giveButton.onclick = function () {
  if (x <= 181 && x >= 50 && y <= 151 && y >= 50 && inventory >= 1) {
    inventory -= 1;
    stock++;
    stockVal.textContent = stock;
    message.textContent = "the warehouse is replenished";
  } else if (inventory <= 0) {
    message.textContent = "you dont have an apple";
  } else {
    message.textContent = "warehouse away";
  }
  inventoryVal.textContent = "(" + inventory + ")";
};

closeButton.onclick = function () {
  document.querySelector(".learning").style.display = "none";
};
//
//
//
//
//
addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (x >= 120) {
      if (inventory <= 0) {
        hedgehog.style.backgroundImage = "url('img/hog_up.png')";
        moveUp();
      } else if (inventory >= 1) {
        hedgehog.style.backgroundImage = "url('img/hog_up_apple.png')";
        moveUp();
      }
      refreshCoord();
    }
  }

  if (event.code === "ArrowLeft") {
    if (y >= 80) {
      if (inventory <= 0) {
        hedgehog.style.backgroundImage = "url('img/hog_left.png')";
        moveLeft();
      } else if (inventory >= 1) {
        hedgehog.style.backgroundImage = "url('img/hog_left_apple.png')";
        moveLeft();
      }
      refreshCoord();
    }
  }

  if (event.code === "ArrowDown") {
    if (x <= 530) {
      if (inventory <= 0) {
        hedgehog.style.backgroundImage = "url('img/hog_down.png')";
        moveDown();
      } else if (inventory >= 1) {
        hedgehog.style.backgroundImage = "url('img/hog_down_apple.png')";
        moveDown();
      }
      refreshCoord();
    }
  }

  if (event.code === "ArrowRight") {
    if (y <= 780) {
      if (inventory <= 0) {
        hedgehog.style.backgroundImage = "url('img/hog_right.png')";
        moveRight();
      } else if (inventory >= 1) {
        hedgehog.style.backgroundImage = "url('img/hog_right_apple.png')";
        moveRight();
      }
      refreshCoord();
    }
  }

  if (event.code === "KeyZ") {
    if (
      x - appleHitBox <= appleX &&
      x + appleHitBox >= appleX &&
      y - appleHitBox <= appleY &&
      y + appleHitBox >= appleY &&
      inventory <= 0
    ) {
      getApple();
      console.log(hedgehog.style.backgroundImage);
      if (hedgehog.style.backgroundImage === "img/hog_right.png") {
        hedgehog.style.backgroundImage = "img/hog_right_apple.png";
        console.log(hedgehog.style.backgroundImage);
      }
      message.textContent = "Apple getted!";
      spawnApple();
    } else if (
      x - appleHitBox <= appleX &&
      x + appleHitBox >= appleX &&
      y - appleHitBox <= appleY &&
      y + appleHitBox >= appleY &&
      inventory >= 1
    ) {
      message.textContent = "There is no space in the inventory";
    } else {
      message.textContent = "Apple is far away";
    }
  }

  if (event.code === "KeyX") {
    if (x <= 181 && x >= 50 && y <= 151 && y >= 50 && inventory >= 1) {
      inventory -= 1;
      stock++;
      stockVal.textContent = stock;
      message.textContent = "the warehouse is replenished";
    } else if (inventory <= 0) {
      message.textContent = "you dont have an apple";
    } else {
      message.textContent = "warehouse away";
    }
    inventoryVal.textContent = "(" + inventory + ")";
  }
});
