import { GET_STUDENTS, GET_DEPARTAMENTO, GET_PLAN, 
         GET_STUDENT_BY_DNI, GET_CURSO_BY_PLAN, 
         GET_PERIODO, POST_NOTA, GET_CURSOS_Y_NOTAS_CERTIFICADO,
         GET_STUDENT_BY_ID, CLEAN_STUDENT_BY_DNI, GET_ESTUDIANTES_BY_APELLIDOS, 
         SET_CURRENT_STUDENT, UPDATE_STUDENT, CLEAN_CURRENT_STUDENT,
         DELETE_STUDENT,LOGIN,SIGNOUT, GET_ESTUDIANTE_NOTAS, GET_NOTA_BY_ID,
         UPDATE_NOTA_BY_ID,
         DELETE_NOTA, SET_ERROR_MESSAGE,SET_SUCCESS_MESSAGE, ERROR_MESSAGE, SUCCESS_MESSAGE,
         CLEAR_MESSAGE, CLEAR_PLAN, CLEAR_DEPARTAMENTOS, GET_CURSOS, GET_CURSO_BY_ID,
         UPDATE_CURSO, GET_CURSO_BY_NAME, POST_CURSOS_MASIVAMENTE
        
        } from "./action-types";
import axios from "axios"
import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_URL;



export const getStudents = () => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/student`);
        return(dispatch({type: GET_STUDENTS, payload: response.data}))
    }

}

export const signout = () => {
    return async function(dispatch){
        
        return(dispatch({type: SIGNOUT}))
    }

}

export const getStudentsByApellidos = (apellidos) => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/student?apellidos=${apellidos}`);
        return(dispatch({type: GET_ESTUDIANTES_BY_APELLIDOS, payload: response.data}))
    }

}


export const getCursoById = (id_plan)=>{
    return async function(dispatch){
        try {
            let response = await axios.get(`${apiUrl}/curso?id_plan=${id_plan}`);
            return(dispatch({type: GET_CURSO_BY_PLAN , payload: response.data})) 
        } catch (error) {
            alert("Primero elija un estudiante para luego consultar sus cursos")
        }
        
    }
}

export const getCursosNotasCertificado = (id)=>{
    return async function(dispatch){
        try {
            let response = await axios.get(`${apiUrl}/certificado?id=${id}`);
            return(dispatch({type: GET_CURSOS_Y_NOTAS_CERTIFICADO , payload: response.data})) 
        } catch (error) {
            alert("A ocurrido un error inesperado, vuelva a intentar la operación")
        }
        
    }
}

export const getEstudianteNotas = (id)=>{
    return async function(dispatch){
        try {
            let response = await axios.get(`${apiUrl}/consultaestudiantenotas?id=${id}`);
            return(dispatch({type: GET_ESTUDIANTE_NOTAS , payload: response.data})) 
        } catch (error) {
            alert("A ocurrido un error inesperado, vuelva a intentar la operación")
        }
        
    }
}

export const postStudent = (payload)=>{
    
    return async function(dispatch){
            try {
                await axios.post(`${apiUrl}/student`, payload);
                toast.success('Estudiante registrado con éxito!!!')
                dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
                
            } catch (error) {
                toast.error('Ha ocurrido un error al intentar registrar al estudiante!!!')
                dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
            }
    }
}

export const postUser = (payload)=>{
    
    return async function(){
            try {
                const response3 = await axios.post(`${apiUrl}/user/signup`, payload);
                return response3; 
            } catch (error) {
                alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
            }
    }
}

//Acciones para carga masiva de estudiantes, cursos y notas
export const cargaMasiva = (payload)=>{
    
    return async function(dispatch){
            try {
                await axios.post(`${apiUrl}/student/cargamasiva`, payload);
                dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
            } catch (error) {
                dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
            }
    }
}

export const cargaMasivaCursos = (payload)=>{
    
    return async function(dispatch){
            try {
                await axios.post(`${apiUrl}/curso/cargamasiva`, payload);
                dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
            } catch (error) {
                dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
            }
    }
}

export const cargaMasivaNotas = (payload)=>{
    
    return async function(dispatch){
            try {
                await axios.post(`${apiUrl}/nota/cargamasiva`, payload);
                dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
            } catch (error) {
                dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
            }
    }
}


export const login = (payload)=>{
    
    return async function(dispatch){
            try {
                const response3 = await axios.post(`${apiUrl}/user/login` , payload);
                // toast.success('Inicio exitoso');
                return(dispatch({type: LOGIN , payload: response3.data})) ;
                
            } catch (error) {
                toast.error('Usuario o Contraseña incorrecto');
                //dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
                
            }
    }
}

