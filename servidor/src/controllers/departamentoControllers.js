const {DepartamentoAcademico} =require("../db")
const { Op } = require("sequelize")

const getDepartamento = async ()=>{
    const departamento = await DepartamentoAcademico.findAll();
    return departamento;

};

module.exports = {getDepartamento}