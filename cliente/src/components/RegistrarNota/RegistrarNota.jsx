import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./RegistrarNota.module.css"
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior"
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlan, postNota } from "../../redux/actions";
import NavBarSecretaria from "../NavBarSecretaria/NavBarSecretaria";
import { getStudenById } from "../../redux/actions";
import { getCursoById } from "../../redux/actions";
import { getPeriodo, cleanStudentByDni } from "../../redux/actions";

import SearchBar from "../SearchBar/SearchBar";



const RegistrarNota = ()=>{

    const token = useSelector(state => state.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cursos = useSelector((state)=>state.cursoFiltradoPorPlan);
    const periodo = useSelector((state)=>state.periodo);
    const estudiantes = useSelector((state)=>state.students)
    const estudiante = useSelector((state)=>state.studentById);

    const [input, setInput] = useState({
        
        valor_numeros: 0,
        valor_letras:"",
        tipo_nota:"",
        fecha:"",
        id_estudiante: 0,
        id_asignatura:0,
        id_periodo:0
        

    })
    
    useEffect(()=>{
        dispatch(getPeriodo());
        dispatch(getStudenById(input.id_estudiante))
        
    },[dispatch, input.id_estudiante])

    console.log("Estudiante actual",estudiante)
    
    function cargarCursos(e){
        e.preventDefault()
        dispatch(getCursoById(estudiante?.id_plan))
    }
    

    console.log("***************************************")
    console.log("nota en letras:",input.valor_letras)
    console.log("nota en numeros", input.valor_numeros)
    console.log("tipo de nota:",input.tipo_nota)
    console.log("fecha:",input.fecha)
    console.log("ID de estudiante:",input.id_estudiante)
    console.log("ID asignatura:",input.id_asignatura)
    console.log("ID periodo:",input.id_periodo)
    console.log("***************************************")

    function handleChangeSelect(e){
        setInput(

            {
                ...input,
                [e.target.name]: e.target.value
            })
    }


    function handleChangeSelectEstudiante(e){
        setInput(

            {
                ...input,
                id_estudiante: e.target.value
            })
        
    }

    function handleSelectValorNumeros(e){
        setInput({
            ...input,
            [e.target.name]: parseInt(e.target.value),
        })
    }

   

    function consultarCurso(){
        
        dispatch(getCursoById(estudiante.id_plan));
        setInput({
            ...input,
            id_estudiante: estudiante.id_estudiante})
        
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postNota(input));
        alert("Nota Registrada exitosamente!");
        setInput({
            valor_numeros: 0,
            valor_letras:"",
            tipo_nota:"",
            fecha:"",
            id_estudiante: 0,
            id_asignatura:0,
            id_periodo:0
            
        
        
        });
       navigate('/home');

    }

    return(
        <div className={style.grid}>
            <div>
                
                {token.role === 'Secretaria'?  <NavBarSecretaria/>: <NavBar/>}
            </div>

            <div>
                <div>
                    <NavBarSuperior/>
                </div>
                    
                <div className={style.container}>
                <h1>Registrar Nota </h1>
            <SearchBar/> 
            <form onSubmit={(e)=>handleSubmit(e)}>
                

                <div>
                    
                    
                    <select className={style.select} name="id_estudiante" onChange={(e)=>handleChangeSelectEstudiante(e)} >
                        <option disabled selected>Seleccione estudiante</option>
                        {
                            estudiantes.map((ele, index) => (


                                <option key={index} value={ele.id_estudiante}> {ele.apellidos} {ele.nombres}</option>

                            ))
                        }

                    </select>

                </div>

                <div>
                    
                    
                    <select className={style.select}  name="id_periodo"  onChange={(e) => handleSelectValorNumeros(e)}>
                        <option disabled selected>Elija un Periodo Lectivo</option>
                        {
                            periodo.map((ele, index) => (


                                <option key={index} value={ele.id_periodo}> {ele.nombre}</option>

                            ))
                        }

                    </select>

                </div>

                <button className={style.submit} type="button" onClick={(e)=>cargarCursos(e)}>Cargar cursos</button>

                                
               
                
                <div>
                
                    <select className={style.select} name="id_asignatura" onChange={(e)=> handleSelectValorNumeros(e)}>
                        <option disabled selected>Elija una Unidad Didáctica</option>
                        {
                            cursos.map((ele,index) => (
                                
                                
                                <option  key={index} value={ele.id_asignatura}> {ele.nombre} </option>
                                                                
                            ))
                        }
                        
                    </select>

                </div>

               

                <div>
                    
                    <select className={style.select} name="valor_numeros" onChange={(e) => handleSelectValorNumeros(e)} >
                      <option disabled selected >Seleccione una calificación en números</option>   
                    {Array.from({ length: 21 }, (_, index) => (
                            <option key={index} value={index}>
                                {index}
                            </option>
                        ))}

                    </select>

                </div>
                <div>
                    
                    <select className={style.select} name="valor_letras" onChange={(e) => handleChangeSelect(e)} >
                      <option disabled selected >Seleccione una calificación en letras</option>   
                    
                            <option  value="CERO">CERO</option>
                            <option  value="UNO">UNO</option>
                            <option  value="DOS">DOS</option>
                            <option  value="TRES">TRES</option>
                            <option  value="CUATRO">CUATRO</option>
                            <option  value="CINCO">CINCO</option>
                            <option  value="SEIS">SEIS</option>
                            <option  value="SIETE">SIETE</option>
                            <option  value="OCHO">OCHO</option>
                            <option  value="NUEVE">NUEVE</option>
                            <option  value="DIEZ">DIEZ</option>
                            <option  value="ONCE">ONCE</option>
                            <option  value="DOCE">DOCE</option>
                            <option  value="TRECE">TRECE</option>
                            <option  value="CATORCE">CATORCE</option>
                            <option  value="QUINCE">QUINCE</option>
                            <option  value="DIECISEIS">DIECISEIS</option>
                            <option  value="DIECISIETE">DIECISIETE</option>
                            <option  value="DIECIOCHO">DIECIOCHO</option>
                            <option  value="DIECINUEVE">DIECINUEVE</option>
                            <option  value="VEINTE">VEINTE</option>

                        

                    </select>

                </div>

                <div>
                   
                    <select className={style.select}  name="tipo_nota" onChange={(e) => handleChangeSelect(e)} >
                      <option disabled selected >Seleccione Tipo de Calificación</option>   
                    
                            <option  value="Semestral">Semestral</option>
                            <option  value="Recuperación">Recuperación</option>
                            <option  value="Nivelación">Nivelación</option>
                            <option  value="Cargo">Cargo</option>
                            <option  value="Convalidación">Convalidación</option>
                            <option  value="Extraordinario">Extraordinario</option>
                    </select>

                </div>
                <div>
                    <label className={style.label}>Fecha de obtención de la nota:</label>
                    <input 
                    className={style.input}
                    type="date"
                    value={input.fecha}
                    name="fecha"
                    onChange={(e)=>{handleChangeSelect(e)}}
                    
                    
                    />
                </div>
                
                    
                
                  
                <button type="submit" className={style.submit}>Registrar Nota</button>
                
                
            </form>
                </div>
            </div>
            
        </div>
    )
}

export default RegistrarNota;