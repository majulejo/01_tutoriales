let toggle = document.getElementById("toggle");
let label_toggle = document.getElementById("label_toggle");

// Función para cargar el estado del modo oscuro desde localStorage
function loadDarkModeState() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        toggle.checked = true;
        updateLabel("light_mode", "yellow");
    } else {
        document.documentElement.classList.remove("dark-mode");
        toggle.checked = false;
        updateLabel("dark_mode", "rebeccapurple");
    }
}

// Función para actualizar el ícono y el color del botón
function updateLabel(icon, color) {
    label_toggle.innerHTML = `<span class="material-symbols-outlined">${icon}</span>`;
    label_toggle.style.color = color;
}

// Cargar el estado inicial del modo oscuro
loadDarkModeState();

// Evento para cambiar el modo oscuro
toggle.addEventListener("change", (event) => {
    const checked = event.target.checked;
    if (checked) {
        document.documentElement.classList.add("dark-mode");
        updateLabel("light_mode", "yellow");
        localStorage.setItem("darkMode", "true");
    } else {
        document.documentElement.classList.remove("dark-mode");
        updateLabel("dark_mode", "rebeccapurple");
        localStorage.setItem("darkMode", "false");
    }
});