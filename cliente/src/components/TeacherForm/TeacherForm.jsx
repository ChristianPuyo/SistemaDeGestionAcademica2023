import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./TeacherForm.module.css"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { postStudent, getPlan, getStudents, getDepartamento, updateStudent, cleanMessage, clearPlan, clearDepartamentos } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";

const TeacherForm = ()=>{   
    const currentStudent = useSelector((state)=>state.currentStudent);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const planes = useSelector((state) => state.plan)
    const estudiantes = useSelector((state)=>state.students)
    const departamentos = useSelector((state)=>state.departamentos)
    const message = useSelector((state=>state.messageOperation))
    
    
    const [isEditing, setIsEditing]= useState(false)
    
    const [input, setInput] = useState({
        nombres : "",
        apellidos:"",
        dni:"",
        email:"",
        fechaNacimiento:"",
        edad:"",
        genero:"",
        id_plan:"",
        id_departamento:""

    })

    useEffect(()=>{
        dispatch(getPlan())
        dispatch(getDepartamento());
        if(currentStudent){
            setIsEditing(true)
            setInput(currentStudent)
        }
        return ()=>{
            dispatch(clearPlan());
            dispatch(clearDepartamentos());
        }
    },[currentStudent])

    useEffect(() => {
        if (message.length>0) {
          alert(message)
          dispatch(cleanMessage())
          navigate('/home');
        
        }
      }, [message, dispatch]);

    console.log("*******************************")
    console.log("nombres:",input.nombres)
    console.log("apellidos:",input.apellidos)
    console.log("dni:",input.dni)
    console.log("email:",input.email)
    console.log("fechaNacimiento:",input.fechaNacimiento)
    console.log("edad:",input.edad)
    console.log("genero:",input.genero)
    console.log("id_plan:",input.id_plan)
    console.log("id departamento:",input.id_departamento)

    console.log("*******************************")

    function handleChangeSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault();
        if (isEditing===true) {
            dispatch(updateStudent(currentStudent.id_estudiante, input));
            // alert("Estudiante Guardado!!");
            // navigate('/home');
            setInput(
                {
                    nombres: "",
                    apellidos: "",
                    dni: "",
                    email: "",
                    fechaNacimiento: "",
                    edad: "",
                    genero: "",
                    id_plan: "",
                    id_departamento: ""
            
                }
            )

        } else {
            dispatch(postStudent(input));
            // alert("Estudiante Guardado!!");
            // navigate('/home');
            setInput(
                {
                    nombres : "",
                    apellidos:"",
                    dni:"",
                    email:"",
                    fechaNacimiento:"",
                    edad:"",
                    genero:"",
                    id_plan:"",
                    id_departamento:""
            
                }
            )
        }
       

    }

    return(
        <div className={style.grid}>
            <div>
                <NavBar/>
            </div>

            <div>
                <div>
                    <NavBarSuperior/>
                </div>
                <div className={style.container}>
                        <h1>EN CONSTRUCCIÓN...</h1>
                </div>
            </div>
            
        </div>
        // <div className={style.container}>
        //     <Link to="/home"><button className={style.submit}>Volver</button></Link>
        //     <h1>{isEditing ? 'Actualizar Estudiante' : 'Crear Estudiante'}</h1>
        //     <form onSubmit={(e)=>handleSubmit(e)} method={isEditing ? 'PUT' : 'POST'} >
        //         <div>
                    
        //             <input 
        //             className={style.input}
        //             type="text"
        //             value={input.nombres}
        //             name="nombres"
        //             onChange={(e)=> handleChange(e)}
        //             placeholder="Ingrese nombres"
        //             />
        //         </div>
        //         <div>
                  
        //             <input 
        //             className={style.input}
        //             type="text"
        //             value={input.apellidos}
        //             name="apellidos"
        //             onChange={(e)=> handleChange(e)}
        //             placeholder="Ingrese apellidos"
        //             />
        //         </div>
        //         <div>
                    
        //             <input 
        //             className={style.input}
        //             type="number"
        //             value={input.dni}
        //             name="dni"
        //             onChange={(e)=> handleChange(e)}
        //             placeholder="Ingrese DNI"
        //             />
        //         </div>
        //         <div>
                
        //             <select className={style.inputSelect} name="genero" onChange={(e)=>handleChangeSelect(e)}>
        //                 <option disabled selected>Seleccione Género</option>
        //                 <option value="Masculino" >Masculino</option>
        //                 <option value= "Femenino" >Femenino</option>
                        
        //             </select>
        //         </div>
                    

        //         <div>
        //             <label>Fecha de nacimiento</label>
        //             <input 
        //             className={style.input}
        //             type="date"
        //             value={input.fechaNacimiento}
        //             name="fechaNacimiento"
        //             onChange={(e)=> handleChange(e)}
                    
        //             />
        //         </div>

        //         <div>
                    
        //             <input 
        //             className={style.input}
        //             type="number"
        //             value={input.edad}
        //             name="edad"
        //             onChange={(e)=> handleChange(e)}
        //             placeholder="Ingrese edad"
        //             />
        //         </div>
        //         <div>
                    
        //             <input
        //             className={style.input} 
        //             type="email"
        //             value={input.email}
        //             name="email"
        //             onChange={(e)=> handleChange(e)}
        //             placeholder="Ingrese email"
        //             />
        //         </div>

        //         <div>
                
        //             <select className={style.inputSelect} name="id_departamento" onChange={(e)=> handleChangeSelect(e)}>
        //                 <option disabled selected>Selecciona una Programa de Estudios</option>
        //                 {
        //                     departamentos.map((ele,index) => (
                                
                                
        //                         <option  key={index} value={ele.id_departamento}> {ele.nombre} </option>
                                                                
        //                     ))
        //                 }
                        
        //             </select>

        //         </div>

        //         <div>
                
        //             <select className={style.inputSelect} name="id_plan" onChange={(e)=> handleChangeSelect(e)}>
        //                 <option disabled selected>Selecciona plan de estudio</option>
        //                 {
        //                     planes.map((ele,index) => (
                                
                                
        //                         <option  key={index} value={ele.id_plan}> {ele.descripcion} </option>
                                                                
        //                     ))
        //                 }
                        
        //             </select>

        //         </div>

                

                
        //                  <button type="submit" className={style.submit}>{isEditing ? 'Actualizar' : 'Crear'}</button>
                
                
        //     </form>
        // </div>
    )
}

export default TeacherForm;