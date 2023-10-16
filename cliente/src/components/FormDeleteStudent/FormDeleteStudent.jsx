import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./FormDeleteStudent.module.css"
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { getStudenById, deleteStudent} from "../../redux/actions";




const FormDeleteStudent = ()=>{
     
    const {id}= useParams();
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const estudiante = useSelector((state)=>state.studentById);

    useEffect(()=>{
      dispatch(getStudenById(id))
    },[])

    console.log("El estudiante es: ",estudiante)
    



   
   

    
    

      function handleSubmit(e) {
        e.preventDefault();
        dispatch(deleteStudent(estudiante.id_estudiante))
       
    
        alert("Estudiante eliminado 👌!!");
        navigate("/gestionarestudiantes");
      }

    return(
        <div className={style.container}>
            <Link to="/home"><button className={style.submit}>Volver</button></Link>
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2>¿Quieres eliminar al estudiante?</h2>
                <h1><b>{estudiante.nombres} {estudiante.apellidos}</b></h1>
                  
                
                
                <button type="submit"  className={style.submit}>SI</button>
                <Link to="/gestionarestudiantes"><button className={style.submit}>NO</button></Link>
            </form>

                
                
                
           
        </div>
    )
}

export default FormDeleteStudent;