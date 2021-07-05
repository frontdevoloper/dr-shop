let btn = document.getElementById("menu__button");
let menuBar = document.querySelector(".header__menu-bar");

btn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  btn.classList.toggle("active");
  document.body.classList.toggle("block");
});

/* Прокрутка к первой секции */

const scrollBtn = document.getElementById("btn-up");

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

/* Нимация при скролле */

const animBtn = document.getElementById("btn-up");

window.addEventListener("scroll", () => {
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
});

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + screenLeft };
}

// if (animItems > 0) {
//   window.addEventListener("scroll", animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffSet = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffSet > animItemOffSet - animItemPoint &&
//         pageYOffset < animItemOffSet + animItemHeight
//       ) {
//         animItem.classList.add("_active");
//       } else {
//         animItem.classList.remove("_active");
//       }
//     }
//   }
//}
