const { DataTypes } = require("sequelize");

module.exports = (database)=>{
    database.define("Estudiante",{
        id_estudiante: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombres: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
       
        genero: {
            type: DataTypes.ENUM('Masculino', 'Femenino'),
        },
        fechaNacimiento: {
            type: DataTypes.STRING(60),
        },
        email: {
            type: DataTypes.STRING(60),
            unique: true,
        }
    }, {timestamps: false})
}

