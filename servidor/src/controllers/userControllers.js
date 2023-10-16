const { User } = require("../db")
const { Op } = require("sequelize")
const bcrypt = require('bcrypt');
const saltRounds = 10; // El número de rondas de encriptación
const jwt = require('jsonwebtoken');













const createUser = async (username, password, role)=>{
    
    
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Crea un nuevo usuario con la contraseña encriptada
        const newUser = await User.create({username, password:hashedPassword, role});
    
        return newUser;
      
}

const validarCredenciales = async (username, password)=>{
    
    
    try {
        
    
        // Busca al usuario por su nombre de usuario
        const user = await User.findOne({ where: { username } });
    
        // Si el usuario no existe, devuelve un error de autenticación
        if (!user) {
          throw new Error("Usuario no encontrado")
        }
    
        // Compara la contraseña ingresada con la contraseña encriptada almacenada
        const validPassword = await bcrypt.compare(password, user.password);
    
        // Si la contraseña es válida, crea y firma un token JWT
        if (validPassword) {
          const token = jwt.sign({success: true, userId: user.id_user, role: user.role }, 'secretKey', { expiresIn: '1h' });
          return { token: token, role: user.role, userName: user.username };
          
        } else { 
          throw new Error("Contraseña incorrecta")
        }
      } catch (error) {      
        throw new Error(error.message)   
      }
  
} 


module.exports = { 
    createUser,
    validarCredenciales
}; 