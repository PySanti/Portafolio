import React from "react";
import {useEffect} from "react"
import "../styles/TitleStyles.css"
import {activateTitle} from "../utils/activateTitle"
import "zustand"
import "uuid"

export function Title(){
    const titleClassName                             = "header-container__text"
    useEffect(()=>{
        activateTitle(titleClassName)
    }, [])
    return (
    <header className="header-container">
        
        <h1 className="header-container__text title">
            Santiago De Andrade 
        </h1>
    </header>
    )
}