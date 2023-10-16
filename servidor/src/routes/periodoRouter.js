const { Router } = require("express");
const { createPeriodo, getPeriodo } = require("../controllers/periodoControllers");



const periodoRouter = Router();

periodoRouter.get("/", async (req, res)=>{

    let periodo;
    try {
       
        periodo = await getPeriodo();
        res.status(200).json(periodo);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


periodoRouter.post("/", async (req, res)=>{
    
    const { nombre, fecha_inicio, fecha_fin } = req.body;
    try {
        const newPeriodo = await createPeriodo(nombre, fecha_inicio, fecha_fin)
        res.status(200).json(newPeriodo);
        
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
    
})




module.exports = periodoRouter;