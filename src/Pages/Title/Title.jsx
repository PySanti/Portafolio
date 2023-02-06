import React from "react";
import "./TitleStyles.css"


export function Title(){
    return (
    <header className="header-container">
        <h1 className="header-container__text title">
            I am  
            <span className="header-container__text__intro-text title__selected-text"> Santiago De Andrade </span> 
            and this is my portfolio
        </h1>
    </header>
    )
}