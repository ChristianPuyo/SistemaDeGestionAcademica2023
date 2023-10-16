import React, { useEffect, useState } from 'react';

function FechaActual() {
    const [fechaActual, setFechaActual] = useState('');

    useEffect(() => {
        mostrarFechaActual();
    }, []);

    function mostrarFechaActual() {
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear();
        
        const fechaFormateada = `${dia}/${mes}/${anio}`;
        
        setFechaActual(fechaFormateada);
    }

    return (
        <div>
            
            <p>Pucallpa, {fechaActual}</p>
        </div>
    );
}

export default FechaActual;
