import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, cleanMessage } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import styles from "./FormLogin.module.css";
import { useEffect } from 'react';
import logoSuiza from './logoSuiza.png'
import { BiUserCircle} from 'react-icons/bi';
import { RiLockPasswordFill} from 'react-icons/ri';


const FormLogin = () => {

  const message = useSelector(state=> state.messageOperation)

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (message.length>0) {
      alert(message)
      dispatch(cleanMessage())
          
    }
  }, [message, dispatch]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    
  };

  return (
    <div className={styles.container}>
      <img   src={logoSuiza} alt="Logo del instituto" height="100px" width="100px"></img>
      <h2>Iniciar Sesión</h2>
      <br></br>
      <form onSubmit={handleLogin}>
      <BiUserCircle className={styles.icon}/>
        <input
          
          className={styles.input}
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <RiLockPasswordFill className={styles.icon}/>
        <input
          className={styles.input}
          type="password"
          name="password" 
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className={styles.submit} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default FormLogin;

