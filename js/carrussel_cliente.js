const carousel = document.getElementById('carousel');
const imageCount = 77;
const imageSrc = 'img'; // Replace with your image source

for (let i = 0; i < imageCount; i++) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = `Logo ${i + 1}`;
    carousel.appendChild(img);
}