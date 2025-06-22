const recommendations = [
  { name: "Thomas O’Neil", text: "Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año..." },
  { name: "Lola Fernández Fuentes", text: "Álvaro ha gestionado mi candidatura para un proceso de selección en Ayesa..." },
  { name: "Carlota González Vega", text: "He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral..." },
  { name: "Maria Barrero", text: "Tengo la suerte de haber trabajado codo con codo con Álvaro..." },
  { name: "Fabiola Grijalva", text: "Álvaro Fernández es un profesional excepcional en el campo del reclutamiento..." },
  { name: "Óscar Fernández", text: "Tuve la oportunidad de obtener asesoramiento de Álvaro en recursos humanos..." },
  { name: "João Nunes", text: "Tuve la suerte de ser contactado por Álvaro en LinkedIn..." },
  { name: "David de la Cruz", text: "Gran profesional, comprometido y siempre apoyando..." },
  { name: "Sita Narisao", text: "Fui contactado por Álvaro para un puesto de trabajo..." },
  { name: "Ismael Garrido", text: "Todo el proceso con Álvaro ha sido genial desde el primer contacto..." },
  { name: "Lucía Manso", text: "Álvaro destaca especialmente en procesos de selección de personal..." },
  { name: "Luis Cancio", text: "Gracias a Álvaro he entrado a trabajar en Ayesa..." },
  { name: "María Avilés", text: "Trabajar día a día con Álvaro es solo disfrutar de cosas buenas..." },
  { name: "Ángel García Garbaya", text: "Destaca especialmente su compromiso y liderazgo en cada proceso de selección..." },
  { name: "José Miguel Aranda", text: "Álvaro es un excelente profesional del ámbito de la Atracción de Talento..." },
  { name: "Armando Camacho", text: "Álvaro es una persona excepcional, y aún mejor profesional..." },
  { name: "Mayte Montero", text: "Tuve la suerte de trabajar con Álvaro y pude comprobar su excelente actitud..." },
  { name: "Aníbal Álvarez", text: "Desde que nos formamos juntos, siempre he reconocido sus buenas prácticas..." },
  { name: "María Queipo", text: "Trabajar con Álvaro en selección IT en Ayesa es un lujo..." },
  { name: "Ana María Romero", text: "Excelente compañero de sector, comprometido y muy profesional..." },
  { name: "Marta De la Vega", text: "Profesional muy polivalente y comprometido con su trabajo..." },
  { name: "Daniel Herreros", text: "El trato con él ha sido muy bueno y muy rápido..." },
  { name: "Iván Barros", text: "Lo he conocido al inicio de mi carrera laboral y me ha acompañado..." },
  { name: "Alejandro Suárez", text: "Solo puedo decir que es un excelente profesional..." },
  { name: "Ángel Soutullo", text: "Siempre atento en todo momento con mi proceso de selección..." },
  { name: "Laura Sánchez", text: "Gracias a él obtuve mi primera oportunidad profesional..." },
  { name: "Fernando Álvarez", text: "Destacaría de él su capacidad para adaptarse rápidamente..." },
  { name: "Jose María García", text: "Durante nuestra etapa académica, su actitud fue clave..." },
  { name: "Jose Luis Suárez", text: "Trabajador, generoso y buen compañero..." },
  { name: "Eduardo Vázquez", text: "Estoy seguro de que Álvaro puede ayudar a muchos más estudiantes..." },
  { name: "José Miguel Ruiz", text: "Aunque hayan tenido poca relación, se le nota su implicación..." },
  { name: "Lucia Sarasola", text: "Su visión estratégica resulta muy inspiradora..." }
];

let currentIndex = 0;
const textElement = document.getElementById("recommendation-text");
const nameElement = document.getElementById("reco-nombre");

function showRecommendation(index) {
  const reco = recommendations[index];
  textElement.textContent = `“${reco.text}”`;
  nameElement.textContent = `⭐ ${reco.name}`;
}

function nextRecommendation() {
  currentIndex = (currentIndex + 1) % recommendations.length;
  showRecommendation(currentIndex);
}

setInterval(nextRecommendation, 5000);
showRecommendation(currentIndex);

document.getElementById("email-btn").onclick = () => {
  alert(document.getElementById("email").textContent);
};
document.getElementById("phone-btn").onclick = () => {
  alert(document.getElementById("phone").textContent);
};

// Fondo animado ADN estilo canvas
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#f0db4f';
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
}
drawParticles();
