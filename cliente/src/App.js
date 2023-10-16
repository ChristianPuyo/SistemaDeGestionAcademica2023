import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Students from './components/Students/Students';
import { Route, Routes,Redirect } from 'react-router-dom';
import CreatePlanDeEstudio from './components/CreatePlanDeEstudio/CreatePlanDeEstudio';
import NavBar from './components/NavBar/NavBar';
import CreateCurso from './components/CreateCurso/CreateCurso';
import CreatePeriodoLectivo from './components/CreatePeriodoLectivo/CreatePeriodoLectivo';
import RegistrarNota from './components/RegistrarNota/RegistrarNota';
import ListarEstudiantes from './components/ListarEstudiantes/ListarEstudiantes';
import CertificadoDeEstudio from './components/CertificadoDeEstudio/CertificadoDeEstudio';
import StudentForm from './components/StudentForm/StudentForm';
import EditStudentForm from './components/EditStudentForm/EditStudentForm';
import TablaGestionEstudiantes from './components/TablaGestionEstudiantes/TablaGestionEstudiantes';
import FormDeleteStudent from './components/FormDeleteStudent/FormDeleteStudent';
import FormLogin from './components/FormLogin/FormLogin';
import { useSelector } from 'react-redux';
import ConsultarNotas from './components/ConsultarNotas/ConsultarNotas';
import EstudianteNotas from './components/EstudianteNotas/EstudianteNotas';
import EditarNota from './components/EditarNota/EditarNota';
import CreateUser from './components/CreateUser/CreateUser';
import NavBarSecretaria from './components/NavBarSecretaria/NavBarSecretaria';
import FileUploader from './components/CargarArchivos/CargarArchivos';
import CargarCursos from './components/CargarCursos/CargarCursos';
import GestionCursos from './components/GestionCursos/GestionCursos';
import UpdateCursoForm from './components/UpdateCursoForm/UpdateCursoForm';
import CargaMasivaNotas from './components/CargaMasivaNotas/CargaMasivaNotas';
import FormMatricula from './components/FormMatricula/FormMatricula';
import TeacherForm from './components/TeacherForm/TeacherForm';
import HomeAdministrador from './components/HomeAdministrador/HomeAdministrador';
import HomeSecretaria from './components/HomeSecretaria/HomeSecretaria';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentePdf from './components/ComponentePdf';





function App() {

  const token = useSelector(state => state.token);
  return (
    
    <div className="App">
      
      <Routes>
       
        <Route exact path='/' element={<LandingPage/>}></Route>
        
        <Route exact path="/login" element= {token==null || !token.token ? <FormLogin /> : (token.role==='Administrador'?<HomeAdministrador />: <HomeSecretaria/> )}></Route> 
        
        <Route exact path='/home' element={token==null || !token.token ? <FormLogin /> : (token.role==='Administrador'?<HomeAdministrador />: <HomeSecretaria/> )}></Route>
        <Route exact path='/createstudent' element={token==null || !token.token ? <FormLogin /> :<StudentForm/> }></Route>
        <Route exact path='/createplandeestudio' element={token==null || !token.token ? <FormLogin /> :<CreatePlanDeEstudio/>}></Route>
        <Route exact path='/createcurso' element={token==null || !token.token ? <FormLogin /> :<CreateCurso/>}></Route>
        <Route exact path='/createperiodolectivo' element={token==null || !token.token ? <FormLogin /> :<CreatePeriodoLectivo/>}></Route>
        <Route exact path='/registrarnota' element={token==null || !token.token ? <FormLogin /> :<RegistrarNota/>}></Route>
        <Route exact path='/generarcertificado' element={token==null || !token.token ? <FormLogin /> :<ListarEstudiantes/>}></Route>
        <Route exact path='/generarcertificado/:id' element={token==null || !token.token ? <FormLogin /> :<CertificadoDeEstudio/>}></Route>
        <Route exact path="/editstudent" element={token==null || !token.token ? <FormLogin /> :<EditStudentForm/>}></Route>
        <Route exact path='/gestionarestudiantes' element={token==null || !token.token ? <FormLogin /> :<TablaGestionEstudiantes/>}></Route>
        <Route exact path='/actualizarestudiante/:id' element={token==null || !token.token ? <FormLogin /> :<EditStudentForm/>}></Route>
        <Route exact path='/eliminarestudiante/:id' element={token==null || !token.token ? <FormLogin /> :<FormDeleteStudent/>}></Route>
        <Route exact path='/consultarnotas' element={token==null || !token.token ? <FormLogin />:<ConsultarNotas/>}></Route>
        <Route exact path='/estudiantenotas/:id' element={token==null || !token.token ? <FormLogin />:<EstudianteNotas/>}></Route>
        <Route exact path='/editarnota/:id' element={token==null || !token.token ? <FormLogin />:<EditarNota/>}></Route>
        <Route exact path='/createuser' element={token==null || !token.token ? <FormLogin />:<CreateUser/>}></Route>
        <Route exact path='/cargararchivo' element={token==null || !token.token ? <FormLogin />:<FileUploader/>}></Route>
        <Route exact path='/cargarcursos' element={token==null || !token.token ? <FormLogin />:<CargarCursos/>}></Route>
        <Route exact path='/gestioncursos' element={token==null || !token.token ? <FormLogin />:<GestionCursos/>}></Route>
        <Route exact path='/updatecurso/:id' element={token==null || !token.token ? <FormLogin />:<UpdateCursoForm/>}></Route>
        <Route exact path='/cargamasivanotas' element={token==null || !token.token ? <FormLogin />:<CargaMasivaNotas/>}></Route>
        <Route exact path='/matricula' element={token==null || !token.token ? <FormLogin />:<FormMatricula/>}></Route>
        <Route exact path='/createteacher' element={token==null || !token.token ? <FormLogin />:<TeacherForm/>}></Route>
        <Route exact path='/prueba' element={<ComponentePdf/>} />
        
      </Routes>

      
      
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
    
  );
}

export default App;