export const updateStudent = (id, updateData)=>{
    
    return async function(dispatch){
            try {
                await axios.put(`${apiUrl}/student/${id}`, updateData);
                return(dispatch({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})) ; 
            } catch (error) {
                return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})) ; 
            }
    }
}


export const updateNotaById = (id, updateData)=>{
    
    return async function(dispatch){
            try {
                const response3 = await axios.put(`${apiUrl}/nota/${id}`, updateData);
                return response3;
            } catch (error) {
                alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
            }
    }
}

export const deleteStudent = (id)=>{
    
    return async function(dispatch){
            try {
                const response3 = await axios.delete(`${apiUrl}/student/${id}`);
                return(dispatch({type: DELETE_STUDENT , payload: response3.data})) ; 
            } catch (error) {
                alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
            }
    }
}

export const deleteNota = (id)=>{
    
    return async function(dispatch){
            try {
                const response3 = await axios.delete(`${apiUrl}/nota/${id}`);
                return(dispatch({type: DELETE_NOTA , payload: response3.data})) ; 
            } catch (error) {
                alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
            }
    }
}


export const postNota = (payload)=>{
    
    return async function(){ 
            try {
                const response4 = await axios.post(`${apiUrl}/nota`, payload);
                return response4; 
            } catch (error) {
                alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
            }
    }
}

export const postPlan = (payload)=>{
    return async function(){
        const response = await axios.post(`${apiUrl}/plan`, payload);
        return response;
    }
}

export const postPeriodo = (payload)=>{
    return async function(){
        try {
            const response = await axios.post(`${apiUrl}/periodo`, payload);
            return response;
        } catch (error) {
            alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
        }
        
    }
}

//Para los cursos
export const postCurso = (payload)=>{
    return async function(){
        const response2 = await axios.post(`${apiUrl}/curso`, payload);
        return response2;
    }
}

export const updateCurso = (id, updateData)=>{
    
    return async function(dispatch){
            try {
                await axios.put(`${apiUrl}/curso/${id}`, updateData);
                return(dispatch({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})) ; 
            } catch (error) {
                return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})) ; 
            }
    }
}

export const getCursoById2 = (id)=>{
    return async function(dispatch){
        try {
            const response2 = await axios.get(`${apiUrl}/curso/${id}`,);
            return(dispatch({type: GET_CURSO_BY_ID, payload: response2.data}))
        } catch (error) {
            return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE}))
        }
       
    }
}

export const getCursos = () => {
    return async function(dispatch){
        try {
            let response = await axios.get(`${apiUrl}/curso`);
            return(dispatch({type: GET_CURSOS, payload: response.data}))
        } catch (error) {
            return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE}))
        }
       
    }
}

export const getCursoByName = (nombre) => {
    return async function(dispatch){
        try {
            let response = await axios.get(`${apiUrl}/curso?nombre=${nombre}`);
            return (dispatch({ type: GET_CURSO_BY_NAME, payload: response.data }))
        } catch (error) {
            return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE}))
        }
        
    }

}


export const getPlan = () => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/plan`);
        return(dispatch({type: GET_PLAN, payload: response.data}))
    }

}

export const getPeriodo = () => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/periodo`);
        return(dispatch({type: GET_PERIODO, payload: response.data}))
    }

}


export const getStudenByDni = (dni) => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/student?dni=${dni}`);
        return(dispatch({type: GET_STUDENT_BY_DNI, payload: response.data}))
    }

}

//ACCIONES DE LIMPIEZA
export const cleanStudentByDni = () => ({
    type: CLEAN_STUDENT_BY_DNI,
  });


export const cleanCurrentStudent = () => ({
    type: CLEAN_CURRENT_STUDENT,
});

export const cleanMessage = () => ({
    type: CLEAR_MESSAGE,
});

export const clearPlan = () => ({
    type: CLEAR_PLAN,
});

export const clearDepartamentos = () => ({
    type: CLEAR_DEPARTAMENTOS,
});


export const getStudenById = (id) => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/student?id_estudiante=${id}`);
        return(dispatch({type: GET_STUDENT_BY_ID, payload: response.data}))
    }

}

export const getNotaById = (id) => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/nota?id_nota=${id}`);
        return(dispatch({type: GET_NOTA_BY_ID, payload: response.data}))
    }

}

export const setCurrentStudent = (id) => {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/student?id_estudiante=${id}`);
        return(dispatch({type: SET_CURRENT_STUDENT, payload: response.data}))
    }

}



export const getDepartamento = ()=> {
    return async function(dispatch){
        let response = await axios.get(`${apiUrl}/departamento`);
        return(dispatch({type: GET_DEPARTAMENTO, payload: response.data}))
    }

}


