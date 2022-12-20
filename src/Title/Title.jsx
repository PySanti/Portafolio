import React from "react";
import "./TitleStyles.css"


export function Title(){
    return (
    <header className="header-container">
        <h1 className="header-container__text title">
            Hi, my name is  
            <span className="header-container__text__intro-text title__selected-text"> Santiago De Andrade </span> 
            and this is my portafolio
        </h1>
    </header>
    )
}