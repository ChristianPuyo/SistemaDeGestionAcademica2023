const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("DepartamentoAcademico",{
        id_departamento: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
            
        }
       
    }, {timestamps: false})
}