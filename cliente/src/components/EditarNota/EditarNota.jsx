import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./EditarNota.module.css"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { getPlan, updateNotaById } from "../../redux/actions";
import { postCurso } from '../../redux/actions';
import { useParams } from "react-router-dom";
import { getNotaById } from "../../redux/actions";


const EditarNota = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const nota = useSelector((state)=>state.notaById);
    

    const [input, setInput] = useState({
        valor_numeros : "",
        valor_letras: "",
        

    })
    
    
    useEffect(()=>{
        dispatch(getNotaById(id))
        
    },[])

    



    console.log("Nota en números:",input.valor_numeros)
    console.log("Nota en letras:",input.valor_letras)
    

    

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function volver(e){
        navigate(-1)
    }

 
    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateNotaById(nota.id_nota, input));
        alert("Nota Actualizada exitosamente!");
        setInput({
            valor_numeros : "",
            valor_letras: "",
        });
      
        navigate(-1);
    }

   

    return(
        <div className={style.container}>
            {/* <Link to="/consultarnotas"><button className={style.submit}>Volver</button></Link> */}
            <button onClick={(e)=>volver(e)} className={style.submit}>Volver</button>
            <h1>Editar Nota</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label className={style.label}>Nota en Números:</label>
                    <input 
                    className={style.input}
                    type="number"
                    value={input.valor_numeros}
                    name="valor_numeros"
                    onChange={(e)=> handleChange(e)}
                    />
                </div>
                <div>
                    <label className={style.label}>Nota en Letras:</label>
                    <input 
                    className={style.input}
                    type="text"
                    value={input.valor_letras}
                    name="valor_letras" 
                    onChange={(e)=> handleChange(e)}
                    />
                </div>
                
                

                    
                
                  
                <button type="submit" className={style.submit}>Actualizar Nota</button>
                
                
            </form>
        </div>
    )
}

export default EditarNota;