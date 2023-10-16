import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./CreatePeriodoLectivo.module.css"
import NavBar from "../NavBar/NavBar"
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";
import { postPeriodo } from '../../redux/actions';


const CreatePeriodoLectivo = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    

    const [input, setInput] = useState({
        nombre : "",
        fecha_inicio:"",
        fecha_fin:""

    })

    console.log("Nombre", input.nombre)
    console.log("Fecha inicio",input.fecha_inicio)
    console.log("Fecha fin",input.fecha_fin)
   

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPeriodo(input));
        alert("Periodo Lectivo Creado Correctamente!");
        setInput({
            nombre : "",
            fecha_inicio:"",
            fecha_fin:""
    
        });
       navigate('/home');

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
                <h1>Registrar Periodo Lectivo</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    
                    <input 
                    className={style.input}
                    type="text"
                    value={input.nombre}
                    name="nombre"
                    onChange={(e)=> handleChange(e)}
                    placeholder="Nombre del periodo lectivo"
                    />
                </div>
                <div>
                    <label className={style.label}>Fecha Inicio:</label>
                    <input
                        className={style.input}
                        type="date"
                        value={input.fecha_inicio}
                        name="fecha_inicio"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label className={style.label}>Fecha Fin:</label>
                    <input
                        className={style.input}
                        type="date"
                        value={input.fecha_fin}
                        name="fecha_fin"
                        onChange={(e) => handleChange(e)}
                    />

                </div>
                    
                
                  
                <button type="submit" className={style.submit}>Registrar Periodo Lectivo</button>
                
                
            </form>
                </div>
            
            </div>
            
        </div>
    )
}

export default CreatePeriodoLectivo;