// Slider principal
var swiperPrincipal = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Sliders dentro de cada tab (mySwiper-2)
var swiperTab1 = new Swiper("#swiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: "#swiper1 .swiper-button-next",
    prevEl: "#swiper1 .swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    640: { slidesPerView: 1 },
  },
});

var swiperTab2 = new Swiper("#swiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: "#swiper2 .swiper-button-next",
    prevEl: "#swiper2 .swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    640: { slidesPerView: 1 },
  },
});

var swiperTab3 = new Swiper("#swiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: "#swiper3 .swiper-button-next",
    prevEl: "#swiper3 .swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    640: { slidesPerView: 1 },
  },
});
