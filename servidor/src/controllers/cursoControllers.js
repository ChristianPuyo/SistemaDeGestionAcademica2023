const { PlanDeEstudio, Asignatura } = require("../db")
const {Op} = require("sequelize")

const createCurso = async (nombre, creditos, ciclo, id_plan )=>{
 
    
    
    const newCurso = await Asignatura.create({nombre, creditos, ciclo, id_plan})
    return newCurso;
}



const updateCurso = async(id, nombre, creditos, ciclo, id_plan)=>{
  const findCurso= await Asignatura.findByPk(id);

  const cursoUpdate = await findCurso.update({nombre, creditos, ciclo, id_plan })
  return cursoUpdate;

}

const findCurso = async (id_plan)=>{
  const result = await Asignatura.findAll({
      where : {
          id_plan: id_plan
      } 
  })
  return result
}

const findCursoById = async (id)=>{
  const result = await Asignatura.findByPk(id)
  return result
}

const getCurso = async ()=>{
  const result = await Asignatura.findAll();
  return result;

};

const findCursoByName = async (nombre)=>{
  const result = await Asignatura.findAll({
      where : {
          nombre: {[Op.iLike]: `%${nombre}%`}
      } 
  })
  return result
}

const insertarDatosMasivos = async (data)=>{
    
    
  const datosMasivos = await Asignatura.bulkCreate(data)
  return datosMasivos;

}



// const getPlan = async ()=>{
//     const plan = await PlanDeEstudio.findAll();
//     return plan;

// };

// const findStudent = async (firstName)=>{
//     const result = await Student.findAll({
//         where : {
//             firstName: {[Op.iLike]: `%${firstName}%`}
//         }
//     })
//     return result
// }

// const findStudentById = async (id)=>{
//     const studentFound = await Student.findByPk(id);
    
//     return studentFound;
// }

// const deleteStudent = async (id)=>{
//     const user = await Student.findByPk(id);
//     await user.destroy();
//     return user;
// }



module.exports = { 
    
    createCurso,
    findCurso,
    getCurso,
    insertarDatosMasivos,
    updateCurso,
    findCursoById,
    findCursoByName
  
    
};  //exporting the functions to be used in other files