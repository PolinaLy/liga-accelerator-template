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
    navigation: {
      nextEl: '.trainers__swiper .slider__button--next',
      prevEl: '.trainers__swiper .slider__button--prev',
    },
    // Задает класс активным слайдам
    watchSlidesProgress: true,
    // Задаем класс активным слайдам
    slideVisibleClass: 'slider__slide--visible',
    // отключение скролла
    simulateTouch: false,

    // Бесконечная прокрутка
    loop: true,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
        // порядковый номер первого слайда
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  new Swiper('.reviews__swiper', {
    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
    },
    // Задает класс активным слайдам
    watchSlidesProgress: true,
    // Задаем класс активным слайдам
    slideVisibleClass: 'slider__slide--visible',
    // отключение скролла
    simulateTouch: false,
  });
};
