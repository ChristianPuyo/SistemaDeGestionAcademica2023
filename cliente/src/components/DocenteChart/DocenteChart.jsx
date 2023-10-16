import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const DocenteChart = () => {
  // Datos de ejemplo para el gráfico
  const data = [
    { grupo: 'Grupo A', cantidadEstudiantes: 30 },
    { grupo: 'Grupo B', cantidadEstudiantes: 45 },
    { grupo: 'Grupo C', cantidadEstudiantes: 20 },
    { grupo: 'Grupo D', cantidadEstudiantes: 60 },
  ];

  return (
    <div>
      
      <VictoryPie
        data={data}
        x="grupo"
        y="cantidadEstudiantes"
        colorScale={['#FF5733', '#FFC300', '#DAF7A6', '#C70039']}
        innerRadius={50}
        labelRadius={80} // Ajusta la distancia de las etiquetas desde el centro
        labels={({ datum }) => `${datum.grupo}\n${datum.cantidadEstudiantes}`}
        width={300} // Ajusta el ancho del gráfico de pastel
        height={300} // Ajusta la altura del gráfico de pastel
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={150} // Ajusta la posición X del título
        y={180} // Ajusta la posición Y del título
        text="Docentes por Programa de Estudio"
      />
    </div>
  );
};

export default DocenteChart;