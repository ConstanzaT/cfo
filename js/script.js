document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todas las imágenes del carrusel
  const carouselImages = document.querySelectorAll('.carousel img');
  let currentIndex = 0;

  function updateCarousel() {
    carouselImages.forEach((img, index) => {
      img.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 3000);

  updateCarousel();

  // Animación de tarjetas al hacer scroll
  const cards = document.querySelectorAll('.card-item');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-card');
          observer.unobserve(entry.target); // Dejar de observar después de animar
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  // Carrusel automático
  let index = 0;
  const carouselSlides = document.querySelectorAll(".carousel-slide");

  function showSlide() {
    carouselSlides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % carouselSlides.length;
  }

  setInterval(showSlide, 3000); // Cambiar cada 3 segundos

  // Animación de elementos al hacer scroll
  const scrollElements = document.querySelectorAll(".scroll-animate");
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    { threshold: 0.2 }
  );

  scrollElements.forEach((element) => scrollObserver.observe(element));

  // Menú desplegable al hacer clic
  const dropdowns = document.querySelectorAll(".dropdown-toggle");

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      let parent = this.parentElement;

      // Cierra otros menús abiertos
      document.querySelectorAll(".dropdown").forEach(item => {
        if (item !== parent) {
          item.classList.remove("active");
        }
      });

      // Alternar clase "active"
      parent.classList.toggle("active");
    });
  });

  // Cierra el menú si se hace clic fuera
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach(item => {
        item.classList.remove("active");
      });
    }
  });
});


