import React from "react";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";
import NavBar from "../NavBar/NavBar";
import Suiza from "./Suiza.webp"
import style from "./HomeAdministrador.module.css"
import StudentChart from "../StudentChart/StudentChar";
import DocenteChart from "../DocenteChart/DocenteChart";

const HomeAdministrador = ()=>{
    return(
        <div className={style.grid}>
            
           

            
            <div>
            
            <NavBar />
            </div> 

            
            <div >
                <div>
                <NavBarSuperior/>
                
                    
                </div>

                <div className={style.containerGrafico}>
                    <div>
                    <StudentChart/>
                    </div>
                    <div>
                    <DocenteChart/>
                    </div>
                
                
                </div>
                
                
            </div>
            
            
        </div>
    )
}

export default HomeAdministrador;