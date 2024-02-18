import React from "react";
import {useEffect, useRef} from "react"
import "../styles/ContactStyles.css"
import { CopyBtn } from "../Components/CopyBtn";
import {EMAIL} from "../utils/constants"
import { 
    contactContentPARAPH_P1ClassName, 
    contactContentPARAPH_P2ClassName, 
    contactContentTITLEClassName} 
    from "../index";
import { activateTitle } from "../utils/activateTitle";


export function Contact(){
    const contactContentClassName                    = "contact-content"
    const contactContentTITLEClassName               = "contact-content__title"
    const contactContentTITLE_MEClassName            = "contact-content__title__me"
    const contactContentPARAPHClassName              = "contact-content__paraph"
    const contactContentPARAPH_P1ClassName           = "contact-content__paraph__p1"
    const contactContentPARAPH_P2ClassName           = "contact-content__paraph__p2"


    const [email__first, email__second] = EMAIL.split("@")
    let contactContainerRef = useRef()
    const observingHandling = ([entry])=>{
        if (entry.isIntersecting) {
            // crear state global con object para saber que pages ya han sido activadas
            const paraphP1 = document.getElementsByClassName(contactContentPARAPH_P1ClassName)[0] 
            const paraphP2 = document.getElementsByClassName(contactContentPARAPH_P2ClassName)[0]
            const paraphList = [paraphP1, paraphP2]
            setTimeout(() =>{
                paraphList.forEach((element) =>{
                    element.style.top = "0vw"
                    element.style.opacity = "1"
                })
            }, 500)
            activateTitle(contactContentTITLEClassName)
        }
    }
    useEffect(()=>{
        if (contactContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(contactContainerRef.current);
        }
    }, [])
    return (
        <footer ref={contactContainerRef}className="contact-content">
            <h2 className="contact-content__title title"> Contact  <span className="contact-content__title__me title__selected-text ">Me</span> </h2>
            <p className="contact-content__paraph">
                <span className="contact-content__paraph__p1 paraph-part">{email__first}</span>
                @
                <span className="contact-content__paraph__p2 paraph-part">{email__second}</span>
            </p>
            <CopyBtn/>
        </footer>
    )
}