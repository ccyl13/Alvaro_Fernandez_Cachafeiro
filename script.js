// script.js

// Fondo animado de conexiones neuronales
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
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

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ccc';
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Carrusel de recomendaciones
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

// Mostrar teléfono y email por 10 segundos
function revealPhone() {
  const phone = document.getElementById('phone');
  phone.style.display = 'block';
  setTimeout(() => {
    phone.style.display = 'none';
  }, 10000);
}

function revealEmail() {
  const email = document.createElement('p');
  email.textContent = 'alfercacha@hotmail.com';
  email.style.color = '#f0db4f';
  email.style.fontWeight = 'bold';
  email.style.marginTop = '1rem';
  email.id = 'temp-email';
  document.querySelector('.contact').appendChild(email);
  setTimeout(() => {
    email.remove();
  }, 10000);
}

// Sobrescribe botón de email para mostrar el correo
const emailButton = document.querySelector('.contact-buttons button:nth-child(2)');
emailButton.onclick = revealEmail;
