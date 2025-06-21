let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function autoSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(autoSlide, 6000); // Cambia de recomendación cada 6 segundos

showSlide(current);

