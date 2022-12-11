import React from "react";
import "./TecnosStyles.css"

export function Tecnos(props){
    return (
        <section className="tecnos-container">
            <h2 className="tecnos-container__title">Tecnos that i <span className="tecnos-container__title__dom"> domain </span></h2>
            <ul className="tecnos-container__list">
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">Python    </span>
                    <span className="tecno-count">100    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">PyGame    </span>
                    <span className="tecno-count">80    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">C         </span>
                    <span className="tecno-count">90    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">Pascal    </span>
                    <span className="tecno-count">60    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">JavaScript</span>
                    <span className="tecno-count">90    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">CSS       </span>
                    <span className="tecno-count">75    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">HTML      </span>
                    <span className="tecno-count">75    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">React     </span>
                    <span className="tecno-count">70    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">Git       </span>
                    <span className="tecno-count">75    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
                <li className="tecnos-container__list__item"> 
                    <span className="tecno-name">Vim       </span>
                    <span className="tecno-count">80    </span>
                    <div className="tecno-bar">
                        <div className="tecno-bar-fill"></div>
                    </div>
                </li>
            </ul>
        </section>
    )
}