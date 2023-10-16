const {database } = require("../db")
const {QueryTypes} = require("sequelize")


const consulta1 = async ()=>{
    try {
        const query = `SELECT pe.descripcion AS plan_nombre, da.nombre AS departamento_nombre
        FROM "PlanDeEstudios" AS pe
        INNER JOIN "DepartamentoAcademicos" AS da ON pe.id_departamento = da.id_departamento
        ;`; 


        const query2 = `SELECT pe.descripcion , da.nombre 
        FROM "PlanDeEstudios" AS pe, "DepartamentoAcademicos" AS da
        where pe.id_departamento=da.id_departamento and pe.id_plan=2;`; 
    
        const results = await database.query(query2, {
          type: QueryTypes.SELECT,
        });
    
        return results;
      } catch (error) {
        console.error('Error en la consulta sin procesar:', error);
        throw error;
      }

};

module.exports = {consulta1}

