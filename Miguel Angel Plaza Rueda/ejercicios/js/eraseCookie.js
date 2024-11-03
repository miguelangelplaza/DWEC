"use strict";

// Función para borrar una cookie
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
    console.log(document.cookie);
}