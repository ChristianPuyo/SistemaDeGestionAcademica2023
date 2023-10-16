import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import style from "./CargarCursos.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { cargaMasiva, cargaMasivaCursos, cleanMessage } from '../../redux/actions';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior"

function CargarCursos() {
  const dispatch= useDispatch();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const message = useSelector(state=>state.messageOperation)


  useEffect(()=>{
    if(message.length>0){
      alert(message);
      dispatch(cleanMessage())
    }
  },[message,dispatch])
  const onDrop = (acceptedFiles) => {
    const parsedDataArray = [];
  
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        complete: (result) => {
          const parsedData = result.data.slice(0, -1); // Elimina la última fila vacía
          setUploadedFiles(acceptedFiles);
          setParsedData(parsedData);
        },
        header: true,
        delimiter: ';' // Agrega esta línea para especificar el delimitador
      });
    });
  };
  
  const handleClick=(e)=>{
    dispatch(cargaMasivaCursos(parsedData))
  }
  
  
  console.log(parsedData, "datos parseados")
  console.log(parsedData[0])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv',
  });

  return (
    <div className={style.grid}>
      <div>
        <NavBar/>
      </div>
      <div>
        <div>
         <NavBarSuperior/>
        </div>

        <div className={style.container}>
        <div className={style.dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className={style.p}>Arrastra y suelta aquí...</p>
        ) : (
          <p>Arrastra y suelta un archivo CSV aquí, o haz clic para seleccionarlo.</p>
        )}
      </div>
      <ul className={style.ul}>
        {uploadedFiles.map((file, index) => (
          <li className={style.li} key={index}>{file.name}</li>
        ))}
      </ul>

      <button className={style.submit} onClick={handleClick}>Registrar Masivamente</button>
      <br></br>
      <br></br>


      <div className={style.tablacontainer}>
           {/* Mostrar los datos en una tabla */}
      <table className={style.tabla}>
        <thead>
          <tr>
            <th className={style.tabla}>Nombre</th>
            <th className={style.tabla}>Creditos</th>
            <th className={style.tabla}>Ciclo</th>
            <th className={style.tabla}>Id Plan de estudio</th>
            
           
            {/* Agrega más encabezados según tus datos */}
          </tr>
        </thead>
        <tbody>
          {parsedData.map((item, index) => (
            <tr key={index}>
              <td className={style.encabezado}>{item.nombre}</td>
              <td className={style.encabezado}>{item.creditos}</td>
              <td className={style.encabezado}>{item.ciclo}</td>
              <td className={style.encabezado}>{item.id_plan}</td>
               
             
              {/* Agrega más celdas según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </div>
      </div>
     
     
      
     
    </div>
  );
}

export default CargarCursos;


