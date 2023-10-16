const { Estudiante, PlanDeEstudio } = require("../db")
const { Op } = require("sequelize")

// Esto sirve para...
const createStudent = async (nombres, apellidos, dni, genero, fechaNacimiento, email, id_plan, id_departamento)=>{
    
    


    const newStudent = await Estudiante.create({nombres, apellidos, dni, genero, fechaNacimiento, email, id_plan, id_departamento})
    return newStudent;
}


const insertarDatosMasivos = async (data)=>{
    
    
    const datosMasivos = await Estudiante.bulkCreate(data)
    return datosMasivos;
 
}

const getStudent = async ()=>{
    const Students = await Estudiante.findAll();
    return Students;

};

const findStudent = async (apellidos)=>{
    const result = await Estudiante.findAll({
        where : {
            apellidos: {[Op.iLike]: `%${apellidos}%`}
        } 
    })
    return result
}


const buscarEstudiantePorDni = async (dni)=>{
    const result = await Estudiante.findOne({
        where : {
            dni: dni
        } 
    })
    return result
}
const buscarEstudiantePorId2 = async (id_estudiante)=>{
    const result = await Estudiante.findOne({
        where : {
            id_estudiante: id_estudiante
        } 
    })
    return result
}


const findStudentById = async (id)=>{
    const studentFound = await Estudiante.findByPk(id);
    
    return studentFound;
}

const updateStudent = async(id, nombres, apellidos, dni, genero, fechaNacimiento, edad, email, id_departamento, id_plan)=>{
    const findStudent= await Estudiante.findByPk(id);

    const studentUpdate = await findStudent.update({nombres, apellidos, dni, genero, fechaNacimiento, email, id_departamento, id_plan })
    return studentUpdate;

}

const deleteStudent = async (id)=>{
    const user = await Estudiante.findByPk(id);
    await user.destroy();
    return user;
}



module.exports = { 
    getStudent,
    findStudent,
    findStudentById,
    createStudent,
    deleteStudent,
    buscarEstudiantePorDni,
    buscarEstudiantePorId2,
    updateStudent,
    insertarDatosMasivos
};  //exporting the functions to be used in other files