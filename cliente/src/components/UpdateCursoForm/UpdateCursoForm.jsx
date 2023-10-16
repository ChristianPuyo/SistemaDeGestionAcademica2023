import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./UpdateCursoForm.module.css"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { cleanMessage, getCursoById2, getPlan, updateCurso } from "../../redux/actions";
import { postCurso } from '../../redux/actions';
import { useParams } from "react-router-dom";



const UpdateCursoForm = ()=>{
    const message = useSelector((state=>state.messageOperation))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const curso = useSelector((state)=>state.cursoById);
    const plan = useSelector((state)=>state.plan);
    const {id} = useParams();
    

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
        dispatch(getCursoById2(id))
        dispatch(getPlan())
        
    },[dispatch])

    useEffect(()=>{
        if(curso){
            setInput(curso)
        }
    },[curso])

    useEffect(() => {
        if (message.length>0) {
          alert(message)
          dispatch(cleanMessage())
          navigate('/home');
        
        }
      }, [message, dispatch]);

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
        dispatch(updateCurso(id, input));
        
        setInput({
            nombre: "",
            creditos: "",
            ciclo:"",
            id_plan: ""
        });
       

    }

    return(
        <div className={style.container}>
            <Link to="/home"><button className={style.submit}>Volver</button></Link>
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
                    
                
                  
                <button type="submit" className={style.submit}>Guardar Cambios</button>
                
                
            </form>
        </div>
    )
}

export default UpdateCursoForm;