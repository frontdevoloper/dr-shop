let btnBurger = document.getElementById("menu__button");
let menuBar = document.querySelector(".header__menu-bar");

btnBurger.addEventListener("click", () => {
  menuBar.classList.toggle("_active");
  btnBurger.classList.toggle("_active");
  document.body.classList.toggle("_block");
});

/* Прокрутка к первой секции */

const scrollBtn = document.getElementById("btn-up");

if (scrollBtn) {
  scrollBtn.addEventListener("click", (e) => {
    const gotoBlock = document.querySelector(scrollBtn.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.getElementById("header").offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
  });
}

/* Анимация при скролле */
const animBtn = document.getElementById("btn-up");

window.addEventListener("scroll", animOnScroll);

function animOnScroll() {
  const animItemHeight = animBtn.offsetHeight;
  const animItemOffSet = offset(animBtn).top;
  const animStart = 4;

  let animItemPoint = window.innerHeight - animItemHeight / animStart;
  if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    pageYOffset > animItemOffSet - animItemPoint &&
    pageYOffset < animItemOffSet + animItemHeight
  ) {
    animBtn.classList.add("_active");
  } else {
    animBtn.classList.remove("_active");
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + screenLeft };
}
