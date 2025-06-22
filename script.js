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
  {
    name: "Carlota González Vega",
    position: "Analista de datos",
    date: "Marzo 2024",
    text: "He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral..."
  },
  {
    name: "Maria Barrero",
    position: "Consultora de RRHH",
    date: "Abril 2024",
    text: "Tengo la suerte de haber trabajado codo con codo con Álvaro..."
  },
  {
    name: "Fabiola Grijalva",
    position: "Recruiter IT",
    date: "Mayo 2024",
    text: "Álvaro Fernández es un profesional excepcional en el campo del reclutamiento..."
  },
  {
    name: "Óscar Fernández",
    position: "Candidato IT",
    date: "Mayo 2024",
    text: "Tuve la oportunidad de obtener asesoramiento de Álvaro en recursos humanos..."
  },
  {
    name: "João Nunes",
    position: "Developer Fullstack",
    date: "Junio 2024",
    text: "Tuve la suerte de ser contactado por Álvaro en LinkedIn..."
  },
  {
    name: "David de la Cruz",
    position: "Frontend Developer",
    date: "Junio 2024",
    text: "Gran profesional, comprometido y siempre apoyando..."
  },
  {
    name: "Sita Narisao",
    position: "Project Manager",
    date: "Julio 2024",
    text: "Fui contactado por Álvaro para un puesto de trabajo..."
  },
  {
    name: "Ismael Garrido",
    position: "Ingeniero de Software",
    date: "Julio 2024",
    text: "Todo el proceso con Álvaro ha sido genial desde el primer contacto..."
  },
  {
    name: "Lucía Manso",
    position: "Técnica de Selección",
    date: "Agosto 2024",
    text: "Álvaro destaca especialmente en procesos de selección de personal..."
  },
  {
    name: "Luis Cancio",
    position: "QA Tester",
    date: "Agosto 2024",
    text: "Gracias a Álvaro he entrado a trabajar en Ayesa..."
  },
  {
    name: "María Avilés",
    position: "Recruitment Partner",
    date: "Septiembre 2024",
    text: "Trabajar día a día con Álvaro es solo disfrutar de cosas buenas..."
  },
  {
    name: "Ángel García Garbaya",
    position: "Talent Acquisition",
    date: "Octubre 2024",
    text: "Destaca especialmente su compromiso y liderazgo en cada proceso de selección..."
  },
  {
    name: "José Miguel Aranda",
    position: "HR Specialist",
    date: "Octubre 2024",
    text: "Álvaro es un excelente profesional del ámbito de la Atracción de Talento..."
  },
  {
    name: "Armando Camacho",
    position: "Responsable de Selección",
    date: "Noviembre 2024",
    text: "Álvaro es una persona excepcional, y aún mejor profesional..."
  },
  {
    name: "Mayte Montero",
    position: "Headhunter",
    date: "Noviembre 2024",
    text: "Tuve la suerte de trabajar con Álvaro y pude comprobar su excelente actitud..."
  },
  {
    name: "Aníbal Álvarez",
    position: "Formador y Reclutador",
    date: "Diciembre 2024",
    text: "Desde que nos formamos juntos, siempre he reconocido sus buenas prácticas..."
  },
  {
    name: "María Queipo",
    position: "Técnica de RRHH en Ayesa",
    date: "Enero 2025",
    text: "Trabajar con Álvaro en selección IT en Ayesa es un lujo..."
  },
  {
    name: "Ana María Romero",
    position: "Consultora de Talento",
    date: "Enero 2025",
    text: "Excelente compañero de sector, comprometido y muy profesional..."
  },
  {
    name: "Marta De la Vega",
    position: "Talent Manager",
    date: "Febrero 2025",
    text: "Profesional muy polivalente y comprometido con su trabajo..."
  },
  {
    name: "Daniel Herreros",
    position: "Desarrollador Backend",
    date: "Febrero 2025",
    text: "El trato con él ha sido muy bueno y muy rápido..."
  },
  {
    name: "Iván Barros",
    position: "Junior Developer",
    date: "Marzo 2025",
    text: "Lo he conocido al inicio de mi carrera laboral y me ha acompañado..."
  },
  {
    name: "Alejandro Suárez",
    position: "Administrador de Sistemas",
    date: "Marzo 2025",
    text: "Solo puedo decir que es un excelente profesional..."
  },
  {
    name: "Ángel Soutullo",
    position: "Técnico de redes",
    date: "Abril 2025",
    text: "Siempre atento en todo momento con mi proceso de selección..."
  },
  {
    name: "Laura Sánchez",
    position: "Junior QA",
    date: "Abril 2025",
    text: "Gracias a él obtuve mi primera oportunidad profesional..."
  },
  {
    name: "Fernando Álvarez",
    position: "Consultor IT",
    date: "Mayo 2025",
    text: "Destacaría de él su capacidad para adaptarse rápidamente..."
  },
  {
    name: "Jose María García",
    position: "Candidato",
    date: "Mayo 2025",
    text: "Durante nuestra etapa académica, su actitud fue clave..."
  },
  {
    name: "Jose Luis Suárez",
    position: "Scrum Master",
    date: "Junio 2025",
    text: "Trabajador, generoso y buen compañero..."
  },
  {
    name: "Eduardo Vázquez",
    position: "Mentorizado",
    date: "Junio 2025",
    text: "Estoy seguro de que Álvaro puede ayudar a muchos más estudiantes..."
  },
  {
    name: "José Miguel Ruiz",
    position: "Desarrollador",
    date: "Junio 2025",
    text: "Aunque hayan tenido poca relación, se le nota su implicación..."
  },
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

// Mostrar email/teléfono
document.getElementById("email-btn").onclick = () => {
  alert(document.getElementById("email").textContent);
};
document.getElementById("phone-btn").onclick = () => {
  alert(document.getElementById("phone").textContent);
};
