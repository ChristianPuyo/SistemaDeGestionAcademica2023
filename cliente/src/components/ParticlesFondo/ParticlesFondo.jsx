import React, { useEffect } from 'react';

import { createParticles } from './particles';

function ParticlesFondo() {
  useEffect(() => {
    createParticles(); // Llama a la función para crear partículas al montar el componente
  }, []);

  return (
    <div className="particle-background">
      {/* Contenedor para las partículas */}
      
    </div>
  );
}

export default ParticlesFondo;
