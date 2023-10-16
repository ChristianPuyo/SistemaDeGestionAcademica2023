import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import style from "./CargaMasivaNotas.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { cargaMasivaNotas, cleanMessage } from '../../redux/actions';
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior"
import { useNavigate } from 'react-router-dom';
import NavBarSecretaria from "../NavBarSecretaria/NavBarSecretaria";

function CargaMasivaNotas() {
  const token = useSelector(state => state.token);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const message = useSelector(state=>state.messageOperation)


  useEffect(()=>{
    if(message.length>0){
      alert(message);
      dispatch(cleanMessage());
      navigate("/home")
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
        delimiter: ';', // Agrega esta línea para especificar el delimitador
        
      });
    });
  };
  
  const handleClick=(e)=>{
    dispatch(cargaMasivaNotas(parsedData))
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
      {token?.role === 'Secretaria'?  <NavBarSecretaria/>: <NavBar/>}
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
            <th className={style.tabla}>Nota en números</th>
            <th className={style.tabla}>Nota en letras</th>
            <th className={style.tabla}>Tipo de nota</th>
            <th className={style.tabla}>Fecha de registro</th>
            <th className={style.tabla}>Id del estudiante</th>
            <th className={style.tabla}>Id del curso</th>
            <th className={style.tabla}>Id del periodo lectivo</th>
            
           
            {/* Agrega más encabezados según tus datos */}
          </tr>
        </thead>
        <tbody>
          {parsedData.map((item, index) => (
            <tr key={index}>
              <td className={style.encabezado}>{item.valor_numeros}</td>
              <td className={style.encabezado}>{item.valor_letras}</td>
              <td className={style.encabezado}>{item.tipo_nota}</td>
              <td className={style.encabezado}>{item.fecha}</td>
              <td className={style.encabezado}>{item.id_estudiante}</td>
              <td className={style.encabezado}>{item.id_asignatura}</td>
              <td className={style.encabezado}>{item.id_periodo}</td>
               
             
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

export default CargaMasivaNotas;

