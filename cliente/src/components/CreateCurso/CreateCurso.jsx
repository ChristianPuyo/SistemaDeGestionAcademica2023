import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./CreateCurso.module.css"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { getPlan } from "../../redux/actions";
import { postCurso } from '../../redux/actions';
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";


const CreateCurso = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const plan = useSelector((state)=>state.plan);
    

    const [input, setInput] = useState({
        nombre : "",
        creditos:"",
        ciclo:"",
        id_plan:""

    })
    
    console.log("Nombre:",input.nombre)
    console.log("creditos:",input.creditos)
    console.log("ciclo:",input.ciclo)
    console.log("id_plan:",input.id_plan)

    useEffect(()=>{
        dispatch(getPlan())
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
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postCurso(input));
        alert("Curso Registrado exitosamente!");
        setInput({
            nombre: "",
            creditos: "",
            ciclo:"",
            id_plan: ""
        });
       navigate('/home');

    }

    return(
        <div className={style.grid}>

            <div>
                <NavBar/>
            </div>
            
            <div>
                <NavBarSuperior/>
            <div className={style.container}>
            <h1>Registrar Unidad Didáctica</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    
                    <input 
                    className={style.input}
                    type="text"
                    value={input.nombre}
                    name="nombre"
                    onChange={(e)=> handleChange(e)}
                    placeholder="Nombre de la Unidad Didáctica"
                    />
                </div>
                <div>
                    
                    <input 
                    className={style.input}
                    type="number"
                    value={input.descripcion}
                    name="creditos" 
                    onChange={(e)=> handleChange(e)}
                    placeholder="Créditos"
                    />

                </div>
                
                <div>
                
                    <select className={style.inputSelect} name="ciclo" onChange={(e)=> handleSelect(e)}>
                        <option disabled selected>Ciclo de la Unidad Didáctica</option>
                        <option   value="I"> I </option>
                        <option   value="II"> II </option>
                        <option   value="III"> III </option>
                        <option   value="IV"> IV </option>
                        <option   value="V"> V </option>
                        <option   value="VI"> VI </option>
                                                                
                            
                        
                    
                    </select>

                </div>

                <div>
                
                    <select className={style.inputSelect} name="id_plan" onChange={(e)=> handleSelect(e)}>
                        <option disabled selected>Elija un Plan de Estudio</option>
                        {
                            plan.map((ele,index) => (
                                
                                
                                <option  key={index} value={ele.id_plan}> {ele.descripcion} </option>
                                                                
                            ))
                        }
                        
                    </select>

                </div>
                    
                
                  
                <button type="submit" className={style.submit}>Registrar Curso</button>
                
                
            </form>
            </div>
            </div>
            
            
        </div>
    )
}

export default CreateCurso;