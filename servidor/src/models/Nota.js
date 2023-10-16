const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("Nota",{
        id_nota: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        valor_numeros: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor_letras: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_nota: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull:false
        }
       
    }, {timestamps: false})
}