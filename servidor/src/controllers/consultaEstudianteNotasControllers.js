const {database } = require("../db")
const {QueryTypes} = require("sequelize")


const consultaEstudianteNotas = async (id)=>{
    try {
        

        const query = `select n.id_nota, e.nombres as estudiante_nombres, e.apellidos as estudiante_apellidos, a.nombre as curso_nombre, a.creditos, n.valor_numeros, n.valor_letras, a.ciclo, p.nombre as periodo_nombre, n.tipo_nota   

        from "Estudiantes" as e, "Asignaturas" as a, "Nota" n, "PeriodoLectivos" as p
        
        where e.id_estudiante = n.id_estudiante and n.id_asignatura = a.id_asignatura and n.id_periodo = p.id_periodo and e.id_estudiante=${id}
        
        order by a.ciclo;`; 
    
        const results = await database.query(query, {
          type: QueryTypes.SELECT,
        });
    
        return results;
      } catch (error) {
        console.error('Error en la consulta sin procesar:', error);
        throw error;
      }

};

module.exports = {consultaEstudianteNotas}