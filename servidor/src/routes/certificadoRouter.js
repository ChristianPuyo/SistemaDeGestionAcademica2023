const { Router } = require("express");
const { consultaCertificado } = require("../controllers/certificadoControllers");



const certificadoRouter = Router();

certificadoRouter.get("/", async (req, res)=>{

    const { id } = req.query;
    let certificado; 
    try {
        if (id) {
            certificado = await consultaCertificado(id);
        } 
        res.status(200).json(certificado);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = certificadoRouter;