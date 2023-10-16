const { PlanDeEstudio, DepartamentoAcademico } = require("../db")
const { Op } = require("sequelize")



const createPlan = async (nombre, descripcion, departamentoAcademico)=>{
    

  const plan = await DepartamentoAcademico.findOne({
    where: {
      nombre: departamentoAcademico
    }
  });


    const id_departamento= plan.id_departamento;
    
    const newPlan = await PlanDeEstudio.create({nombre, descripcion, id_departamento })
    return newPlan;
}



const getPlan = async ()=>{
    const plan = await PlanDeEstudio.findAll();
    return plan;

};

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
    
    createPlan,
    getPlan
    
};  //exporting the functions to be used in other files