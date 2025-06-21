const slides = [
  {
    nombre: "Thomas O’neil Álvarez",
    puesto: "ETHICAL HACKER | RED TEAM – 31 mayo 2025",
    texto: `"Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año. Se nota que ama lo que hace. Desde luego contar con Álvaro es signo de garantía."`
  },
  {
    nombre: "Lola Fernández Fuentes",
    puesto: "RPA Developer – 16 junio 2025",
    texto: `"Álvaro ha gestionado mi candidatura para un proceso de selección. Gracias a su forma de trabajar, el proceso ha sido claro, rápido y sencillo."`
  },
  {
    nombre: "Carlota González Vega",
    puesto: "ADE + Business Analytics – 16 junio 2025",
    texto: `"He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral. Me ha ayudado mucho con sus consejos, su cercanía y su actitud positiva. Siempre dispuesto a ayudar, incluso cuando el proceso ha terminado."`
  },
  {
    nombre: "Maria Barrero Martínez",
    puesto: "Técnico de selección en Ayesa – 11 junio 2025",
    texto: `"Tengo la suerte de trabajar codo con codo con Álvaro. Es una persona empática, que sabe cómo conectar con los candidatos y transmitir confianza."`
  },
  {
    nombre: "Óscar Fernández García",
    puesto: "Data Management Consultant – 9 abril 2025",
    texto: `"Tuve la oportunidad de obtener asesoramiento por parte de Álvaro en el área de recursos humanos. Su guía fue clave para mi transición profesional."`
  }
];

let index = 0;

function showSlide() {
  const container = document.getElementById("testimonial-slide");
  const slide = slides[index];
  container.innerHTML = `
    <h3>${slide.nombre}</h3>
    <p class="puesto">${slide.puesto}</p>
    <p class="texto">${slide.texto}</p>
    <div class="stars">★★★★★</div>
  `;
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 6000);
window.onload = showSlide;
