document.addEventListener("DOMContentLoaded", function () {
  // Llamado a Hero Section
  createHeroSection('hero-container', 'Delivery Center', 'Explora nuestros servicios');
});

function createHeroSection(containerId, title, subtitle) {
  const container = document.getElementById(containerId);

  if (!container) {
      console.error(`Container with ID "${containerId}" no encontrado.`);
      return;
  }

  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');

  heroSection.innerHTML = `
      <div class="overlay-deliverycenter"></div>
      <div class="text-overlay">
          <h1>${title}</h1>
          <h2>${subtitle}</h2>
      </div>
  `;

  container.appendChild(heroSection);
}