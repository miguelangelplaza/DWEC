"use strict";

const mostrar = (resultado) => {
    const name = resultado.getAttribute('name');
    const name2 = resultado.getAttribute('name2');
    console.log(`Estoy mostrando el resultado del ${name}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ${name2}`;
};

const volver = (boton2) => {
    const name = boton2.getAttribute('name');
    console.log(`voy a volver ${name3}`);
};