const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function updateSliderPosition() {
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3000);
