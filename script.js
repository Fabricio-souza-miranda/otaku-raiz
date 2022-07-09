const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 10,
  slidesPerView: 3,
  loop: false,
  freeMode: true,
  loopAdditionalSlides: 5,
  speed: 500,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 800px
    800: {
    slidesPerView: 8,
    slidesPerGroup: 5,
    freeMode: false,
      
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  spaceBetween: 10,
  slidesPerGroup: 1,
  slidesPerView: 1.2,
  loop: false,
  freeMode: true,
  loopAdditionalSlides: 5,
  speed: 500,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 800px
    800: {
    slidesPerView: 3,
    slidesPerGroup: 2,
    freeMode: false,
      
    }
  }
});
