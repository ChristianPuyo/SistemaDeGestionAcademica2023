const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("Profesor",{
        id_profesor: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombres: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        apellido_paterno: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        apellido_materno: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        genero: {
            type: DataTypes.ENUM('Masculino', 'Femenino'),
        },
        edad: {
            type: DataTypes.STRING(10),
        },
        email: {
            type: DataTypes.STRING(60),
            unique: true,
        }
    }, {timestamps: false})
}