const { PeriodoLectivo } = require("../db")



const createPeriodo = async (nombre, fecha_inicio, fecha_fin)=>{
    
    
    
    const newPeriodo = await PeriodoLectivo.create({nombre, fecha_inicio, fecha_fin })
    return newPeriodo;
}

const getPeriodo = async ()=>{
    const periodo = await PeriodoLectivo.findAll();
    return periodo;  

};

module.exports = { 
    
    createPeriodo,
    getPeriodo
   
    
};