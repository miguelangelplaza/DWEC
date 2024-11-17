'use strict';

let db;

// Abre o crea la base de datos en IndexedDB
async function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('LoginDB', 1);

    request.onerror = (event) => {
      console.error('Error al abrir la base de datos', event);
      reject(event);
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains('LoginStore')) {
        db.createObjectStore('LoginStore', { keyPath: 'username' });
      }
    };
  });
}

// Guarda el estado de sesión
async function setLoggedInStatus(username, status) {
  await openDatabase();
  const transaction = db.transaction('LoginStore', 'readwrite');
  const store = transaction.objectStore('LoginStore');
  store.put({ username: username, isLoggedIn: status });
}

// Obtiene el estado de sesión (retorna `true` si hay algún usuario logueado)
async function getLoggedInStatus() {
  await openDatabase();
  return new Promise((resolve) => {
    const transaction = db.transaction('LoginStore', 'readonly');
    const store = transaction.objectStore('LoginStore');
    const request = store.getAll();

    request.onsuccess = (event) => {
      // Si algún usuario tiene el estado de sesión activo, devuelve `true`
      const isLoggedIn = request.result.some((user) => user.isLoggedIn === true);
      resolve(isLoggedIn);
    };
    request.onerror = () => resolve(false);
  });
}

// Elimina el estado de sesión (cierra sesión para todos los usuarios)
async function clearLoginStatus() {
  await openDatabase();
  const transaction = db.transaction('LoginStore', 'readwrite');
  const store = transaction.objectStore('LoginStore');
  store.clear(); // Borra todos los registros en el almacén de sesión
}
