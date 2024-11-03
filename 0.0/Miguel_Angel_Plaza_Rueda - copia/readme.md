# Login.js

## Descripción
`login.js` es un script que maneja la funcionalidad de inicio de sesión en nuestra aplicación web. Este archivo contiene las funciones necesarias para autenticar a los usuarios y gestionar sus sesiones.

## Funcionalidades
- **Validación de Credenciales:** Verifica que el nombre de usuario y la contraseña ingresados sean correctos.
- **Gestión de Sesiones:** Crea y mantiene la sesión del usuario una vez autenticado.
- **Manejo de Errores:** Proporciona retroalimentación al usuario en caso de credenciales incorrectas o errores de conexión.

## Uso
1. **Importar el script:**
  ```html
  <script src="path/to/login.js"></script>
  ```
2. **Llamar a la función de inicio de sesión:**
  ```javascript
  login(username, password);
  ```

## Ejemplo
```javascript
document.getElementById('loginButton').addEventListener('click', function() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   login(username, password);
});
```

## Actualizaciones
- CAMBIOS EN LOGIN.JS
Cambios principales:
Persistencia de la sesión: Cuando el usuario inicie sesión con éxito, su nombre de usuario se guarda en una cookie usando setCookie().
Carga de sesión al recargar la página: Al cargar la página, se verifica si la cookie loggedInUser existe. Si existe, se muestra un mensaje de bienvenida personalizado y se oculta el formulario de inicio de sesión.
Cierre de sesión: He añadido una función logout() que borra la cookie y devuelve al formulario de login.









