const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", e => {
    switchElement.classList.toggle("active");
    document.body.classList.toggle('active');
});