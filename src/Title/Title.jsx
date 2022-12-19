import React from "react";
import "./TitleStyles.css"


export function Title(){
    return (
    <header className="header-container">
        <h1 className="header-container__text">
            Hi, my name is  
            <strong className="header-container__text__intro-text page-title-selected-text">Santiago De Andrade </strong> 
            and this is my portafolio
        </h1>
    </header>
    )
}