import React from "react";
import {useRef} from "react"
import {useEffect} from "react"
import "../styles/TecnosStyles.css"
import { activateTitle } from "../utils/activateTitle"







export function Tecnos(props){

    const tecnosTitleClassName                       = "tecnos-container__title"
    const tecnosListClassName                        = "tecnos-container__list"
    const activatedTecnosClassName                   = "tecno_activated"

    let tecnosContainerRef = useRef()
    const activateTecnosSkills = (tecnos,current_tecno)=>{
        setTimeout(()=>{
            tecnos[current_tecno].classList.add(activatedTecnosClassName)
            setTimeout(()=>{
                tecnos[current_tecno].children[0].classList.add('tecno_check__activated')
            }, current_tecno*100)
        }, current_tecno*200)
        if (current_tecno+1 < tecnos.length){
            activateTecnosSkills(tecnos, current_tecno+1)
        }
    }
    const observingHandling = ([entry])=>{
        if (entry.isIntersecting) {
            // crear state global con object para saber que pages ya han sido activadas
            let tecnos = document.getElementsByClassName(tecnosListClassName)[0].children
            activateTecnosSkills(tecnos, 0)
            activateTitle(tecnosTitleClassName)
        }
    }
    let TECNOS_LIST = [
        'Python',
        'Django',
        'Django Rest Framework',
        'Database Design',
        'MySQL',
        'PostgreSQL',
        'JavaScript',
        'CSS',
        'Responsive Web Desing',
        'HTML',
        'React',
        'PyGame', 
        'C',
        'Git',
    ]
    useEffect(()=>{
        if (tecnosContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(tecnosContainerRef.current);
        }
    }, [])
    return (
        <section ref={tecnosContainerRef}className="tecnos-container">
            <h2 className="tecnos-container__title title"> My<span className="tecnos-container__title__dom title__selected-text"> Skills</span></h2>
            <ul className="tecnos-container__list">
                {
                    TECNOS_LIST.map((tecno) =>{
                        return (
                            <li key={tecno} className="tecnos-container__list__item">
                                <span className="tecno_check">✓</span>
                                <span className="tecno_name">{tecno}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}