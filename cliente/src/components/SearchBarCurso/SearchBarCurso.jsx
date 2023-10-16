import React, { useEffect } from "react";
import { useState } from "react";
import { getCursoByName} from "../../redux/actions";
import { useDispatch} from "react-redux";
import style from "./SearchBarCurso.module.css"



const SearchBarCurso = ()=>{ 
    
    const dispatch= useDispatch();
    const [nombre, setNombre]= useState("")

    function handleChangeInput(e){
        e.preventDefault()
        setNombre(e.target.value) 
        
        
    }

    

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getCursoByName(nombre)) //Aqui va la acción que busca los cursos
    }
    

    return(
        <div className={style.container}>
            <input className={style.input} type="text" onChange={(e)=>handleChangeInput(e)} placeholder='Buscar por nombre de curso'/>
            <button className={style.button} type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
    )
}

export default SearchBarCurso;