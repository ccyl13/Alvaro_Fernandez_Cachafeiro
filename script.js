const testimonios = document.querySelectorAll(".testimonio");
let indiceActual = 0;

function mostrarTestimonio(index) {
  testimonios.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

document.getElementById("siguiente").addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % testimonios.length;
  mostrarTestimonio(indiceActual);
});

document.getElementById("anterior").addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
  mostrarTestimonio(indiceActual);
});

// Mostrar primero al cargar
mostrarTestimonio(indiceActual);

