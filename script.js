// Fondo de conexiones neuronales animado
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 80;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 2;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 1;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animateBackground);
}

initParticles();
animateBackground();

// Manejo de teléfono y correo
function revealPhone() {
  const phone = document.getElementById("phone");
  phone.style.display = "block";
  setTimeout(() => {
    phone.style.display = "none";
  }, 10000);
}

function revealEmail() {
  const email = document.getElementById("email");
  email.style.display = "block";
  setTimeout(() => {
    email.style.display = "none";
  }, 10000);
}

// Recomendaciones automáticas
const recommendations = [
  "“Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año...” – Thomas O’Neil",
  "“Álvaro ha gestionado mi candidatura para un proceso de selección en Ayesa...” – Lola Fernández Fuentes",
  "“He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral...” – Carlota González Vega",
  "“Tengo la suerte de haber trabajado codo con codo con Álvaro...” – Maria Barrero",
  "“Álvaro Fernández es un profesional excepcional en el campo del reclutamiento...” – Fabiola Grijalva",
  "“Tuve la oportunidad de obtener asesoramiento de Álvaro en recursos humanos...” – Óscar Fernández",
  "“Tuve la suerte de ser contactado por Álvaro en LinkedIn...” – João Nunes",
  "“Gran profesional, comprometido y siempre apoyando...” – David de la Cruz",
  "“Fui contactado por Álvaro para un puesto de trabajo...” – Sita Narisao",
  "“Todo el proceso con Álvaro ha sido genial desde el primer contacto...” – Ismael Garrido",
  "“Álvaro destaca especialmente en procesos de selección de personal...” – Lucía Manso",
  "“Gracias a Álvaro he entrado a trabajar en Ayesa...” – Luis Cancio",
  "“Trabajar día a día con Álvaro es solo disfrutar de cosas buenas...” – María Avilés",
  "“Destaca especialmente su compromiso y liderazgo en cada proceso de selección...” – Ángel García Garbaya",
  "“Álvaro es un excelente profesional del ámbito de la Atracción de Talento...” – José Miguel Aranda",
  "“Álvaro es una persona excepcional, y aún mejor profesional...” – Armando Camacho",
  "“Tuve la suerte de trabajar con Álvaro y pude comprobar su excelente actitud...” – Mayte Montero",
  "“Desde que nos formamos juntos, siempre he reconocido sus buenas prácticas...” – Aníbal Álvarez",
  "“Trabajar con Álvaro en selección IT en Ayesa es un lujo...” – María Queipo",
  "“Excelente compañero de sector, comprometido y muy profesional...” – Ana María Romero",
  "“Profesional muy polivalente y comprometido con su trabajo...” – Marta De la Vega",
  "“El trato con él ha sido muy bueno y muy rápido...” – Daniel Herreros",
  "“Lo he conocido al inicio de mi carrera laboral y me ha acompañado...” – Iván Barros",
  "“Solo puedo decir que es un excelente profesional...” – Alejandro Suárez",
  "“Siempre atento en todo momento con mi proceso de selección...” – Ángel Soutullo",
  "“Gracias a él obtuve mi primera oportunidad profesional...” – Laura Sánchez",
  "“Destacaría de él su capacidad para adaptarse rápidamente...” – Fernando Álvarez",
  "“Durante nuestra etapa académica, su actitud fue clave...” – Jose María García",
  "“Trabajador, generoso y buen compañero...” – Jose Luis Suárez",
  "“Estoy seguro de que Álvaro puede ayudar a muchos más estudiantes...” – Eduardo Vázquez",
  "“Aunque hayan tenido poca relación, se le nota su implicación...” – José Miguel Ruiz",
  "“Su visión estratégica resulta muy inspiradora...” – Lucia Sarasola"
];

let currentIndex = 0;
function updateRecommendation() {
  const container = document.getElementById('recommendation-text');
  container.innerText = recommendations[currentIndex];
  currentIndex = (currentIndex + 1) % recommendations.length;
}
setInterval(updateRecommendation, 6000);
window.onload = updateRecommendation;
