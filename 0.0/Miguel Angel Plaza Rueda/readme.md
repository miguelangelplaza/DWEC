os: La estructura de IndexedDB se maneja con versiones para facilitar actualizaciones sin afectar los datos existentes. -->
# Login.js con IndexedDB

## Descripción
`login.js` es un script de manejo de autenticación en la aplicación web, que ahora incorpora persistencia de sesión mediante IndexedDB. Este archivo autentica usuarios, gestiona sus sesiones, y permite guardar y cargar el estado de inicio de sesión de manera asíncrona, proporcionando así una experiencia más fluida y robusta para el usuario.

## Funcionalidades
- **Validación de Credenciales**: Verifica que el nombre de usuario y la contraseña ingresados sean correctos.
- **Gestión de Sesiones con IndexedDB**: Almacena el estado de inicio de sesión en IndexedDB para mantener la sesión activa en las recargas de página o navegaciones internas.
- **Manejo de Errores**: Proporciona retroalimentación al usuario en caso de credenciales incorrectas, errores de conexión, o problemas al acceder a la base de datos.
- **Cierre de Sesión**: Borra el registro en IndexedDB y permite al usuario cerrar sesión con facilidad.

## Uso

### 1. Importación del Script
Incluye el archivo en tu HTML para habilitar la funcionalidad de autenticación:

```html
<script src="path/to/login.js"></script>
```

### 2. Inicialización de la Base de Datos (IndexedDB)
El script inicializa una base de datos `LoginDB` al cargar la página. Si esta no existe, se crea automáticamente con un almacén de objetos para almacenar el estado de la sesión:

```javascript
openDatabase();  // Llama a la función para inicializar la base de datos
```

### 3. Ejemplo de Inicio de Sesión
Para iniciar sesión y almacenar el estado en IndexedDB, utiliza el siguiente código:

```javascript
document.getElementById('loginButton').addEventListener('click', async function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    await login(username, password); // Llama a la función asíncrona de login
});
```

### 4. Ejemplo de Cierre de Sesión
Para cerrar sesión y borrar el estado de la base de datos, utiliza la función `logout`:

```javascript
document.getElementById('logoutButton').addEventListener('click', async function() {
    await logout(); // Llama a la función de logout para borrar la sesión de IndexedDB
});
```

## Detalles Técnicos de Implementación
- **Persistencia de Sesión**: Al iniciar sesión, el nombre del usuario y su estado de sesión se guardan en IndexedDB. Si el usuario recarga la página, el script verifica IndexedDB para restaurar la sesión sin requerir reingreso de credenciales.
- **Almacenamiento Asíncrono**: Todas las operaciones de acceso a la base de datos IndexedDB (como creación, lectura y eliminación de sesión) se realizan de manera asíncrona usando `async/await`.
- **Control de Versión**: La base de datos `LoginDB` maneja una estructura de versiones, permitiendo que se modifique su estructura en futuras actualizaciones sin perder datos.

### Ejemplo de Código Asíncrono con IndexedDB

#### Guardar Datos en IndexedDB
```javascript
async function saveSession(username) {
     const transaction = db.transaction(['LoginStore'], 'readwrite');
     const store = transaction.objectStore('LoginStore');
     store.put({ name: 'loggedInUser', value: username });
}
```

#### Obtener Datos de IndexedDB
```javascript
async function checkLoginStatus() {
     const result = await getIndexedDB("loggedInUser");
     if (result) {
          // Código para mostrar mensaje personalizado o redirigir al usuario
     }
}
```

## Actualizaciones
- **Persistencia de sesión mejorada**: Ahora IndexedDB almacena el estado de inicio de sesión para que se mantenga al navegar o recargar la página.
- **Función de cierre de sesión añadida**: La función `logout()` borra el estado de la sesión en IndexedDB, permitiendo al usuario cerrar sesión fácilmente desde cualquier página.
- **Soporte para futuras actualizaciones de base de datos**: La estructura de IndexedDB se maneja con versiones para facilitar actualizaciones sin afectar los datos existentes.