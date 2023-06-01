import React from "react";
import "./TecnosStyles.css"

export function Tecnos(props){
    let TECNOS_LIST = [
        'Python',
        'Django',
        'Django Rest Framework',
        'MySQL',
        'PostgreSQL',
        'JavaScript',
        'CSS',
        'HTML',
        'React',
        'PyGame', 
        'C',
        'Git'
    ]
    return (
        <section className="tecnos-container">
            <h2 className="tecnos-container__title title"> My<span className="tecnos-container__title__dom title__selected-text"> Skills</span></h2>
            <ul className="tecnos-container__list">
                {
                    TECNOS_LIST.map((tecno) =>{
                        return (
                            <li className="tecnos-container__list__item">
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