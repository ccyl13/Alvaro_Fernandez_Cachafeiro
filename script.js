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
const recommendationText = document.getElementById('recommendation-text');

function showRecommendation() {
  recommendationText.textContent = recommendations[currentIndex];
  currentIndex = (currentIndex + 1) % recommendations.length;
}

setInterval(showRecommendation, 6000);
showRecommendation();

function showTempText(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
  setTimeout(() => {
    element.style.display = 'none';
  }, 10000);
}

document.getElementById('phone-btn').addEventListener('click', () => {
  showTempText('phone');
});

document.getElementById('email-btn').addEventListener('click', () => {
  showTempText('email');
});
