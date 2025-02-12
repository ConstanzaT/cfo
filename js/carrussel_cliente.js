document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.getElementById("carousel-track");
    const imageCount = 77; // Numero total de imagenes
    // Agregado de imagenes dinamicamente
    for (let i = 1; i <= imageCount; i++) {
      const img = document.createElement("img");
      img.src = `img/clientes/image${i}.svg`;
      img.alt = `Cliente ${i}`;
      img.loading = "lazy"; // 
      carouselTrack.appendChild(img);
    }
  });