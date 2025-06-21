// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto cambiar cada 6 segundos
setInterval(nextSlide, 6000);

// Mostrar la primera slide inicialmente
showSlide(currentSlide);
