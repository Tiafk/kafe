var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    loop:false,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 5,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    610: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 5,
    },
  }
});

const video = document.querySelector('.my-video');
const playButton = document.querySelector('.play');

video.addEventListener('click', () => {
  if (video.paused) {
    video.setAttribute('controls', true);
  } else {
    video.setAttribute('controls', false);
  }
});

// При нажатии на кнопку воспроизведения
playButton.addEventListener('click', () => {
  playButton.style.display = 'none';      // Скрыть кнопку
  video.setAttribute('controls', true);   // Показать controls
  video.play();                           // Запустить видео
});

// Когда видео на паузе — показать кнопку
video.addEventListener('pause', () => {
  playButton.style.display = 'inline-flex';
});

// Когда видео воспроизводится — скрыть кнопку
video.addEventListener('play', () => {
  playButton.style.display = 'none';
});

video.play();   