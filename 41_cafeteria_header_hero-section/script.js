const burgerBtn = document.querySelector(".burger");
const menuOverlay = document.querySelector(".menu-overlay");

// Constante de animación

const BURGER_ANIMATION = {
  closed: {
    line1Top: "14px",
    line2Top: "26px",
    rotation: "",
  },
  open: {
    line1Top: "21px",
    line2Top: "21px",
    line1rotation: "rotate(45deg)",
    line2rotation: "rotate(-45deg)",
  },
};

//Función para animar las líneas del botón hamburguesa

function animateBurgerLines(line1, line2, isOpen) {
  if (isOpen) {
    line1.style.top = BURGER_ANIMATION.open.line1Top;
    line2.style.top = BURGER_ANIMATION.open.line2Top;
    line1.style.transform = BURGER_ANIMATION.open.line1rotation;
    line2.style.transform = BURGER_ANIMATION.open.line2rotation;
  } else {
    line1.style.top = BURGER_ANIMATION.closed.line1Top;
    line2.style.top = BURGER_ANIMATION.closed.line2Top;
    line1.style.transform = BURGER_ANIMATION.closed.rotation;
    line2.style.transform = BURGER_ANIMATION.closed.rotation;
  }
}

function toggleMenu(isOpen) {
  menuOverlay.classList.toggle("menu-overlay--open", isOpen);
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
  burgerBtn.classList.toggle("is-open", isOpen);
  const[span1, span2] = burgerBtn.querySelectorAll('span');
  animateBurgerLines(span1, span2, isOpen);
}

function closeMenu() {
    toggleMenu(false);
}

if(burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        const isOpen = !menuOverlay.classList.contains(
            'menu-overlay--open'
        );
        toggleMenu(isOpen);
    });
}
