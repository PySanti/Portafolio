import React from "react";
import "./TecnosStyles.css"

export function Tecnos(props){
    return (
        <section className="tecnos-container">
            <h2 className="tecnos-container__title">Tecnos that i domain</h2>
            <ul className="tecnos-container__list">
                <li className="tecnos-container__list__item"> Python</li>
                <li className="tecnos-container__list__item"> PyGame</li>
                <li className="tecnos-container__list__item"> C</li>
                <li className="tecnos-container__list__item"> Pascal</li>
                <li className="tecnos-container__list__item"> JavaScript</li>
                <li className="tecnos-container__list__item"> CSS</li>
                <li className="tecnos-container__list__item"> HTML</li>
                <li className="tecnos-container__list__item"> React</li>
                <li className="tecnos-container__list__item"> Git</li>
                <li className="tecnos-container__list__item"> Vim</li>
            </ul>
        </section>
    )
}