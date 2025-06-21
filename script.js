// Fondo dinámico: conexiones neuronales
const canvas = document.createElement("canvas");
canvas.id = "background";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

let width, height, points = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  points = Array.from({ length: 100 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7,
  }));
}
resize();
window.addEventListener("resize", resize);

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f0db4f";
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = "rgba(240, 219, 79, 0.2)";
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const a = points[i], b = points[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}
animate();

// Mostrar y ocultar teléfono/email
function toggleContact(id, value) {
  const element = document.getElementById(id);
  element.textContent = value;
  element.classList.remove("hidden");
  setTimeout(() => {
    element.classList.add("hidden");
  }, 10000);
}

// Carrusel de recomendaciones
const recommendations = [
  `“Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año...” – Thomas O’Neil`,
  `“Álvaro ha gestionado mi candidatura para un proceso de selección en Ayesa...” – Lola Fernández Fuentes`,
  `“He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral...” – Carlota González Vega`,
  `“Tengo la suerte de haber trabajado codo con codo con Álvaro...” – Maria Barrero`,
  `“Álvaro Fernández es un profesional excepcional en el campo del reclutamiento...” – Fabiola Grijalva`,
  `“Tuve la oportunidad de obtener asesoramiento de Álvaro en recursos humanos...” – Óscar Fernández`,
  `“Tuve la suerte de ser contactado por Álvaro en LinkedIn...” – João Nunes`,
  `“Gran profesional, comprometido y siempre apoyando...” – David de la Cruz`,
  `“Fui contactado por Álvaro para un puesto de trabajo...” – Sita Narisao`,
  `“Todo el proceso con Álvaro ha sido genial desde el primer contacto...” – Ismael Garrido`,
  `“Álvaro destaca especialmente en procesos de selección de personal...” – Lucía Manso`,
  `“Gracias a Álvaro he entrado a trabajar en Ayesa...” – Luis Cancio`,
  `“Trabajar día a día con Álvaro es solo disfrutar de cosas buenas...” – María Avilés`,
  `“Destaca especialmente su compromiso y liderazgo en cada proceso de selección...” – Ángel García Garbaya`,
  `“Álvaro es un excelente profesional del ámbito de la Atracción de Talento...” – José Miguel Aranda`,
  `“Álvaro es una persona excepcional, y aún mejor profesional...” – Armando Camacho`,
  `“Tuve la suerte de trabajar con Álvaro y pude comprobar su excelente actitud...” – Mayte Montero`,
  `“Desde que nos formamos juntos, siempre he reconocido sus buenas prácticas...” – Aníbal Álvarez`,
  `“Trabajar con Álvaro en selección IT en Ayesa es un lujo...” – María Queipo`,
  `“Excelente compañero de sector, comprometido y muy profesional...” – Ana María Romero`,
  `“Profesional muy polivalente y comprometido con su trabajo...” – Marta De la Vega`,
  `“El trato con él ha sido muy bueno y muy rápido...” – Daniel Herreros`,
  `“Lo he conocido al inicio de mi carrera laboral y me ha acompañado...” – Iván Barros`,
  `“Solo puedo decir que es un excelente profesional...” – Alejandro Suárez`,
  `“Siempre atento en todo momento con mi proceso de selección...” – Ángel Soutullo`,
  `“Gracias a él obtuve mi primera oportunidad profesional...” – Laura Sánchez`,
  `“Destacaría de él su capacidad para adaptarse rápidamente...” – Fernando Álvarez`,
  `“Durante nuestra etapa académica, su actitud fue clave...” – Jose María García`,
  `“Trabajador, generoso y buen compañero...” – Jose Luis Suárez`,
  `“Estoy seguro de que Álvaro puede ayudar a muchos más estudiantes...” – Eduardo Vázquez`,
  `“Aunque hayan tenido poca relación, se le nota su implicación...” – José Miguel Ruiz`,
  `“Su visión estratégica resulta muy inspiradora...” – Lucia Sarasola`
];

let currentIndex = 0;
const recEl = document.getElementById("recommendations");

function rotateRecommendations() {
  recEl.style.opacity = 0;
  setTimeout(() => {
    recEl.textContent = recommendations[currentIndex];
    recEl.style.opacity = 1;
    currentIndex = (currentIndex + 1) % recommendations.length;
  }, 500);
}
setInterval(rotateRecommendations, 6000);
rotateRecommendations();
