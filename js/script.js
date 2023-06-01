let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var feedback_slider = new Swiper(".feedback", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
		nextEl: ".feedback-button-next",
		prevEl: ".feedback-button-prev",
	},
  direction: getDirection(),
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  return window.innerWidth < 768 ? 'vertical' : 'horizontal';
}

baguetteBox.run('.tz-gallery');