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



// Seleccionar todas las tarjetas con la clase 'card-item'
const cards = document.querySelectorAll('.card-item');

// Configurar el IntersectionObserver para observar cuando las tarjetas son visibles
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Agregar la clase para la animación cuando la tarjeta esté visible
        entry.target.classList.add('animate-card');
        observer.unobserve(entry.target); // Dejar de observar después de animar
      }
    });
  },
  { threshold: 0.2 } // Activar la animación cuando el 20% de la tarjeta sea visible
);

// Aplicar el observador a cada tarjeta
cards.forEach((card) => {
  observer.observe(card);
});


 // Carrusel automático
 let index = 0;
 const slide = document.querySelectorAll(".carousel-slide");

 function showSlide() {
   slides.forEach((slide, i) => {
     slide.style.transform = `translateX(-${index * 100}%)`;
   });
   index = (index + 1) % slide.length;
 }

 setInterval(showSlide, 3000); // Cambiar cada 3 segundos

 document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Agregar la clase para animar al entrar en el viewport
          entry.target.classList.add("animate");
        } else {
          // Quitar la clase para volver al estado inicial al salir del viewport
          entry.target.classList.remove("animate");
        }
      });
    },
    { threshold: 0.2 } // Activar cuando el 20% del elemento sea visible
  );

  scrollElements.forEach((element) => scrollObserver.observe(element));
});