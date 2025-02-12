document.addEventListener("DOMContentLoaded", function () {
    // Carga del menú y acciones de los botones de idioma
    fetch('modulo/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Manejo de la interacción con los botones de idioma
            const langButtons = document.querySelectorAll("[data-language]");
            const textsToChange = document.querySelectorAll("[data-section]");
            const languageSelectorButton = document.querySelector(".language-selector .dropdown-toggle");

            langButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    // Verifica si el atributo data-language está presente
                    const language = button.dataset.language;
                    if (!language) return; // Si no hay un idioma, no hace nada

                    // Cambia el texto del botón para reflejar el idioma seleccionado
                    languageSelectorButton.textContent = language === "es" ? "ES ▾" : "EN ▾";

                    fetch(`../languages/${language}.json`)
                        .then(res => res.json())
                        .then(data => {
                            textsToChange.forEach((el) => {
                                const section = el.dataset.section;
                                const value = el.dataset.value;

                                // Verifica que las claves existan en el JSON
                                if (data[section] && data[section][value]) {
                                    el.textContent = data[section][value]; // Mejor usar textContent en lugar de innerHTML
                                } else {
                                    console.warn(`No se encontró la clave para ${section}.${value}`);
                                    el.textContent = ''; // Opcional: muestra un texto por defecto
                                }
                            });
                        })
                        .catch(error => console.error('Error al cargar el archivo de idioma:', error));

                    // Cierra el menú desplegable después de seleccionar el idioma
                    const dropdown = document.querySelector(".language-selector .dropdown");
                    dropdown.classList.remove("active");
                });
            });

            // Configuración de dropdowns (menús desplegables)
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

    // Función general para manejar el clic en las tarjetas
    function setupCardClick(cardClass, url) {
        const card = document.querySelector(cardClass);

        if (card) {
            card.style.cursor = "pointer"; // Cambia el cursor para indicar que es clickeable

            card.addEventListener("click", function () {
                window.location.href = url;
            });
        }
    }

    // Configura las tarjetas con las clases y URLs correspondientes
    setupCardClick(".servicio.outsourcing", "outsourcing.html");
    setupCardClick(".servicio.delivery", "delivery_center.html");
});
