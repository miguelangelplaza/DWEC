"use strict";

// Función para leer una cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    console.log(`Cookies almacenadas: ${cookies}`);

    for (let cookie of cookies) {
        cookie = cookie.trim();
        console.log(`Clave: ${cookie}`);
        if (cookie.indexOf(nameEQ) === 0) {
            console.log(`Valor: ${cookie.substring(nameEQ.length)}`);
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}