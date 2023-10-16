import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./CreatePlanDeEstudio.module.css"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { getDepartamento } from "../../redux/actions";
import { postPlan } from '../../redux/actions';
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";


const CreatePlanDeEstudio = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dep = useSelector((state)=>state.departamentos);
    

    const [input, setInput] = useState({
        nombre : "",
        descripcion:"",
        departamentoAcademico:""

    })

    useEffect(()=>{
        dispatch(getDepartamento())
    },[])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e){
        setInput({
            ...input,
            departamentoAcademico: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPlan(input));
        alert("Plan de Estudio Registrado exitosamente!");
        setInput({
            nombre : "",
            descripcion:"",
            departamentoAcademico:""
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
                <h1>Registrar Plan de Estudio</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    
                    <input 
                    className={style.input}
                    type="text"
                    value={input.nombre}
                    name="nombre"
                    onChange={(e)=> handleChange(e)}
                    placeholder="Nombre del plan"
                    />
                </div>
                <div>
                    
                    <input 
                    className={style.input}
                    type="text"
                    value={input.descripcion}
                    name="descripcion"
                    onChange={(e)=> handleChange(e)}
                    placeholder="Decripción del plan de estudio"
                    />
                </div>
                
                <div>
                
                    <select  className={style.inputSelect} onChange={(e)=> handleSelect(e)}>
                    <option disabled selected>Seleccione Programa de Estudio</option>
                        {
                            dep.map((ele,index) => (
                                
                                
                                <option  key={index} value={ele.nombre}> {ele.nombre} </option>
                                                                
                            ))
                        }
                        
                    </select>

                </div>
                    
                
                  
                <button type="submit" className={style.submit}>Registrar Plan</button>
                
                
            </form>
                </div>

            </div>
            
        </div>
    )
}

export default CreatePlanDeEstudio;