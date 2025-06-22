// Recomendaciones completas
const recommendations = [
  `“Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año...” – Thomas O’Neil ★★★★★`,
  `“Álvaro ha gestionado mi candidatura para un proceso de selección en Ayesa...” – Lola Fernández Fuentes ★★★★★`,
  `“He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral...” – Carlota González Vega ★★★★★`,
  `“Tengo la suerte de haber trabajado codo con codo con Álvaro...” – Maria Barrero ★★★★★`,
  `“Álvaro Fernández es un profesional excepcional en el campo del reclutamiento...” – Fabiola Grijalva ★★★★★`,
  `“Tuve la oportunidad de obtener asesoramiento de Álvaro en recursos humanos...” – Óscar Fernández ★★★★★`,
  `“Tuve la suerte de ser contactado por Álvaro en LinkedIn...” – João Nunes ★★★★★`,
  `“Gran profesional, comprometido y siempre apoyando...” – David de la Cruz ★★★★★`,
  `“Fui contactado por Álvaro para un puesto de trabajo...” – Sita Narisao ★★★★★`,
  `“Todo el proceso con Álvaro ha sido genial desde el primer contacto...” – Ismael Garrido ★★★★★`,
  `“Álvaro destaca especialmente en procesos de selección de personal...” – Lucía Manso ★★★★★`,
  `“Gracias a Álvaro he entrado a trabajar en Ayesa...” – Luis Cancio ★★★★★`,
  `“Trabajar día a día con Álvaro es solo disfrutar de cosas buenas...” – María Avilés ★★★★★`,
  `“Destaca especialmente su compromiso y liderazgo en cada proceso de selección...” – Ángel García Garbaya ★★★★★`,
  `“Álvaro es un excelente profesional del ámbito de la Atracción de Talento...” – José Miguel Aranda ★★★★★`,
  `“Álvaro es una persona excepcional, y aún mejor profesional...” – Armando Camacho ★★★★★`,
  `“Tuve la suerte de trabajar con Álvaro y pude comprobar su excelente actitud...” – Mayte Montero ★★★★★`,
  `“Desde que nos formamos juntos, siempre he reconocido sus buenas prácticas...” – Aníbal Álvarez ★★★★★`,
  `“Trabajar con Álvaro en selección IT en Ayesa es un lujo...” – María Queipo ★★★★★`,
  `“Excelente compañero de sector, comprometido y muy profesional...” – Ana María Romero ★★★★★`,
  `“Profesional muy polivalente y comprometido con su trabajo...” – Marta De la Vega ★★★★★`,
  `“El trato con él ha sido muy bueno y muy rápido...” – Daniel Herreros ★★★★★`,
  `“Lo he conocido al inicio de mi carrera laboral y me ha acompañado...” – Iván Barros ★★★★★`,
  `“Solo puedo decir que es un excelente profesional...” – Alejandro Suárez ★★★★★`,
  `“Siempre atento en todo momento con mi proceso de selección...” – Ángel Soutullo ★★★★★`,
  `“Gracias a él obtuve mi primera oportunidad profesional...” – Laura Sánchez ★★★★★`,
  `“Destacaría de él su capacidad para adaptarse rápidamente...” – Fernando Álvarez ★★★★★`,
  `“Durante nuestra etapa académica, su actitud fue clave...” – Jose María García ★★★★★`,
  `“Trabajador, generoso y buen compañero...” – Jose Luis Suárez ★★★★★`,
  `“Estoy seguro de que Álvaro puede ayudar a muchos más estudiantes...” – Eduardo Vázquez ★★★★★`,
  `“Aunque hayan tenido poca relación, se le nota su implicación...” – José Miguel Ruiz ★★★★★`,
  `“Su visión estratégica resulta muy inspiradora...” – Lucia Sarasola ★★★★★`
];

let current = 0;
const textElement = document.getElementById("recommendation-text");
function showRecommendation() {
  textElement.innerHTML = recommendations[current];
  current = (current + 1) % recommendations.length;
}
setInterval(showRecommendation, 6000);
showRecommendation(); // Mostrar la primera al cargar

// Botón de Email
document.getElementById("email-btn").addEventListener("click", () => {
  const email = document.getElementById("email");
  email.style.display = "block";
  setTimeout(() => email.style.display = "none", 10000);
});

// Botón de Teléfono
document.getElementById("phone-btn").addEventListener("click", () => {
  const phone = document.getElementById("phone");
  phone.style.display = "block";
  setTimeout(() => phone.style.display = "none", 10000);
});

// Fondo animado estilo conexiones neuronales
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let points = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 80; i++) {
  points.push({
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    vx: random(-0.5, 0.5),
    vy: random(-0.5, 0.5),
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fill();

    for (let q of points) {
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();
