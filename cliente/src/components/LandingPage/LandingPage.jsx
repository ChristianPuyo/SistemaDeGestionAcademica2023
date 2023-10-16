import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import logoSuiza from "./logoSuiza.png"

const LandingPage = () => {
  return (
    <div className={style.container}>
      <img   src={logoSuiza} alt="Logo del instituto" height="150px" width="160px"></img>
      <br></br>
      <h1 className={style.title}>SISTEMA   DE GESTIÓN ACADÉMICA DEL I.E.S.T.P SUIZA</h1>
      <h2 className={style.subtitle}>Versión 1.0</h2>
      <div className={style.btnContainer}>
        <button className={style.btn}>
          <Link to="/login">Iniciar Sesión</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
