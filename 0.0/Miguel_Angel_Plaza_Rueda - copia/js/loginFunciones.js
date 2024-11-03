"use string";

/**
 * Función que maneja el login exitoso
 */
function loginExitoso() {
    loginMessage.style.color = "green"; // Cambia el color del mensaje a verde
    loginMessage.innerText = "¡Bienvenido!"; // Muestra el mensaje de bienvenida
    setCookie("loggedIn", "true", 1); // Guardar la sesión en una cookie (por 1 día)
    mostrarContenidoPrincipal(); // Ocultar la tarjeta de login y mostrar el contenido principal
  }
  
  /**
   * Función que maneja el login fallido
   */
  function loginFallido() {
    loginMessage.style.color = "red"; // Cambia el color del mensaje a rojo
    loginMessage.innerText = "Nombre de usuario o contraseña incorrectos."; // Muestra el mensaje de error
  }
  
  /**
   * Función que muestra el contenido principal y oculta el formulario de login
   */
  function mostrarContenidoPrincipal() {
    window.location.href = "./ejercicios/index.html"; // Cargamos el index.hmtl con el menú
  }
  