import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCursoById, getPeriodo, getPlan, getStudenById, getStudents } from '../../redux/actions';
import style from "./FormMatricula.module.css"
import SearchBar from "../SearchBar/SearchBar"
import NavBar from "../NavBar/NavBar";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";

const FormMatricula = () => {
    const dispatch = useDispatch()
    const estudiantes = useSelector(state=>state.students)
    const cursos = useSelector(state=>state.cursoFiltradoPorPlan)
    const semestres = useSelector(state=>state.periodo)
    const estudianteActual = useSelector(state=>state.studentById)

    

  // Estado para los campos del formulario
  const [formularioData, setFormularioData] = useState({
    selectedEstudiante: '',
    selectedCurso: '',
    selectedSemestre: '',
    cursosSeleccionados: [],
  });



  // Desestructura el estado
  const {
    selectedEstudiante,
    selectedCurso,
    selectedSemestre,
    cursosSeleccionados,
  } = formularioData;
  
  useEffect(()=>{
   
   
    dispatch(getPeriodo())
    if(selectedEstudiante){
      
      dispatch(getStudenById(selectedEstudiante))
    }
   
    
    
},[dispatch, selectedEstudiante])

useEffect(()=>{
  if (estudianteActual?.id_plan) {
      console.log("Este es el estudiante actual:",estudianteActual)
      dispatch(getCursoById(estudianteActual.id_plan))
  } 
  
    
},[dispatch, estudianteActual])

  console.log("Id del estudiante: ", selectedEstudiante)
  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormularioData({
      ...formularioData,
      [name]: value,
    });
  };

 

  // Manejar la adición de cursos a la lista de cursos seleccionados
  const agregarCurso = () => {
    if (selectedCurso) {
      const cursoSeleccionado = {
        cursoId: selectedCurso,
        
      };
      setFormularioData({
        ...formularioData,
        cursosSeleccionados: [...cursosSeleccionados, cursoSeleccionado],
        selectedCurso: '',
        //selectedSemestre: '', //limpia el estado
      });
    }
  };

  // Manejar la eliminación de cursos de la lista de cursos seleccionados
  const eliminarCurso = (index) => {
    const nuevosCursosSeleccionados = [...cursosSeleccionados];
    nuevosCursosSeleccionados.splice(index, 1);
    setFormularioData({
      ...formularioData,
      cursosSeleccionados: nuevosCursosSeleccionados,
    });
  };

  // Manejar el envío del formulario al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crear un objeto de datos a enviar al backend
      const datosDeMatricula = {
        estudianteId: selectedEstudiante,
        cursos: cursosSeleccionados,
      };

      // Realizar una solicitud POST al endpoint del backend
      const response = await axios.post('/api/matricular', datosDeMatricula);

      // Manejar la respuesta del backend
      if (response.status === 200) {
        // Matrícula exitosa, puedes mostrar un mensaje de éxito al usuario
        alert('Matrícula exitosa');
        // Limpiar el formulario
        setFormularioData({
          selectedEstudiante: '',
          selectedCurso: '',
          selectedSemestre: '',
          cursosSeleccionados: [],
        });
      } else {
        // Manejar otros posibles escenarios de respuesta
        alert('Error al realizar la matrícula');
      }
    } catch (error) {
      // Manejar errores de solicitud
      console.error('Error al realizar la matrícula:', error);
      // Mostrar un mensaje de error al usuario si es necesario
      alert('Hubo un error al realizar la matrícula');
    }
  };

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
        <h1>Formulario de Matrícula (En Construcción)</h1>
      <SearchBar/> <br></br>

      <form onSubmit={handleSubmit}>
        <div>
          
          <select
            id="selectedEstudiante"
            name="selectedEstudiante"
            onChange={handleChange}
            value={selectedEstudiante}
            className={style.inputSelect}
            required
          >
            <option value="">Seleccionar estudiante</option>
            {estudiantes.map((estudiante, index) => (
              <option key={index} value={estudiante.id_estudiante}>
                {estudiante.apellidos} {estudiante.nombres} 
              </option>
            ))}
          </select>
        </div>

       


        <div>
          
          <select
            id="selectedSemestre"
            name="selectedSemestre"
            onChange={handleChange}
            value={selectedSemestre}
            className={style.inputSelect}
            required
          >
            <option value="">Seleccionar semestre</option>
            {semestres.map((semestre, index) => (
              <option key={index} value={semestre.id}>
                {semestre.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          
          <select
            id="selectedCurso"
            name="selectedCurso"
            onChange={handleChange}
            value={selectedCurso}
            className={style.inputSelect}
            required
          >
            <option value="">Seleccionar curso</option>
            {cursos.map((curso, index) => (
              <option key={index} value={curso.id}>
                {curso.nombre}
              </option>
            ))}
          </select>
        </div>
        
        <button className={style.submit} type="button" onClick={agregarCurso}>
          Agregar Curso
        </button>
        <br></br>
        <br></br>
        <div>
        <div className={style.tablacontainer}>
                <table className={style.tabla} >
                    <thead className={style.encabezado}>
                        <tr>
                           
                            <th className={style.tablaEncabezadoNombreCurso}>Nombre de la unidad didáctica</th>
                            <th className={style.tablaEncabezado}>Eliminar</th>
                                               
                        </tr>
                    </thead>
                    <tbody>
                        {cursosSeleccionados.map((curso, index) => (
                            <tr key={index}>
                                <td className={style.tablaBody}>{curso.cursoId}</td>
                                <td className={style.tablaBodyEliminar}><button className={style.buttonDelete} type="button" onClick={() => eliminarCurso(index)}>X</button></td>
                                

                                

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
        <button className={style.submit} type="submit">Matricular</button>
      </form>
        </div>
      </div>
      
      
    </div>
  );
};

export default FormMatricula;
