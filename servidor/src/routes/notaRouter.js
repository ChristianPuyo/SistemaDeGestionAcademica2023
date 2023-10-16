const { Router } = require("express");
const { createNota, findNotaById, getNotas, updateNota, 
        deleteNota, insertarDatosMasivos 
      } = require("../controllers/notaControllers");





const notaRouter = Router();

notaRouter.get("/", async (req, res)=>{

    
    const { id_nota } = req.query;
    let nota; 
    try {
        if (id_nota) {
            nota = await findNotaById(id_nota);
        } else {
            nota = await getNotas();
        }
        res.status(200).json(nota);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

notaRouter.post("/", async (req, res)=>{
    
    const { valor_numeros, valor_letras, tipo_nota, fecha, id_estudiante, id_asignatura, id_periodo } = req.body;
    try {
        const newNota = await createNota(valor_numeros, valor_letras, tipo_nota, fecha, id_estudiante, id_asignatura, id_periodo)
        res.status(200).json(newNota);
        
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
    
})


notaRouter.put("/:id", async (req, res)=>{
    const{ id }  = req.params ;
    const{ valor_numeros, valor_letras}= req.body;
    try {
        const actualizarNota = await updateNota(id, valor_numeros,valor_letras );
        res.status(200).json(actualizarNota)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

notaRouter.delete("/:id", async (req, res)=>{
    const{ id }  = req.params ;
    try {
        const notaDeleted = await deleteNota(id);
        res.status(200).json(notaDeleted)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

notaRouter.post("/cargamasiva", async (req, res)=>{
    
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



module.exports = notaRouter;