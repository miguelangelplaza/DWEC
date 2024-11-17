# CRUD con Cookies, Storage e IndexedDB

Este proyecto implementa un sistema CRUD básico con las siguientes características:

## Funcionalidades

1. **Carga de Datos desde API**:
   - Al cargar la página, se pueden añadir datos simulados desde una API usando los botones `+1` y `+5`.

2. **Almacenamiento en Cookies**:
   - Guardar datos en cookies con un tiempo de expiración de 1 minuto.
   - Visualizar y eliminar datos dinámicamente en una tabla.

3. **Almacenamiento en Storage**:
   - Guardar datos más complejos (nombre, edad, profesión) en `localStorage`.
   - Visualizar y eliminar datos dinámicamente en una tabla.

## Cómo Ejecutar

1. Abre el archivo `index.html` en tu navegador.
2. Utiliza los formularios para añadir datos.
3. Interactúa con los botones para cargar datos desde la API o gestionar datos almacenados.

## API Usada

- **URL**: `https://jsonplaceholder.typicode.com/users`
- **Descripción**: Genera datos simulados de usuarios para pruebas.

## Tecnologías Usadas

- HTML, CSS (opcional), y JavaScript.
- `localStorage` para datos más complejos.
- Cookies para pares nombre-valor simples.

