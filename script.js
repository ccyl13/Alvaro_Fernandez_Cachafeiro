<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Álvaro Fernández Cachafeiro</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <canvas id="background"></canvas>

  <div class="container">
    <div class="profile">
      <img src="perfil.JPG" alt="Foto de Álvaro" class="profile-pic" />
      <h1>Álvaro Fernández Cachafeiro</h1>
      <p class="subtitle">Consultor de Recursos Humanos | Experto en selección de personal IT</p>
    </div>

    <section class="recommendations">
      <h2>Recomendaciones</h2>
      <div class="carousel">
        <div class="slide active">
          <p><strong>Carlota González Vega</strong> <span class="stars">★★★★★</span><br><small>ADE + Business Analytics – 16 junio 2025</small></p>
          <p class="quote">"<em>He tenido la suerte de contar con Álvaro como coach en mi proceso de entrada al mundo laboral. Me ha ayudado mucho con sus consejos, su cercanía y su actitud positiva. Siempre dispuesto a ayudar, incluso cuando el proceso ha terminado.</em>"</p>
        </div>
        <div class="slide">
          <p><strong>Thomas O’neil Álvarez</strong> <span class="stars">★★★★★</span><br><small>ETHICAL HACKER | RED TEAM – 31 mayo 2025</small></p>
          <p class="quote">"<em>Tuve el honor de coincidir con este pedazo de profesional hace poco más de un año... Se nota que ama lo que hace. Desde luego contar con Álvaro es signo de garantía.</em>"</p>
        </div>
      </div>
    </section>

    <section class="project">
      <h2>Proyecto destacado</h2>
      <div class="project-card">
        <p>Colaborador en el <strong>curso de marca personal de Thomas O’Neil</strong>, N.º 1 de LinkedIn en España.</p>
        <a href="https://www.elrincondelhacker.es/pagina-de-ventas-linkedin/" target="_blank" class="button">Ver proyecto</a>
      </div>
    </section>

    <section class="contact">
      <h2>Contacto</h2>
      <div class="contact-buttons">
        <button onclick="window.open('https://ayesa.com', '_blank')">Sitio web</button>
        <button onclick="window.open('mailto:alfercacha@hotmail.com')">Email</button>
        <button onclick="revealPhone()">Teléfono</button>
        <button onclick="window.open('https://www.linkedin.com/in/alvarofdezcachafeiro/', '_blank')">LinkedIn</button>
        <button onclick="window.open('https://www.instagram.com/caacha97/', '_blank')">Instagram</button>
      </div>
      <p id="phone" class="phone-hidden">622 832 752</p>
    </section>

    <footer>&copy; 2025 Álvaro Fernández Cachafeiro</footer>
  </div>

  <script src="script.js"></script>
</body>
</html>
