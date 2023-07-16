export const initSwiper = function () {
  const mediaQuery = window.matchMedia('(max-width: 1199px)');
  const swiperSlideInfo = document.querySelectorAll('.swiper-slide__info');

  if (mediaQuery.matches) {
    swiperSlideInfo.forEach((el) => {
      el.classList.add('focus-visible');
    });
  } else {
    swiperSlideInfo.forEach((el) => {
      el.classList.remove('focus-visible');
    });
  }

  new Swiper('.trainers__swiper', {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: '.trainers__swiper-button--next',
      prevEl: '.trainers__swiper-button--prev',
    },
  });

  new Swiper('.reviews__swiper', {
    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
    },
  });
};
