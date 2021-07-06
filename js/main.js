//Menu burger
const btnBurger = document.getElementById("menu__button");
const menuBar = document.querySelector(".header__menu-bar");

btnBurger.addEventListener("click", () => {
  menuBar.classList.toggle("_active");
  btnBurger.classList.toggle("_active");
  document.body.classList.toggle("_block");
});

//Slider

let sliderProducts = new Swiper(".slider-products", {
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-preview",
  },
  pagination: {
    el: ".progressbar-feel",
    type: "progressbar",
  },
  speed: 900,
});

//Fraction
let curentSlides = document.querySelectorAll(".slider-product__fraction");

sliderProducts.on("slideChange", () => {
  let realCurentSlide = ++sliderProducts.realIndex;
  curentSlides.forEach((curentSlide) => {
    curentSlide.innerHTML = realCurentSlide.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  });
});

//--------------------------
$(function () {
  let slider = $(".intro__slider");
  let slide__current = $(".intro__slide-current");
  let slide__all = $(".intro__slide-all");

  slider.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      let i = (currentSlide ? currentSlide : 0) + 1;
      slide__current.text(i);
      slide__all.text(slick.slideCount);
    }
  );

  slider.slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#intro-prev"></use></svg></button>',
    // nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#intro-next"></use></svg></button>',
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$(function () {
  $(".reviews__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: false,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    speed: 500,
  });

  // $('.reviews__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   $('.slick-slide').removeClass('slick-center');
  //   $('.slick-active').eq(2).addClass('slick-center');
  // }).trigger('afterChange');

  // $('.product-card__slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   dots: false,
  //   // adaptiveHeight: true,
  //   infinite: false,
  //   asNavFor: '.product-card__slider-nav',
  //   responsive: [{
  //     breakpoint: 561,
  //     settings: {
  //       dots: true
  //     }
  //   }]
  // });
  // $('.product-card__slider-nav').slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   dots: false,
  //   arrows: false,
  //   focusOnSelect: true,
  //   infinite: false,
  //   asNavFor: '.product-card__slider-for',
  // });
});

$(function () {
  $(".rate__glass").rateYo({
    starWidth: "15px",
    starSvg:
      '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M7.0716 0.71186C7.26593 0.38895 7.73407 0.388951 7.9284 0.71186L9.85947 3.92063C9.92929 4.03664 10.0432 4.11937 10.1751 4.14992L13.8235 4.99491C14.1907 5.07995 14.3353 5.52518 14.0883 5.80979L11.6333 8.63791C11.5445 8.74015 11.501 8.87402 11.5128 9.0089L11.8366 12.7399C11.8691 13.1154 11.4904 13.3905 11.1434 13.2435L7.69504 11.7826C7.57038 11.7298 7.42962 11.7298 7.30496 11.7826L3.85662 13.2435C3.5096 13.3905 3.13086 13.1154 3.16345 12.7399L3.48725 9.0089C3.49895 8.87402 3.45546 8.74015 3.3667 8.63791L0.911711 5.80979C0.664657 5.52518 0.809323 5.07995 1.17648 4.99491L4.82494 4.14992C4.95684 4.11937 5.07071 4.03664 5.14053 3.92063L7.0716 0.71186Z"/>' +
      "</svg>",
    ratedFill: "#FD7A1F",
  });
});

$(function () {
  // $('.quest__item-heading').click(function () {
  //   $(this).toggleClass('active').siblings('.quest__item-content').slideToggle();
  // });
  // $('.mobile__hamburger').click(function () {
  //   $(this).toggleClass('open');
  //   $('.header__nav').toggleClass('open');
  //   $('body').toggleClass('oh');
  //   $('.shadow__block').toggleClass('open');
  // })
  // $('.shadow__block').click(function () {
  //   $(this).removeClass('open');
  //   $('.header__nav').removeClass('open');
  //   $('body').removeClass('oh');
  //   $('.mobile__hamburger').removeClass('open');
  // })
  // let header_height = $('.header__wrapper').innerHeight();
  // $('.header').css({
  //   'height': header_height,
  // });
  // $(window).scroll(function () {
  //   var height = $(window).scrollTop();
  //   if (height > 0) {
  //     $('header').addClass('scroll');
  //   } else {
  //     $('header').removeClass('scroll');
  //   }
  // });
});
