const recommendations = [
  {
    name: "Thomas O’Neil",
    position: "Top 1 en LinkedIn España",
    date: "Enero 2024",
    text: "Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año..."
  },
  {
    name: "Lola Fernández Fuentes",
    position: "Candidata seleccionada en Ayesa",
    date: "Febrero 2024",
    text: "Álvaro ha gestionado mi candidatura para un proceso de selección en Ayesa..."
  },
  // ... (resto de recomendaciones completas como antes)
  {
    name: "Lucia Sarasola",
    position: "Talent Partner",
    date: "Junio 2025",
    text: "Su visión estratégica resulta muy inspiradora..."
  }
];

let currentIndex = 0;
const textEl = document.getElementById("recommendation-text");
const nameEl = document.getElementById("recommendation-name");
const positionEl = document.getElementById("recommendation-position");

function showRecommendation(index) {
  const reco = recommendations[index];
  textEl.textContent = `“${reco.text}”`;
  nameEl.textContent = reco.name;
  positionEl.textContent = `${reco.position} — ${reco.date}`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % recommendations.length;
  showRecommendation(currentIndex);
}, 7000);

showRecommendation(currentIndex);

document.getElementById("email-btn").onclick = () => {
  alert(document.getElementById("email").textContent);
};
document.getElementById("phone-btn").onclick = () => {
  alert(document.getElementById("phone").textContent);
};

// Fondo animado tipo ADN
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;
function drawDNA() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < canvas.height; i += 10) {
    const x = Math.sin(i * 0.01 + t) * 100 + canvas.width / 2;
    const x2 = Math.sin(i * 0.01 + t + Math.PI) * 100 + canvas.width / 2;
    ctx.beginPath();
    ctx.moveTo(x, i);
    ctx.lineTo(x2, i);
    ctx.strokeStyle = "#f0db4f";
    ctx.stroke();
  }
  t += 0.05;
  requestAnimationFrame(drawDNA);
}
drawDNA();
