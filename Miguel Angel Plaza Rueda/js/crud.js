// Variables de Elementos
const cookiesTable = document.getElementById("cookiesTable");
const storageTable = document.getElementById("storageTable");

// Cookies
document.getElementById("cookieForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=60`;
  updateCookiesTable();
});

// Mostrar Cookies en Tabla
function updateCookiesTable() {
  cookiesTable.innerHTML = "";
  const cookies = document.cookie.split(";").map(cookie => cookie.trim().split("="));

  cookies.forEach(([name, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${decodeURIComponent(name)}</td>
      <td>${decodeURIComponent(value)}</td>
      <td>
        <button onclick="editCookie('${name}')">Editar</button>
        <button onclick="deleteCookie('${name}')">Borrar</button>
      </td>`;
    cookiesTable.appendChild(row);
  });
}

// Eliminar Cookies
function deleteCookie(name) {
  document.cookie = `${name}=; max-age=0`;
  updateCookiesTable();
}

// Editar Cookies
function editCookie(name) {
  const newValue = prompt("Introduce el nuevo valor para la cookie:", "");
  if (newValue !== null && newValue.trim() !== "") {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(newValue)}; max-age=60`;
    updateCookiesTable();
  }
}

// Storage e IndexedDB
document.getElementById("storageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("storageName").value;
  const age = document.getElementById("storageAge").value;
  const profession = document.getElementById("storageProfession").value;

  const data = { name, age, profession };
  localStorage.setItem(name, JSON.stringify(data));
  updateStorageTable();
});

// Mostrar Datos de Storage
function updateStorageTable() {
  storageTable.innerHTML = "";
  Object.keys(localStorage).forEach((key) => {
    const data = JSON.parse(localStorage.getItem(key));
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.age}</td>
      <td>${data.profession}</td>
      <td>
        <button onclick="editStorage('${key}')">Editar</button>
        <button onclick="deleteStorage('${key}')">Borrar</button>
      </td>`;
    storageTable.appendChild(row);
  });
}

// Eliminar Datos de Storage
function deleteStorage(key) {
  localStorage.removeItem(key);
  updateStorageTable();
}

// Editar Datos de Storage
function editStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  const newName = prompt("Nuevo Nombre:", data.name);
  const newAge = prompt("Nueva Edad:", data.age);
  const newProfession = prompt("Nueva Profesión:", data.profession);

  if (newName && newAge && newProfession) {
    const updatedData = { name: newName, age: newAge, profession: newProfession };
    localStorage.setItem(key, JSON.stringify(updatedData));
    updateStorageTable();
  }
}

// API Carga de Datos
document.getElementById("load-one").addEventListener("click", () => loadApiData(1));
document.getElementById("load-five").addEventListener("click", () => loadApiData(5));

function loadApiData(count) {
  fetch(`https://jsonplaceholder.typicode.com/users?_limit=${count}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        localStorage.setItem(user.id, JSON.stringify({
          name: user.name,
          age: user.id * 10, // Simulación
          profession: user.company.bs
        }));
      });
      updateStorageTable();
    });
}

// Inicializar Tablas
updateCookiesTable();
updateStorageTable();
