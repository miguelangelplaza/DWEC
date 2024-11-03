
"use strict";
// function mostrar(element) {
//   element.style.display = "block"; // Cambiar el estilo para mostrar el elemento
// }
document.getElementById("boton").addEventListener("click", () => 
  mostrar(document.getElementById("resultado")));

document.getElementById('boton2').addEventListener('click', function() {
  window.location.href = '../../index.html'; // Redirigir a index.html
});

