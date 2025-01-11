const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[currentIndex].querySelector('video').pause();
  slides[currentIndex].querySelector('video').currentTime = 0;

  currentIndex = (index + slides.length) % slides.length;

  slides[currentIndex].classList.add('active');
  slides[currentIndex].querySelector('video').play();
}

leftArrow.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

rightArrow.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

slides[currentIndex].classList.add('active');
slides[currentIndex].querySelector('video').play();