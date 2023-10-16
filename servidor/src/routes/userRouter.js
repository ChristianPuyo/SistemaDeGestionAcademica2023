const { Router } = require("express");
const { createUser, validarCredenciales } = require("../controllers/userControllers");


const userRouter = Router();




//Ruta para  registrar un usuario
userRouter.post("/signup", async (req, res)=>{
    
    const { username, password, role } = req.body;
    
        try {
            const newUser = await createUser(username, password, role )
            res.status(200).json(newUser);
            
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
     
})


//Ruta para iniciar sesión
userRouter.post("/login", async (req, res)=>{
    
    const { username, password} = req.body;
    
        try {
            if((!username || !password) ){
              throw new Error("Datos incompletos")  
            }else{
                const validation = await validarCredenciales(username, password)
                res.status(200).json(validation);
            }
            
            
            
        } catch (error) {
            res.status(400).json({error: error.message})
        }
     
})


//Ruta para cerrar sesión
userRouter.post("/logout", async (req, res)=>{
    
    res.json({ message: 'Cierre de sesión exitoso' });
     
})


module.exports = userRouter;