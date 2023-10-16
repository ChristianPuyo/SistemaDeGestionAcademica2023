const { Router } = require("express");
const { consultaEstudianteNotas } = require("../controllers/consultaEstudianteNotasControllers");




const consultaEstudianteNotasRouter = Router();

consultaEstudianteNotasRouter.get("/", async (req, res)=>{

    const { id } = req.query;
    let consulta; 
    try {
        if (id) {
            consulta = await consultaEstudianteNotas(id);
        } 
        res.status(200).json(consulta);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = consultaEstudianteNotasRouter;