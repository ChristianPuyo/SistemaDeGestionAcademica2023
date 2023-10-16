const { Router } = require("express");
const { consulta1 } = require("../controllers/consultaPlanDepartamentoController");


const consultaPlanDepartamento = Router();

consultaPlanDepartamento.get("/", async (req, res)=>{

    let planDepartamento;
    try {
       
        planDepartamento = await consulta1();
        res.status(200).json(planDepartamento);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = consultaPlanDepartamento;