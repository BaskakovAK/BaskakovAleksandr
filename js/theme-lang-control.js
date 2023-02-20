"use strict";

const themeButton = document.querySelector(".toggle__theme");
const langButton = document.querySelector(".toggle__language");
const body = document.querySelector(".page");

themeButton.addEventListener("click", function () {
  if (themeButton.classList.contains("dark")) {
    themeButton.classList.remove("dark");
    themeButton.classList.add("light");
    body.classList.add("light");
    document.querySelector(".logo__image").src = "img/logo-dark.png";
  } else if (themeButton.classList.contains("light")) {
    themeButton.classList.remove("light");
    themeButton.classList.add("dark");
    body.classList.remove("light");
    document.querySelector(".logo__image").src = "img/logo.png";
  }
});

langButton.addEventListener("click", function () {
  if (langButton.textContent == "En") {
    langButton.textContent = "Ру";
    document.querySelector(".nav-item:first-child a").textContent = "Главная";
    document.querySelector(".nav-item:nth-child(2) a").textContent = "Обо мне";
    document.querySelector(".nav-item:nth-child(3) a").textContent =
      "Портфолио";
    document.querySelector(".nav-item:nth-child(4) a").textContent = "Контакты";

    document.querySelector("h1").textContent =
      "Баскаков Александр - веб разрабочик";
    document.querySelector(".intro__position").textContent = "Веб разработчик";
    document.querySelector(".intro__name").textContent = "Александр Баскаков";
    document.querySelector(".intro__text").textContent =
      "Привет! Меня зовут Александр. Я начинающий веб-разработчик. Я создаю сайты на по вашим макетам. Если вам нужен простой лендинг или базовый веб-сайт, я могу его сделать!";

    document.querySelector(".intro__button:nth-child(1)").textContent =
      "Портфолио";
    document.querySelector(".intro__button:nth-child(2)").textContent =
      "Контакты";
    document.querySelector(".about-me__title--about-me").textContent =
      "Обо мне";
    document.querySelector(".about-me__title--skills").textContent =
      "Список умений";
    document.querySelector(
      ".about-me__background-wrapper p:first-child"
    ).textContent =
      "В один день я собрал свои вещи, купил билет на самолет и улетел в Ереван, Армения. Я всегда мечтал заниматься разработкой, но только сейчас, когда я кардинально изменил свою жизнь, я смог бросить работу в розничной торговле и заняться тем, чем всегда хотел.";
    document.querySelector(
      ".about-me__background-wrapper p:last-child"
    ).textContent = "Меня зовут Александр, мне 25.";
    document.querySelector(".skills-item:nth-child(6)").textContent = "БЭМ";
    document.querySelector(".skills-item:nth-child(7)").textContent =
      "Адаптивность";
    document.querySelector(".skills-item:nth-child(8)").textContent =
      "Доступность";
    document.querySelector(".portfolio__title").textContent = "Портфолио";
    document.querySelector(".fun-projects--open").textContent = "Открыть";
    document.querySelector(".yacht-club--open").textContent = "Открыть";
    document.querySelector(".borodinski--open").textContent = "Открыть";
    document.querySelector(".collector--open").textContent = "Открыть";
    document.querySelector(".calorie-counter--open").textContent = "Открыть";
    document.querySelector(".contacts__title").textContent = "Контакты";
    document.querySelector(".footer__copyright").textContent =
      "© 2023 Баскаков Александр";
  } else if (langButton.textContent == "Ру") {
    langButton.textContent = "En";
    document.querySelector(".nav-item:first-child a").textContent = "Home";
    document.querySelector(".nav-item:nth-child(2) a").textContent = "About me";
    document.querySelector(".nav-item:nth-child(3) a").textContent =
      "Portfolio";
    document.querySelector(".nav-item:nth-child(4) a").textContent = "Contacts";
    document.querySelector("h1").textContent =
      "Baskakov Aleksandr Frontend developer";
    document.querySelector(".intro__position").textContent =
      "Frontend developer";
    document.querySelector(".intro__name").textContent = "Aleksandr Baskakov";
    document.querySelector(".intro__text").textContent =
      "Hi! I'm Aleksandr. I am a beginner web developer. I create websites based on your mockups. if you need a simple landing or basic web site, i can do that!";
    document.querySelector(".intro__button:nth-child(1)").textContent =
      "Portfolio";
    document.querySelector(".intro__button:nth-child(2)").textContent =
      "Contacts";
    document.querySelector(".about-me__title--about-me").textContent =
      "About me";
    document.querySelector(".about-me__title--skills").textContent =
      "Skills list";
    document.querySelector(
      ".about-me__background-wrapper p:first-child"
    ).textContent =
      "In one day I packed my things, bought a plane ticket and flew to Yerevan, Armenia. I always dreamed of doing development, but only now, when I radically changed my life, I was able to give up working in retail and do what I always wanted to do.";
    document.querySelector(
      ".about-me__background-wrapper p:last-child"
    ).textContent = "My name is Aleksandr, I'm 25.";
    document.querySelector(".skills-item:nth-child(6)").textContent = "BEM";
    document.querySelector(".skills-item:nth-child(7)").textContent =
      "Adaptability";
    document.querySelector(".skills-item:nth-child(8)").textContent =
      "Accessibility";
    document.querySelector(".portfolio__title").textContent = "Portfolio";
    document.querySelector(".fun-projects--open").textContent = "Open";
    document.querySelector(".yacht-club--open").textContent = "Open";
    document.querySelector(".borodinski--open").textContent = "Open";
    document.querySelector(".collector--open").textContent = "Open";
    document.querySelector(".calorie-counter--open").textContent = "Open";
    document.querySelector(".contacts__title").textContent = "Contacts";
    document.querySelector(".footer__copyright").textContent =
      "© 2023 Baskakov Aleksandr";
  }
});
