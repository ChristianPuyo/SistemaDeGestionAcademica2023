import React, { useEffect } from "react";
import { useState } from "react";
import { getStudentsByApellidos } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBar.module.css"



const SearchBar = ()=>{
    
    const dispatch= useDispatch();
    const [apellidos, setApellidos]= useState("")

    function handleChangeInput(e){
        e.preventDefault()
        setApellidos(e.target.value)
        
        
    }

    

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getStudentsByApellidos(apellidos))
    }
    

    return(
        <div className={style.container}>
            <input className={style.input} type="text" onChange={(e)=>handleChangeInput(e)} placeholder='Buscar por apellidos'/>
            <button className={style.button} type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
    )
}

export default SearchBar;