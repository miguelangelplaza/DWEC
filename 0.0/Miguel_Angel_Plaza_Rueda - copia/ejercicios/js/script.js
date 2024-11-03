"use strict";

// Manejar el logout
logoutButton.addEventListener("click", function (event) {
    eraseCookie("loggedIn"); // Eliminar estado de login
    window.location.href = "../index.html"; // Cargamos el index.html principal
});

// Manejar la selección de los ejercicios del menú "NUMBER"
document.getElementById("ejer01").addEventListener("click", function () {
    loadExercise('ejer01');
});

document.getElementById("ejer02").addEventListener("click", function () {
    loadExercise('ejer02');
});
