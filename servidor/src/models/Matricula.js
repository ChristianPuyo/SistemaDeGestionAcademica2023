const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("Matricula",{
        id_matricula: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fecha_matricula: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ciclo: {
            type: DataTypes.STRING(10),
            allowNull:false
            
        }
        
       
    }, {timestamps: false})
}