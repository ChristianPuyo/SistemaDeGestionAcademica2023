const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("Asignatura",{
        id_asignatura: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        creditos: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        ciclo: {
            type: DataTypes.STRING(60),
            allowNull: false
        }
       
    }, {timestamps: false})
}