const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 120
});

typewriter  
  .typeString('La capital del sol')
  .pauseFor(600)
  .start();
