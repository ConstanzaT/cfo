const slides = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
  });
}

setInterval(() => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}, 3000);

updateCarousel();



