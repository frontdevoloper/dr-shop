let btn = document.querySelector(".menu__button");
let menuBar = document.querySelector(".header__menu-bar");

btn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  btn.classList.toggle("active");
});
