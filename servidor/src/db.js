const { Sequelize } = require("sequelize");
const ModeloEstudiante = require("./models/Student")
const ModeloAsignatura = require("./models/Asignatura")
const ModeloPlanDeEstudio = require("./models/PlanDeEstudio")
const ModeloMatricula = require("./models/Matricula")
const ModeloPeriodoLectivo = require("./models/PeriodoLectivo")
const ModeloNota = require("./models/Nota")
const ModeloProfesor = require("./models/Profesor")
const ModeloDepartamentoAcademico = require("./models/DepartamentoAcademico")
const ModeloUsuario = require("./models/User")
require("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY} = process.env; 

//ESTO ES PARA EL ENTORNO DE DESARROLLO LOCALMENTE
// const database = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/base1`,
//     {logging: false} 
// )




//ESTO ES PARA EL SERVIDOR EN PRODUCCIÓN
const database = new Sequelize(
    `postgres://institu7_postgres:80+20ajedrezz@localhost:5432/institu7_iestpsuizasiaserver`,
    {logging: false} 
)
 
// const database = new Sequelize(
//     DB_DEPLOY,
//     {
//         logging: false,
//         dialectOptions: {
//             ssl: {
//                 require: true,
//             }
//         }
//     }
// )

ModeloEstudiante(database);
ModeloAsignatura (database);
ModeloPlanDeEstudio(database);
ModeloMatricula(database);
ModeloPeriodoLectivo(database);
ModeloNota(database);
ModeloProfesor(database);
ModeloDepartamentoAcademico(database);
ModeloUsuario(database)



const {
    Estudiante,
    Asignatura,
    PlanDeEstudio,
    Matricula,
    PeriodoLectivo,
    Nota,
    Profesor,
    DepartamentoAcademico,
    User
} = database.models;

//Hacemos las relaciones

//RELACION ENTRE ESTUDIANTE Y NOTA
Estudiante.hasMany(Nota,{foreignKey:"id_estudiante"});
Nota.belongsTo(Estudiante,{foreignKey:'id_estudiante'});

//RELACION ENTRE NOTA Y ASIGNATURA
Asignatura.hasMany(Nota,{foreignKey : 'id_asignatura'});
Nota.belongsTo(Asignatura,{foreignKey: 'id_asignatura'});
 
//RELACION ENTRE ASIGNATURAS Y PLAN DE ESTUDIOS
PlanDeEstudio.hasMany(Asignatura,{foreignKey :"id_plan"})
Asignatura.belongsTo(PlanDeEstudio,{foreignKey : 'id_plan'});

//RELACION ENTRE MATRICULA Y PERIODO LECTIVO
PeriodoLectivo.hasMany(Matricula,{foreignKey : 'id_periodo'});
Matricula.belongsTo(PeriodoLectivo,{foreignKey :'id_periodo'});

//RELACION ENTRE PERIODO LECTIVO Y NOTA
PeriodoLectivo.hasMany(Nota,{foreignKey : "id_periodo"});
Nota.belongsTo(PeriodoLectivo,{foreignKey : 'id_periodo'})

//RELACION ENTRE ASIGNATURA Y MATRICULA
Asignatura.hasMany(Matricula, {foreignKey: "id_asignatura"});
Matricula.belongsTo(Asignatura, {foreignKey: "id_asignatura"});

//RELACION ENTRE ESTUDIANTE Y MATRICULA
Estudiante.hasMany(Matricula, {foreignKey: "id_estudiante"});
Matricula.belongsTo(Estudiante, {foreignKey: "id_estudiante"});

//RELACION ENTRE ESTUDIANTE Y PLAN DE ESTUDIO
PlanDeEstudio.hasMany(Estudiante, {foreignKey: "id_plan"});
Estudiante.belongsTo(PlanDeEstudio, {foreignKey: "id_plan"});

//RELACION ENTRE ESTUDIANTE Y DEPARTAMENTO ACADEMICO
DepartamentoAcademico.hasMany(Estudiante, {foreignKey: "id_departamento"});
Estudiante.belongsTo(DepartamentoAcademico, {foreignKey: "id_departamento"});

//RELACION ENTRE MATRICULA Y PROFESOR
Profesor.hasMany(Matricula, {foreignKey: "id_profesor"});
Matricula.belongsTo(Profesor, {foreignKey: "id_profesor"});

//RELACION ENTRE DEPARTAMENTO ACADEMICO Y PLAN DE ESTUDIO
DepartamentoAcademico.hasMany(PlanDeEstudio, {foreignKey: "id_departamento"}); //Muchos a much
PlanDeEstudio.belongsTo(DepartamentoAcademico, {foreignKey:"id_departamento"});

//RELACION ENTRE PROFESOR Y DEPARTAMENTO ACADEMICO (MUCHOS A MUCHOS)
DepartamentoAcademico.belongsToMany(Profesor,{ through: "DepartamentoProfesor"});
Profesor.belongsToMany(DepartamentoAcademico,{through:  "DepartamentoProfesor"});





module.exports = {database, ...database.models}
