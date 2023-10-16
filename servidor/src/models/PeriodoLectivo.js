const { DataTypes } = require("sequelize");
const {Sequelize} = require("sequelize")

module.exports = (database)=>{
    database.define("PeriodoLectivo",{
        id_periodo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull:false  
            
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull:false
            
        }

       
    }, {timestamps: false})
}