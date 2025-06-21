// Fondo dinámico estilo conexiones neuronales
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j];
      let dx = p.x - p2.x;
      let dy = p.y - p2.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();

// Recomendaciones en slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

// Mostrar teléfono
function revealPhone() {
  const phone = document.getElementById("phone");
  phone.style.display = "block";
}
