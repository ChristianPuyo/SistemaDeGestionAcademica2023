import React from "react";
import { useSelector } from 'react-redux';
import styles from "./NavBarSuperior.module.css"
import { HiOutlineUser } from "react-icons/hi2";
import { BiLogOut} from "react-icons/bi"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signout } from "../../redux/actions";


const NavBarSuperior = ()=>{
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    function buttonSingout(){
        dispatch(signout()) 
      }
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                <div>
                    <ul className={styles.menu}>
                        <li><HiOutlineUser style={{ fontSize: '25px' }}/>Bienvenido(a) {token?.userName}</li>
                        

                    </ul>
                </div>

                <div>
                    <ul className={styles.menu}>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <div
                                className={styles.menuItemTitleSalir}

                            >
                                <BiLogOut className={styles.icono} />
                                <Link to="/" style={{ textDecoration: 'none' }} onClick={(e) => buttonSingout(e)}>Cerrar Sesión</Link>
                            </div>
 
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBarSuperior;