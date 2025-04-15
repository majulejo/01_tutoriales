
const body = document.body;
const modeToggle = document.getElementById('modeToggle');

body.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');

modeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
})