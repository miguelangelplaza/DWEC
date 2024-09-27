// "use strict"

// function mostrar(resultado) {
//     console.log(`Estoy mostrando el resultado del ${resultado.getAttribute('name')}`);
//     resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute('name2')}`;
// }


"use strict";

const mostrar = (resultado) => {
    const name = resultado.getAttribute('name');
    const name2 = resultado.getAttribute('name2');
    console.log(`Estoy mostrando el resultado del ${name}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ${name2}`;
};
