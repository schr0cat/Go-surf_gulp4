import { auto } from '@popperjs/core';
import Swiper, { Navigation, EffectFade} from 'swiper';

Swiper.use([Navigation, EffectFade]);

const heroSlider = new Swiper('.hero__slider', {
  allowTouchMove: false,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
});


const surfSlider = new Swiper('.surf-cards__slider', {
  // slidesPerView: 4,
  // slidesPerGroup: 2,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 25,
    },

    768: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.surf__next',
    prevEl: '.surf__prev',
  },
});


const travelSlider = new Swiper('.travel__slider', {
  allowTouchMove: false,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.travel__next',
    prevEl: '.travel__prev',
  },
});


const sleepSlider = new Swiper('.sleep__slider', {
  allowTouchMove: false,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.sleep__next',
    prevEl: '.sleep__prev',
  },
});


const shopSlider = new Swiper('.shop__slider', {
  allowTouchMove: false,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.shop__next',
    prevEl: '.shop__prev',
  },
});
