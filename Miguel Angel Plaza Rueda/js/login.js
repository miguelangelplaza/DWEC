// Obtener elementos del DOM
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const loginMessage = document.getElementById("loginMessage");

// Función para iniciar sesión
loginButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) { // Acepta cualquier usuario y contraseña
    // Guarda el estado de login en IndexedDB
    await setLoggedInStatus(username, true);

    // Muestra mensaje de bienvenida
    loginMessage.textContent = `Bienvenido, ${username}`;
    loginMessage.style.color = "#00fff5"; // Mensaje en color azul futurista

    // Muestra el botón de cerrar sesión y oculta el formulario de login
    document.getElementById("loginCard").style.display = "none";
    logoutButton.style.display = "block";
  } else {
    // Mostrar mensaje de error si no se ingresan credenciales
    loginMessage.textContent = "Por favor, ingresa un nombre de usuario y una contraseña.";
    loginMessage.style.color = "#ff007f"; // Mensaje de error en color rosa
  }
});

// Función para verificar si el usuario ya inició sesión
async function checkLoginStatus() {
  const isLoggedIn = await getLoggedInStatus();

  if (isLoggedIn) {
    loginMessage.textContent = `Bienvenido nuevamente`;
    loginMessage.style.color = "#00fff5";
    document.getElementById("loginCard").style.display = "none";
    logoutButton.style.display = "block";
  }
}

// Función para cerrar sesión
logoutButton.addEventListener("click", async () => {
  await clearLoginStatus(); // Elimina el estado de sesión en IndexedDB
  loginMessage.textContent = "Has cerrado sesión.";
  loginMessage.style.color = "#ff007f";
  document.getElementById("loginCard").style.display = "block";
  logoutButton.style.display = "none";
});

// Llama a la función para comprobar el estado de sesión al cargar la página
checkLoginStatus();
