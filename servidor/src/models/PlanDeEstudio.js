const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("PlanDeEstudio",{
        id_plan: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
            
        }
       
    }, {timestamps: false})
}