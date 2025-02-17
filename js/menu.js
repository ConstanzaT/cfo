document.addEventListener("DOMContentLoaded", function () {
    // Carga del menú y acciones de los botones de idioma
    fetch('modulo/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Obtener los botones de idioma y los textos a cambiar
            const langButtons = document.querySelectorAll("[data-language]");
            const textsToChange = document.querySelectorAll("[data-section]");
            const languageSelectorButton = document.querySelector(".language-selector .dropdown-toggle");

            // Función para manejar la selección del idioma
            function selectLanguage(language) {
                languageSelectorButton.textContent = language === "es" ? "ES ▾" : "EN ▾";

                // Ocultar todas las opciones de idiomas
                langButtons.forEach(b => b.style.display = "none");

                // Muestra solo el idioma no seleccionado
                langButtons.forEach(b => {
                    if (b.dataset.language !== language) {
                        b.style.display = "block"; // Mostrar solo la opción no seleccionada
                    }
                });

                fetch(`../languages/${language}.json`)
                    .then(res => res.json())
                    .then(data => {
                        textsToChange.forEach((el) => {
                            const section = el.dataset.section;
                            const value = el.dataset.value;

                            // Verifica que las claves existan en el JSON
                            if (data[section] && data[section][value]) {
                                el.innerHTML = data[section][value]; // Usar innerHTML para mantener las etiquetas HTML
                            } else {
                                console.warn(`No se encontró la clave para ${section}.${value}`);
                                el.innerHTML = ''; // Texto por defecto si no se encuentra la clave
                            }
                        });
                    })
                    .catch(error => console.error('Error al cargar el archivo de idioma:', error));

                // Cierra el menú desplegable después de seleccionar el idioma
                const dropdown = document.querySelector(".language-selector .dropdown");
                dropdown.classList.remove("active");
            }

            // Configura el idioma predeterminado al cargar la página
            const defaultLanguage = localStorage.getItem("language") || "es"; // Obtén el idioma guardado o 'es' por defecto
            selectLanguage(defaultLanguage);

            // Manejo de la interacción con los botones de idioma
            langButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const language = button.dataset.language;
                    if (!language) return;

                    // Guarda el idioma seleccionado en localStorage
                    localStorage.setItem("language", language);

                    selectLanguage(language);
                });
            });

            // Configuración de dropdowns
            const dropdowns = document.querySelectorAll(".dropdown-toggle");
            dropdowns.forEach(dropdown => {
                dropdown.addEventListener("click", function (e) {
                    e.preventDefault();
                    let parent = this.parentElement;

                    // Cierra otros menús antes de abrir el nuevo
                    document.querySelectorAll(".dropdown").forEach(item => {
                        if (item !== parent) {
                            item.classList.remove("active");
                        }
                    });

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

    // Función para manejar clic en las tarjetas
    function setupCardClick(cardClass, url) {
        const card = document.querySelector(cardClass);
        if (card) {
            card.style.cursor = "pointer";
            card.addEventListener("click", function () {
                window.location.href = url;
            });
        }
    }

    setupCardClick(".servicio.outsourcing", "outsourcing.html");
    setupCardClick(".servicio.delivery", "delivery_center.html");
});
