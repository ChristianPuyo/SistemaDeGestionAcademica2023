const { Router } = require("express");
const { getStudent, findStudent, findStudentById, createStudent, deleteStudent, buscarEstudiantePorDni,
        buscarEstudiantePorId2, updateStudent, insertarDatosMasivos  } = require("../controllers/studentControllers");


const studentRouter = Router();

studentRouter.get("/", async (req, res)=>{

    const { apellidos } = req.query;
    const { dni } = req.query;
    const {id_estudiante} = req.query;
    let student; 
    try {
        if (apellidos) {
            student = await findStudent(apellidos);
        } else if(dni){
            student = await buscarEstudiantePorDni(dni);
        }else if(id_estudiante){
            student = await buscarEstudiantePorId2(id_estudiante);
        }else {
            student = await getStudent();
        }
        res.status(200).json(student); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

studentRouter.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        let student = await findStudentById(id);
        res.status(200).json(student)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

studentRouter.post("/", async (req, res)=>{
    
    const { nombres, apellidos, dni, genero, fechaNacimiento, email, id_plan, id_departamento } = req.body;
    
        try {
            const newStudent = await createStudent(nombres, apellidos, dni, genero, fechaNacimiento, email, id_plan, id_departamento)
            res.status(200).json(newStudent);
            
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
      
    
})

studentRouter.post("/cargamasiva", async (req, res)=>{
    
    const data = req.body;
    console.log(data);
    
        try {
            if (data.length>0) {
                const datosMasivos = await insertarDatosMasivos(data)
                res.status(200).json(datosMasivos);
            } else {
                throw new Error('Archivo vacio')  
            }     
            
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
})

studentRouter.put("/:id", async (req, res)=>{

    const{ id }  = req.params ;
    const{ nombres, apellidos, dni, genero, fechaNacimiento, edad, email, id_departamento, id_plan}= req.body;
    console.log(req.body)
    try {
        const actualizarEstudiante = await updateStudent(id, nombres, apellidos, dni, genero, fechaNacimiento, edad, email, id_departamento, id_plan );
        res.status(200).json(actualizarEstudiante)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})



studentRouter.delete("/:id", async (req, res)=>{
    const{ id }  = req.params ;
    try {
        const studentDeleted = await deleteStudent(id);
        res.status(200).json(studentDeleted)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = studentRouter;