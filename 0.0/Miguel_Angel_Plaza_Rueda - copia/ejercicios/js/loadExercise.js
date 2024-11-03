"use strict";

// Función para cargar el contenido de los ejercicios con el diseño de tarjetas
function loadExercise(exercise) {
  const mainContent = document.getElementById("mainContent");
  switch (exercise) {
    case 'ejer01':
      mainContent.innerHTML = `
      <div class="container">
        <div class="card">
          <div class="cardTitle">Titulo ejercicio 01</div>
          <div class="cardBody">
            <p>Descripción del ejercicio 01...</p>
          </div>
          <div class="cardFooter"><a href="./DOM/ejer01/index.html">&gt;&gt; Solución</a></div>
        </div>
      </div>`
      break;
    case 'ejer02':
      mainContent.innerHTML = `
      <div class="container">
        <div class="card">
          <div class="cardTitle">Titulo ejercicio 02</div>
          <div class="cardBody">
            <p>Descripción del ejercicio 02...</p>
          </div>
          <div class="cardFooter"><a href="./DOM/ejer02/index.html">&gt;&gt; Solución</a></div>
        </div>
      </div>`
      break;
    default:
      break;
  }
}
