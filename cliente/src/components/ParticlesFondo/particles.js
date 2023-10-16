import './particles.css';

function createParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';

  function createParticle(angle, radius) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Calcula la posición basada en el ángulo y el radio
    const x = Math.cos(angle) * radius + window.innerWidth / 2;
    const y = Math.sin(angle) * radius + window.innerHeight / 2;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Agrega la partícula al contenedor
    particleContainer.appendChild(particle);

    // Elimina la partícula después de un tiempo
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }

  document.body.appendChild(particleContainer);

  // Crea partículas en un patrón de espiral
  let angle = 0;
  const radiusIncrement = 5;

  const particleInterval = setInterval(() => {
    createParticle(angle, angle * radiusIncrement);

    angle += 0.1; // Ajusta esto para cambiar la densidad de las partículas
  }, 100);

  // Detén la creación de partículas después de un tiempo
  setTimeout(() => {
    clearInterval(particleInterval);
  }, 10000); // Cambia esto para controlar la duración de la animación
}

export { createParticles };
