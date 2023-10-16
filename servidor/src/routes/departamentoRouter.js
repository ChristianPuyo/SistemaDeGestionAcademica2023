const { Router } = require("express");
const { getDepartamento} = require("../controllers/departamentoControllers")

const departamentoRouter = Router();

departamentoRouter.get("/", async (req, res)=>{

    let departamento;
    try {
       
        departamento = await getDepartamento();
        res.status(200).json(departamento);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = departamentoRouter;