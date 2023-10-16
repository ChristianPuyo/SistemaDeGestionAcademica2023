import { GET_STUDENTS, POST_STUDENT, GET_DEPARTAMENTO, GET_PLAN, 
       POST_PERIODO, POST_CURSO, GET_STUDENT_BY_DNI, 
       GET_CURSO_BY_PLAN, GET_PERIODO, POST_NOTA, GET_CURSOS_Y_NOTAS_CERTIFICADO,
       GET_STUDENT_BY_ID, CLEAN_STUDENT_BY_DNI, GET_ESTUDIANTES_BY_APELLIDOS, 
       SET_CURRENT_STUDENT, UPDATE_STUDENT, CLEAN_CURRENT_STUDENT, DELETE_STUDENT, LOGIN,
        SIGNOUT, GET_ESTUDIANTE_NOTAS, GET_NOTA_BY_ID, UPDATE_NOTA_BY_ID, DELETE_NOTA, 
        CREATE_USER, CARGA_MASIVA, SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE, 
        CLEAR_MESSAGE, CLEAR_PLAN, CLEAR_DEPARTAMENTOS, CARGA_MASIVA_CURSOS, GET_CURSOS,
        GET_CURSO_BY_ID, UPDATE_CURSO, GET_CURSO_BY_NAME, CARGA_MASIVA_NOTAS
       } from "./action-types";

const initialState  = {
        students : [],
        currentStudent: null,
        departamentos: [],
        plan: [],
        studentByDni : {},
        studentById: {},
        cursoFiltradoPorPlan: [],
        periodo: [],
        cursosNotasCertificado: [],
        estudianteNotas : [],
        notaById:{},
        token: null,
        messageOperation: '',
        cursos:[],
        cursoById:{}
}

const reducer = (state=initialState, action) => {
    switch(action.type){

        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case GET_NOTA_BY_ID:
            return {
                ...state,
                notaById: action.payload
            }
        case LOGIN:
            return {
                ...state,
            token: action.payload
            }
            case SIGNOUT:
                return {
                    ...state,
                token: null
                }
    
        case SET_CURRENT_STUDENT:
            return {
                ...state,
                currentStudent: action.payload
            }
        case GET_ESTUDIANTES_BY_APELLIDOS:
            return {
                ...state,
                students: action.payload
            }
        case GET_PERIODO:
            return {
                ...state,
                periodo: action.payload
            }
        
        //Para los cursos
        case GET_CURSO_BY_PLAN:
            return {
                ...state,
                cursoFiltradoPorPlan: action.payload
            }
        case GET_CURSO_BY_ID:
             return{
                ...state,
                cursoById:  action.payload
             }
        case GET_CURSOS_Y_NOTAS_CERTIFICADO:
            return {
                ...state,
                cursosNotasCertificado: action.payload
            }
        case GET_CURSOS:
            return{
                ...state,
                cursos: action.payload
            }
        case UPDATE_CURSO:
            return{
                ...state,
            }
        case GET_CURSO_BY_NAME:
            return{
                ...state,
                cursos: action.payload
            }
        case GET_ESTUDIANTE_NOTAS:
            return {
                ...state,
                estudianteNotas: action.payload
            }

        case GET_STUDENT_BY_DNI:
            return {
                ...state,
                studentByDni: action.payload
            }
        
        //PARA LA LIMPIEZA DE ESTADOS

        case CLEAN_STUDENT_BY_DNI:
            return {
                ...state,
                studentByDni: {}
            }

        case CLEAN_CURRENT_STUDENT:
            return {
                ...state,
                currentStudent: null
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                messageOperation: ''
            }
        case CLEAR_PLAN:
            return {
                ...state,
                plan: []
            }
        case CLEAR_DEPARTAMENTOS:
            return {
                ...state,
                departamentos: [],
            }
        case GET_STUDENT_BY_ID:
            return {
                ...state,
                studentById: action.payload
            }

       
        
        
        case POST_STUDENT:
            return {
                ...state,
            }
        case CREATE_USER:
            return {
                ...state,
            }
        //Para la carga masiva
        case CARGA_MASIVA:
            return {
                ...state,
            }
        case CARGA_MASIVA_CURSOS:
            return{
                ...state,
            }
        case CARGA_MASIVA_NOTAS:
            return{
                ...state,
            }
        case DELETE_STUDENT:
            return {
                ...state,
            }
        case DELETE_NOTA:
            return {
                ...state,
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                
            }

            case UPDATE_NOTA_BY_ID:
                return {
                    ...state,
                   
                }
        case POST_NOTA:
            return {
                ...state,
            }
            
        case POST_CURSO:
            return {
                ...state,
            }

        case POST_PERIODO:
            return {
                ...state,
            }
        case GET_DEPARTAMENTO:
            return{
                ...state,
                departamentos: action.payload
            }
        case GET_PLAN:
            return {
                ...state,
                plan: action.payload
            }
        //CASOS PARA EL MENSAJE DE OPERACIÓN
        case SET_SUCCESS_MESSAGE:
            return {
                ...state,
                messageOperation: action.payload
            }
            case SET_ERROR_MESSAGE:
                return {
                    ...state,
                messageOperation: action.payload
                }

        default:
            return {...state}
    }
}

export default reducer;