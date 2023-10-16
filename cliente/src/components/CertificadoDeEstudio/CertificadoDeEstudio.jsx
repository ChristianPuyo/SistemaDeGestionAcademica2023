import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCursosNotasCertificado, getStudenById } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import style from "./CertificadoDeEstudio.module.css"
import ReactToPrint from 'react-to-print';
import FechaActual from "../FechaActual/FechaActual";
import logoMinedu from "./logoMinedu.jpg";
import jsPDF from 'jspdf';


 
const CertificadoDeEstudio = ()=>{

      
    

    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector((state)=>state.cursosNotasCertificado)
    const estudiante = useSelector((state)=> state.studentById)

    useEffect(()=>{
        dispatch(getCursosNotasCertificado(id))
        dispatch(getStudenById(id))
    },[])

    let departamento="";

    switch(estudiante?.id_departamento){

        case 1:
            
                departamento ="ADMINISTRACIÓN DE EMPRESAS"
                break;

        case 2:

            departamento = "ADMINISTRACIÓN DE OPERACIONES TURÍSTICAS"
            break;

        case 3:
            departamento = "CONSTRUCCIÓN CIVIL"
            break;
        case 4:
            departamento = "CONTABILIDAD"
            break;
        case 5:
            departamento = "DESARROLLO DE SISTEMAS DE INFORMACIÓN"
            break;
        case 6:
            departamento = "ELECTRICIDAD INDUSTRIAL"
            break;
        case 7:
            departamento = "ENFERMERÍA TÉCNICA"
            break;
        case 8:
            departamento = "MANEJO FORESTAL"
            break;
        case 9:
            departamento = "MECATRÓNICA AUTOMOTRIZ"
            break;
        case 10:
            departamento = "PRODUCCIÓN AGROPECUARIA"
            break;
        case 11:
            departamento = "ASISTENCIA ADMINISTRATIVA"
            break;
        case 12:
            departamento = "ELECTRICIDAD"
            break;
        case 13:
            departamento = "ELECTRÓNICA"
            break;
        case 14:
            departamento = "ELECTROTECNIA INDUSTRIAL"
            break;
        case 15:
            departamento = "GUÍA OFICIAL DE TURISMO"
            break;
        case 16:
            departamento = "ADMINISTRACIÓN"
            break;
        case 17:
            departamento = "COMPUTACIÓN E INFORMÁTICA"
            break;
        case 18:
            departamento = "FORESTAL"
            break;
        case 19:
            departamento = "ADMINISTRACIÓN DE RECURSOS FORESTALES"
            break;

        default:
            departamento=""
    }

    return (
        <div className={style.container}>



            <div id="miReporte">

                <Link to="/generarcertificado"> <img style={{ marginLeft: "-180px" }} src="https://4.bp.blogspot.com/-ZvuRPEKrgoo/WTtGO6k2PkI/AAAAAAAA9Tc/J0IqI8giwGoVWhWi_Z68UckJqICJIarWwCLcB/s1600/ist-suiza-pucallpa-insignia.jpg" alt="Logo del instituto" height="150px" width="130px"></img></Link>

                <img style={{ marginLeft: "250px" }} src={logoMinedu} alt="Logo del ministerio no disponible" height="50px" width="250px"></img>

                <div className={style.divFoto}></div>

                <br></br>
                <br></br>
                <br></br>


                <h6>INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO</h6>
                <h4>"SUIZA"</h4>
                
                
                
                
                <h1>CERTIFICA</h1>
                <br></br>


                <p >
                    Que: <h2>{estudiante?.nombres} {estudiante?.apellidos}</h2>


                </p>

                <table  >
                    <thead>

                    </thead>
                    <tbody>

                        <tr>
                            <td>ha cursado las Unidades Didácticas que se indican en el programa de estudios de:    </td>



                            {/* Agrega más celdas según tus datos */}
                        </tr>

                    </tbody>
                </table>

                <h2>{departamento}</h2>
                <table >
                    <thead>

                    </thead>
                    <tbody>

                        <tr >
                            <td >El resultado final de las evaluaciones fue el siguiente:    </td>


                            {/* Agrega más celdas según tus datos */}
                        </tr>

                    </tbody>
                </table>

                <br></br>




                <div className={style.tablacontainer}>

                    <table className={style.tabla} >
                        <thead>
                            <tr>
                                <th className={style.primerencabezado}>Unidades didácticas</th>
                                <th className={style.tabla}>Número de creditos</th>
                                <th className={style.tabla}>Calificación en números</th>
                                <th className={style.tabla}>Calificación en letras</th>
                                <th className={style.tabla}>Año</th>
                                <th className={style.tabla}>Periodo académico</th>
                                <th className={style.tabla}>Observaciones</th>

                                {/* Agrega más encabezados de columna según tus datos */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(data => (
                                <tr key={data.id_asignatura}>
                                    <td className={style.filas}>{data.nombre_asignatura}</td>
                                    <td className={style.filas2}>{data.creditos}</td>
                                    <td className={style.filas2}>{data.nota_valor_numeros}</td>
                                    <td className={style.filas2}>{data.nota_valor_letras}</td>
                                    <td className={style.filas2}>{data.ciclo_asignatura}</td>
                                    <td className={style.filas2}>{data.periodo_lectivo}</td>
                                    <td className={style.filas2}>{data.tipo_nota}</td>


                                    {/* Agrega más celdas según tus datos */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <br></br>
                
                <div className={style.divDerecha}>
                    <FechaActual />
                </div>
                 <br></br>
                 <br></br>
                <div className={style.divFirma}>

                </div>
                
            </div>
        </div>


    )
}

export default CertificadoDeEstudio;