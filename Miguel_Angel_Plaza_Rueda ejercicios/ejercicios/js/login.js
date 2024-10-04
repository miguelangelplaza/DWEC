document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Cambiar 'text' a 'password'
    const welcomeMessage = document.getElementById('welcomeMessage');
    const usernameError = document.querySelector('.username-error');
    const mainContent = document.getElementById('mainContent'); // Acceso al contenido principal

    // Credenciales predeterminadas
    const validUsername = 'jota';
    const validPassword = 'dejame';

    // Validación de longitud del nombre de usuario
    if (username.length < 3) {
        usernameError.style.display = 'block'; // Mostrar mensaje de error
        return;
    } else {
        usernameError.style.display = 'none'; // Ocultar mensaje de error si es válido
    }

    // Validación de usuario y contraseña
    if (username === validUsername && password === validPassword) {
        welcomeMessage.style.color = 'green';
        welcomeMessage.innerText = 'Bienvenido, ' + username + '!';
        welcomeMessage.style.display = 'block';

        // Mostrar el contenido principal
        setTimeout(function() {
            document.querySelector('.login-form').style.display = 'none'; // Ocultar el formulario de login
            mainContent.style.display = 'flex'; // Mostrar el contenido oculto con flexbox
        }, 1000); // Espera 1 segundo antes de mostrar el contenido principal
    } else {
        // Mensaje de error de credenciales incorrectas
        welcomeMessage.style.color = 'red';
        welcomeMessage.innerText = 'Credenciales incorrectas. Inténtalo de nuevo.';
        welcomeMessage.style.display = 'block';
    }
});
