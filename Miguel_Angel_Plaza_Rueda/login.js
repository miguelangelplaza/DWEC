document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Credenciales predeterminadas
    const validUsername = 'MiguelAngel';
    const validPassword = '123456';

    // Validación de usuario y contraseña
    if (username === validUsername && password === validPassword) {

        setCookie('loggedInUser', username, 0.5); // Crear cookie por 30segundos
        alert('Cookie creada y sesión iniciada.'); // Confirmación
        document.getElementById('welcomeMessage').innerText = 'Bienvenido, ' + username + '!';
        document.getElementById('welcomeMessage').style.display = 'block';
        // Aquí puedes ocultar el formulario de inicio y mostrar el contenido

        // Mostrar el contenido principal
        setTimeout(function() {
            document.querySelector('.login-form').style.display = 'none'; // Ocultar el formulario de login
            mainContent.style.display = 'flex'; // Mostrar el contenido oculto con flexbox
        }, 1000); // Espera 1 segundo antes de mostrar el contenido principal

    } else {
        alert('Credenciales incorrectas.');
    }

});

// Función para crear una cookie
function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Configurar tiempo
    const expires = "; expires=" + date.toUTCString(); // Establecer expiración
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/"; // Crear la cookie
    console.log("Cookies disponibles:", document.cookie); // Verifica las cookies
}

window.onload = function() {
    const loggedInUser = getCookie('loggedInUser'); // Comprobar si la cookie existe
    if (loggedInUser) {
        document.getElementById('welcomeMessage').innerText = 'Bienvenido de nuevo, ' + loggedInUser + '!';
        document.getElementById('welcomeMessage').style.display = 'block';
        // Mostrar contenido principal y ocultar el formulario
    } else {
        console.log("No hay cookie, debe iniciar sesión."); // Mensaje en consola
    }
};

