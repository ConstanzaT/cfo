
document.addEventListener("DOMContentLoaded", function () {
    fetch('modulo/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            
    const dropdowns = document.querySelectorAll(".dropdown-toggle");
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
  
        let parent = this.parentElement; // Encuentra el <li> contenedor
  
        // Cierra otros menús antes de abrir el nuevo
        document.querySelectorAll(".dropdown").forEach(item => {
          if (item !== parent) {
            item.classList.remove("active");
          }
        });
  
        // Alterna la clase "active" en el menú actual
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
     
        })
        .catch(error => console.error('Error cargando el menú:', error));
});


