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

## Requisitos
- Navegador compatible con JavaScript ES6.
- Conexión a un servidor backend para la autenticación.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio importante.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
