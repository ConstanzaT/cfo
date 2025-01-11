
document.addEventListener("DOMContentLoaded", function () {
    fetch('modulo/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;

            const hamburgerMenu = document.querySelector(".hamburger-menu");
            const mobileMenu = document.querySelector(".mobile-menu");
            const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
            const closeMenuButton = document.querySelector(".close-menu");
            const navLinks = document.querySelector(".nav-links");

            if (!hamburgerMenu || !mobileMenu || !mobileMenuOverlay || !closeMenuButton || !navLinks) {
                console.error("Faltan elementos necesarios para el menú.");
                return;
            }

            // Función para manejar el estado del menú basado en el tamaño de la ventana
            const handleResponsiveMenu = () => {
                const isMobile = window.matchMedia("(max-width: 768px)").matches;

                if (isMobile) {
                    navLinks.classList.add("hidden");
                    hamburgerMenu.classList.remove("hidden");
                } else {
                    navLinks.classList.remove("hidden");
                    hamburgerMenu.classList.add("hidden");
                    mobileMenu.classList.remove("active");
                    mobileMenuOverlay.classList.remove("active");
                }
            };

            // Escucha los cambios de tamaño de la ventana
            window.addEventListener("resize", handleResponsiveMenu);

            // Ejecuta la función al cargar la página
            handleResponsiveMenu();

            // Eventos del menú móvil
            hamburgerMenu.addEventListener("click", () => {
                mobileMenu.classList.add("active");
                mobileMenuOverlay.classList.add("active");
            });

            closeMenuButton.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                mobileMenuOverlay.classList.remove("active");
            });

            mobileMenuOverlay.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                mobileMenuOverlay.classList.remove("active");
            });
        })
        .catch(error => console.error('Error cargando el menú:', error));
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const modal = document.querySelector(".mobile-menu");
    const modalOverlay = document.querySelector(".mobile-menu-overlay");
    const openModalButton = document.querySelector(".hamburger-menu");
    const closeModalButton = document.querySelector(".close-menu");

    openModalButton.addEventListener("click", () => {
        modal.classList.add("active");
        modalOverlay.classList.add("active");
        navbar.classList.add("modal-active");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("active");
        modalOverlay.classList.remove("active");
        navbar.classList.remove("modal-active");
    });

    modalOverlay.addEventListener("click", () => {
        modal.classList.remove("active");
        modalOverlay.classList.remove("active");
        navbar.classList.remove("modal-active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
    const closeMenuButton = document.querySelector(".close-menu");

    // Open the mobile menu
    hamburgerMenu.addEventListener("click", function () {
        mobileMenu.classList.add("active");
        mobileMenuOverlay.classList.add("active");
    });

    // Close the mobile menu
    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        mobileMenuOverlay.classList.remove("active");
    });

    // Close the menu when clicking on the overlay
    mobileMenuOverlay.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        mobileMenuOverlay.classList.remove("active");
    });
});