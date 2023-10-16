const { Router } = require("express");
const { createCurso, getCurso, findCurso, insertarDatosMasivos, 
        updateCurso, findCursoById, findCursoByName 
      } = require("../controllers/cursoControllers");



const cursoRouter = Router();

cursoRouter.get("/", async (req, res)=>{

    
    const { id_plan } = req.query;
    const {nombre} = req.query;
    let curso; 
    try {
        if (id_plan) {
            curso = await findCurso(id_plan);
        } else if(nombre){
            curso = await findCursoByName(nombre);
        }else {
            curso = await getCurso();
        }
        res.status(200).json(curso);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

cursoRouter.post("/", async (req, res)=>{
    
    const { nombre, creditos, ciclo, id_plan } = req.body;
    try {
        const newCurso = await createCurso(nombre, creditos, ciclo, id_plan )
        res.status(200).json(newCurso);
        
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
    
})




cursoRouter.put("/:id", async (req, res)=>{

    const{ id }  = req.params ;
    const{ nombre, creditos, ciclo, id_plan}= req.body;
    console.log(req.body)
    try {
        const actualizarCurso = await updateCurso(id, nombre, creditos, ciclo, id_plan);
        res.status(200).json(actualizarCurso)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


//Buscar curso por Id
cursoRouter.get("/:id", async (req, res)=>{

    const{ id }  = req.params ;
    
    
    try {
        const curso = await findCursoById(id);
        res.status(200).json(curso)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
cursoRouter.post("/cargamasiva", async (req, res)=>{
    
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




module.exports = cursoRouter;