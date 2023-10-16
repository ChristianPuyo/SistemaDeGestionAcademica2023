import React, { useState } from 'react';
import styles from './NavBarSecretaria.module.css';
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
        <br></br>
        <br></br>
        <ul className={styles.menu}>
          {/* Menú principal manual */}
          <li className={styles.menuItem}>
            <div
              className={styles.menuItemTitle}

            >
              <ImHome className={styles.icono} />
              <Link to="/home" className={styles.opcionInicio}>Inicio</Link>
              
            </div>

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

       

         

          


          {/* Otro menú principal manual */}


        </ul>
      </div>

    </div>
  );
};

export default NavBar;