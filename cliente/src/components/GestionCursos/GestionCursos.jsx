import React from "react";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCursos } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./GestionCursos.module.css"
import SearchBarCurso from "../SearchBarCurso/SearchBarCurso";
import NavBar from "../NavBar/NavBar"
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";

const GestionCursos = ()=>{

    const dispatch = useDispatch();
    const cursos = useSelector(state=>state.cursos)
    useEffect(()=>{
        dispatch(getCursos())
    },[dispatch])
    return(
        <div className={style.grid}>
            <div>
                <NavBar />
            </div>

            <div>
                <div>
                    <NavBarSuperior/>
                </div>

                <div className={style.container}>
                <h2>Gestionar Unidades Didácticas</h2>
            <SearchBarCurso/>
            <br></br>

            <div className={style.tablacontainer}>
                <table className={style.tabla} >
                    <thead className={style.encabezado}>
                        <tr>
                            <th className={style.tabla}>Id</th>
                            <th className={style.tabla}>Nombre</th>
                            <th className={style.tabla}>Creditos</th>
                            <th className={style.tabla}>Ciclo</th>
                            <th className={style.tabla}>Id Plan de Estudio</th>
                            <th className={style.tabla}>Actualizar</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map(cursos => (
                            <tr key={cursos.id_asignatura}>
                                <td className={style.encabezado}>{cursos.id_asignatura}</td>
                                <td className={style.encabezado}>{cursos.nombre}</td>
                                <td className={style.encabezado}>{cursos.creditos}</td>
                                <td className={style.encabezado}>{cursos.ciclo}</td>
                                <td className={style.encabezado}>{cursos.id_plan}</td>

                                <td className={style.encabezado}><Link to={`/updatecurso/${cursos.id_asignatura}`} >Modificar</Link></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                </div>

            </div>


        </div>
    )
}

export default GestionCursos;