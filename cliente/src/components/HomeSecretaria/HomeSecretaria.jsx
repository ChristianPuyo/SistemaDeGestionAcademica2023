import React from "react";
import NavBarSuperior from "../NavBarSuperior/NavBarSuperior";
import NavBarSecretaria from "../NavBarSecretaria/NavBarSecretaria";
import Suiza from "./Suiza.webp"
import style from "./HomeSecretaria.module.css"
import StudentChart from "../StudentChart/StudentChar";
import DocenteChart from "../DocenteChart/DocenteChart";

const HomeSecretaria = ()=>{
    return(
        <div className={style.grid}>
            
           

            
            <div>
            
            <NavBarSecretaria />
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

export default HomeSecretaria;