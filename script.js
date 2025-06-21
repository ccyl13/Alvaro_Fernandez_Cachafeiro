const emailBtn = document.getElementById('emailBtn');
const phoneBtn = document.getElementById('phoneBtn');
const emailInfo = document.getElementById('emailInfo');
const phoneInfo = document.getElementById('phoneInfo');

emailBtn.addEventListener('click', () => {
  emailInfo.style.display = 'block';
  setTimeout(() => {
    emailInfo.style.display = 'none';
  }, 10000);
});

phoneBtn.addEventListener('click', () => {
  phoneInfo.style.display = 'block';
  setTimeout(() => {
    phoneInfo.style.display = 'none';
  }, 10000);
});

// Recomendaciones rotatorias
const recommendations = [
  {
    name: "Carlota González Vega",
    stars: 5,
    title: "ADE + Business Analytics – 16 junio 2025",
    text: "He tenido la suerte de contar con Álvaro como coach..."
  },
  {
    name: "Thomas O'neil Álvarez",
    stars: 5,
    title: "ETHICAL HACKER | 31 de mayo de 2025",
    text: "Tuve el honor de coincidir con este pedazo de profesional..."
  },
  // Aquí continúa con el resto de recomendaciones completas que me pasaste...
];

let currentIndex = 0;
const nameEl = document.getElementById('rec-name');
const titleEl = document.getElementById('rec-title');
const textEl = document.getElementById('rec-text');
const box = document.querySelector('.recommendation');

function updateRecommendation() {
  const rec = recommendations[currentIndex];
  box.classList.add('hide');
  setTimeout(() => {
    nameEl.textContent = rec.name;
    titleEl.textContent = rec.title;
    textEl.textContent = `\"${rec.text}\"`;
    box.classList.remove('hide');
  }, 500);
  currentIndex = (currentIndex + 1) % recommendations.length;
}

setInterval(updateRecommendation, 6000);
updateRecommendation();
