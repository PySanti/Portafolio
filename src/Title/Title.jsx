import React from "react";
import "./TitleStyles.css"


export function Title(){
    return (
    <header className="header-container">
        <h1 className="header-container__text">
            Hi, my name is  
            <b className="header-container__text__intro-text"> Santiago De Andrade </b>
            and this is my portafolio
        </h1>
    </header>
    )
}