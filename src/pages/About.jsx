import React from "react";
import {useEffect, useRef} from "react"
import "../styles/AboutStyles.css"
import { activateTitle } from "../utils/activateTitle";
import {updateRenderingState} from "../utils/updateRenderingState"
import {pageRendered} from "../utils/pageRendered"






export function About(props){
    const aboutContainerTITLEClassName               = "about-container__title"
    let aboutContainerRef = useRef()

    const observingHandling = ([entry])=>{
        if (entry.isIntersecting && !pageRendered("about")) {
            updateRenderingState("about")
            activateTitle(aboutContainerTITLEClassName)
            setTimeout(()=>{
                aboutContainerRef.current.classList.add("activated-about-container")
            }
            ,500)
        }
    }
    useEffect(()=>{
        if (aboutContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(aboutContainerRef.current);
        }
    }, [])

    const age = Math.floor((new Date() - new Date('10-16-2005')) / (1000 * 60 * 60 * 24 * 365.25))
    return (
    <section className="about-container">
        <h2 className="about-container__title title">About<span className="about-container__title__comp title__selected-text">Me</span></h2>
        <p className="about-container__paraph" ref={aboutContainerRef}>
            I am {age} years old and although I am studying computer science at the 
            <a  href="https://elucabista.com/2022/06/09/qs-world-university-ranking-2023-la-ucab-sigue-siendo-la-mejor-universidad-privada-venezuela/" target="__blank"  className="about-container__paraph__u selected-text">Universidad Catolica Andres Bello</a>,
            I have more than three years of programming experience, gaining knowledge independently.  
            I have very deep knowledge in very specific technologies. My favorite work area is game development, however, the one I have the most experience in is web development.
            I have an intermediate knowledge of English and I am able to communicate perfectly. 
        </p>
    </section>
)
}