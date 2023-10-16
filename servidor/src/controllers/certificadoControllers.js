const {database } = require("../db")
const {QueryTypes} = require("sequelize")


const consultaCertificado = async (id)=>{
    try {
        

        const query = `SELECT
        id_estudiante,
        a.id_asignatura,
        a.nombre AS nombre_asignatura,
        a.creditos,
        COALESCE(CAST(n.valor_numeros AS VARCHAR), '-') AS nota_valor_numeros,
        COALESCE(n.valor_letras, '-') AS nota_valor_letras,
        a.ciclo AS ciclo_asignatura,
        p.nombre AS periodo_lectivo,
        n.tipo_nota
    FROM
        "Asignaturas" AS a
    LEFT JOIN (
        SELECT id_asignatura, valor_numeros, valor_letras, tipo_nota, id_estudiante, id_periodo
        FROM "Nota"
        WHERE (id_asignatura, id_estudiante, fecha) IN (
            SELECT id_asignatura, id_estudiante, MAX(fecha)
            FROM "Nota"
            WHERE valor_numeros >= 13.0 AND id_estudiante = ${id}
            GROUP BY id_asignatura, id_estudiante
        )
    ) AS n ON a.id_asignatura = n.id_asignatura
    LEFT JOIN "PeriodoLectivos" AS p ON n.id_periodo = p.id_periodo
    WHERE
        a.id_plan = (SELECT id_plan FROM "Estudiantes" WHERE id_estudiante = ${id})
        ORDER BY a.ciclo;`; 
    
        const results = await database.query(query, {
          type: QueryTypes.SELECT,
        });
    
        return results;
      } catch (error) {
        console.error('Error en la consulta sin procesar:', error);
        throw error;
      }

};

module.exports = {consultaCertificado}