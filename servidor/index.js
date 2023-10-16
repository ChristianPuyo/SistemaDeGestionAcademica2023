const express = require('express');
require("dotenv").config();
const path = require('path');
const { database } = require('./src/db');
const morgan = require('morgan');
const cors = require('cors');
const studentRouter = require('./src/routes/studentRouter');
const departamentoRouter = require("./src/routes/departamentoRouter");
const planRouter = require('./src/routes/planRouter');
const consultaPlanDepartamento=require('./src/routes/consultaPlanDepartamento');
const cursoRouter = require('./src/routes/cursoRouter');
const periodoRouter = require('./src/routes/periodoRouter');
const notaRouter = require('./src/routes/notaRouter');
const certificadoRouter = require('./src/routes/certificadoRouter');


const userRouter = require('./src/routes/userRouter'); 

const consultaEstudianteNotasRouter = require('./src/routes/consultaEstudianteNotasRouter');


const server = express();

server.use(express.static(path.join(__dirname, 'build')));


//Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json()); 

server.use("/student", studentRouter)
server.use("/departamento", departamentoRouter)
server.use("/plan", planRouter)
server.use("/curso", cursoRouter)
server.use("/consulta1", consultaPlanDepartamento)
server.use("/periodo", periodoRouter)
server.use("/nota", notaRouter )
server.use("/certificado", certificadoRouter)
server.use("/user", userRouter)
server.use("/consultaestudiantenotas", consultaEstudianteNotasRouter)
const PORT = process.env.PORT;  
 
// force:true -> Elimina todas las tablas de la DB y las vuelve a crear en base a los modelos
// alter: true -> Actualiza las tablas de la DB en base a los modelos. 

// Configurar una ruta de manejo para todas las demás solicitudes
server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


database  
.sync({alter: true}) 
.then(()=>{ 
    server.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`) 
    })
}).catch(error => console.log("El error es el siguiente:", error.message)) 

      