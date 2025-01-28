  // Función para animar los contadores
  function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let current = start;
    const increment = Math.ceil((end - start) / (duration / 50));
    const step = () => {
      current += increment;
      if (current >= end) {
        current = end;
        obj.textContent = "+" + current;
      } else {
        obj.textContent = "+" + current;
        requestAnimationFrame(step);
      }
    };
    step();
  }

  // Configuración de Intersection Observer
  document.addEventListener("DOMContentLoaded", () => {
    const countersStarted = false;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          animateCounter("counter1", 0, 580, 4000);
          animateCounter("counter2", 0, 9, 4000);
          animateCounter("counter3", 0, 70, 4000);
          animateCounter("counter4", 0, 17, 4000);
          observer.disconnect(); // Dejar de observar una vez que se ejecuta
        }
      });
    }, {
      threshold: 0.5 // Ejecuta cuando el 50% del contenedor es visible
    });

    const counterSection = document.getElementById("counter-section");
    observer.observe(counterSection);
  });