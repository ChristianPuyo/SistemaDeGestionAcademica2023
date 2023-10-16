const { Nota } = require("../db")

const createNota = async (valor_numeros, valor_letras, tipo_nota, fecha, id_estudiante, id_asignatura, id_periodo)=>{
    
    
    const newNota = await Nota.create({valor_numeros, valor_letras, tipo_nota, fecha, id_estudiante, id_asignatura, id_periodo})
    return newNota;
}

const findNotaById = async (id_nota)=>{
  const result = await Nota.findByPk(id_nota)

  return result
}

const insertarDatosMasivos = async (data)=>{
    
    
  const datosMasivos = await Nota.bulkCreate(data)
  return datosMasivos;

}

const getNotas = async ()=>{
  const result = await Nota.findAll();
  return result;

};

const updateNota = async(id, valor_numeros,valor_letras)=>{
    const findNota= await Nota.findByPk(id);

    const notaUpdate = await findNota.update({valor_numeros, valor_letras})
    return notaUpdate;

}

const deleteNota = async (id)=>{
    const nota = await Nota.findByPk(id);
    await nota.destroy();
    return nota;
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
    
    createNota,
    findNotaById,
    getNotas,
    updateNota,
    deleteNota,
    insertarDatosMasivos
  
    
};  //exporting the functions to be used in other files