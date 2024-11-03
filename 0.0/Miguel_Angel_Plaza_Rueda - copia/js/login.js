"use strict";

// Credenciales almacenadas internamente (para este ejercicio)
const storedUsername = "MiguelAngel";
const storedPassword = "123456";

const loginMessage = document.getElementById("loginMessage"); // Mensaje de feedback para el usuario
const logoutButton = document.getElementById("logoutButton"); // Botón de logout

// Verificar si el usuario ya ha iniciado sesión previamente mediante cookies
if (getCookie("loggedIn") === "true") {
  mostrarContenidoPrincipal(); // Si el usuario está logueado, mostramos el contenido principal
}

// Manejar el envío del formulario de login
loginButton.addEventListener("click", function (event) {

  // Obtener valores ingresados por el usuario en los campos de login
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // Validar las credenciales ingresadas por el usuario
  if (usernameInput === storedUsername && passwordInput === storedPassword) {
    // Si las credenciales son correctas:
    loginExitoso();
  } else {
    // Si las credenciales son incorrectas:
    loginFallido();
  }
});
