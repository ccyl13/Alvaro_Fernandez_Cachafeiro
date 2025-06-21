const testimonials = [
  {
    nombre: "Carlota González Vega",
    cargo: "ADE + Business Analytics – 16 junio 2025",
    texto: "He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral. Me ha ayudado mucho con sus consejos, su cercanía y su actitud positiva. Siempre dispuesto a ayudar, incluso cuando el proceso ha terminado.",
    estrellas: 5,
  },
  {
    nombre: "Thomas O’neil Álvarez",
    cargo: "ETHICAL HACKER | RED TEAM – 31 mayo 2025",
    texto: "Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año... Se nota que ama lo que hace. Desde luego contar con Álvaro es signo de garantía.",
    estrellas: 5,
  },
];

let current = 0;

function mostrarTestimonial() {
  const contenedor = document.getElementById("testimonial-slide");
  const t = testimonials[current];
  contenedor.innerHTML = `
    <div class="testimonial">
      <div class="testimonial-name">
        ${t.nombre} <span class="stars">${"★".repeat(t.estrellas)}</span>
      </div>
      <div class="testimonial-cargo">${t.cargo}</div>
      <div class="testimonial-text">“${t.texto}”</div>
    </div>
  `;
  current = (current + 1) % testimonials.length;
}

mostrarTestimonial();
setInterval(mostrarTestimonial, 7000);
