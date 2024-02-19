import React from "react";
import {useEffect} from "react"
import "../styles/TitleStyles.css"
import {activateTitle} from "../utils/activateTitle"

export function Title(){

    const titleClassName                             = "header-container__text"
    const diActivateKeys = ()=>{
        const HTML_ELEMENT = document.getElementsByTagName("html")[0]
        HTML_ELEMENT.addEventListener("keydown", (e)=>{
            e.preventDefault()
        })
        HTML_ELEMENT.addEventListener("wheel", (e)=>{
            e.preventDefault()
        })
    }

    useEffect(()=>{
        diActivateKeys()
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