const { Router } = require("express");
const { createPlan, getPlan } = require("../controllers/planControllers");


const planRouter = Router();

planRouter.get("/", async (req, res)=>{

    let plan;
    try {
       
        plan = await getPlan();
        res.status(200).json(plan);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


planRouter.post("/", async (req, res)=>{
    
    const { nombre, descripcion, departamentoAcademico } = req.body;
    try {
        const newPlan = await createPlan(nombre, descripcion, departamentoAcademico)
        res.status(200).json(newPlan);
        
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
    
})




module.exports = planRouter;