import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logoSuiza from './logoSuiza.png';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/actions';
import { FaBeer} from 'react-icons/fa';
import { BiLogOut} from "react-icons/bi"
import { AiTwotoneSetting } from "react-icons/ai"
import { FaChalkboardTeacher} from 'react-icons/fa';
import { PiStudentFill} from 'react-icons/pi';
import { ImHome} from 'react-icons/im';
import { GiBookmarklet} from 'react-icons/gi';
import { BsCalendar3} from 'react-icons/bs';
import { SlDocs} from 'react-icons/sl';
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";








const NavBar = () => {
  const dispatch = useDispatch();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (menuItem) => {
    if (openSubMenu === menuItem.id) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menuItem.id);
    }
  };

  function buttonSingout(){
    dispatch(signout()) 
  }

  return (
    <div className={styles.navBar}>

      

      <div >
        <div className={styles.logo}>
          <Link to="/"><img src={logoSuiza} alt="Logo" /></Link>
        </div>
        <div>
          <h2>IESTP SUIZA</h2>
        </div>
        <div
          className={styles.menuItemTitle}

        >
          <ImHome className={styles.icono} />
          <Link to="/home" className={styles.opcionInicio}>Inicio</Link>

        </div>

        <hr className={styles.hr}></hr> 

        <div>
        <ul className={styles.menu}>
          {/* Menú principal manual */}
          

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 1, title: 'Gestionar estudiantes', subItems: ['Registrar estudiante', 'Gestionar estudiantes', 'Generar certificado', 'Registrar masivamente'] })}
            >
              <PiStudentFill className={styles.icono} />
              Gestionar estudiantes
            </div>
            {openSubMenu === 1 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/createstudent" className={styles.link1}><li className={styles.subMenuItem}>Registrar estudiante</li></Link>
                <Link to="/gestionarestudiantes"><li className={styles.subMenuItem}>Gestionar estudiantes</li></Link>
                <Link to="/generarcertificado"><li className={styles.subMenuItem}>Generar certificado</li></Link>
                <Link to="/cargararchivo"><li className={styles.subMenuItem}>Registrar masivamente</li></Link>
              </ul>
            )} 
          </li>


          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 2, title: 'Gestionar cursos', subItems: ['Registrar curso', 'Administrar cursos', 'Registrar masivamente'] })}
            >
              <GiBookmarklet className={styles.icono} />
              Gestionar cursos
            </div>
            {openSubMenu === 2 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/createcurso"><li className={styles.subMenuItem}>Registrar curso</li></Link>
                <Link to="/gestioncursos"><li className={styles.subMenuItem}>Administrar cursos</li></Link>
                <Link to="/cargarcursos"><li className={styles.subMenuItem}>Registrar masivamente</li></Link>
              </ul>
            )}
          </li>

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 3, title: 'Gestionar planes', subItems: ['Registrar plan'] })}
            >
              <SlDocs className={styles.icono} />
              Gestionar planes
            </div>
            {openSubMenu === 3 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/createplandeestudio"><li className={styles.subMenuItem}>Registrar plan</li></Link>

              </ul>
            )}
          </li>

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 4, title: 'Gestionar periodos', subItems: ['Registrar periodo'] })}
            >
              <BsCalendar3 className={styles.icono} />
              Gestionar periodos
            </div>
            {openSubMenu === 4 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/createperiodolectivo"><li className={styles.subMenuItem}>Registrar periodo</li></Link>

              </ul>
            )}
          </li>

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 5, title: 'Gestionar notas', subItems: ['Registrar nota', 'Administrar notas', 'Registrar masivamente'] })}
            >
              <VscOpenPreview className={styles.icono} />
              Gestionar notas
            </div>
            {openSubMenu === 5 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/registrarnota"><li className={styles.subMenuItem}>Registrar nota</li></Link>
                <Link to="/consultarnotas"><li className={styles.subMenuItem}>Administrar notas</li></Link>
                <Link to="/cargamasivanotas"><li className={styles.subMenuItem}>Registrar masivamente</li></Link>
              </ul>
            )}
          </li>

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 6, title: 'Gestionar matrícula', subItems: ['Registrar matrícula'] })}
            >
              <BsFillClipboardCheckFill className={styles.icono} />
              Gestionar matrícula
            </div>
            {openSubMenu === 6 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/matricula"><li className={styles.subMenuItem}>Registrar matricula</li></Link>

              </ul>
            )}
          </li>

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 7, title: 'Gestionar profesor', subItems: ['Registrar profesor'] })}
            >
              <FaChalkboardTeacher className={styles.icono} />
              Gestionar Profesor
            </div>
            {openSubMenu === 7 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/createteacher"><li className={styles.subMenuItem}>Registrar profesor</li></Link>

              </ul>
            )}
          </li>

          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}
              onClick={() => handleSubMenuClick({ id: 8, title: 'Otras opciones', subItems: ['Crear usuario'] })}
            >
              <AiTwotoneSetting className={styles.icono} />
              Otras opciones
            </div>
            {openSubMenu === 8 && (
              <ul className={styles.subMenu}>
                {/* Submenús aquí */}
                <Link to="/createuser"><li className={styles.subMenuItem}>Crear usuario</li></Link>

              </ul>
            )}
          </li>

          

          {/* Otro menú principal manual */}


        </ul>
        </div>
        <hr className={styles.hr}></hr> 
        {/* <h2>OTRA SECCIÓN</h2> */}

        {/* <div>
          otras opciones
        </div> */}
        
      </div>

    </div>
  );
};

export default NavBar;
