import React from "react"
import "./MapStyles.css"
export function Map(){
    return (
        <div className="map-container">
            <div className="map-item">      
                <span className="map-item__content">Init</span>
            </div>
            <div className="map-item">      
                <span className="map-item__content">About</span>
            </div>
            <div className="map-item">     
                <span className="map-item__content">Tecnos</span>
            </div>
            <div className="map-item">   
                <span className="map-item__content">Projects</span>
            </div>
            <div className="map-item">    
                <span className="map-item__content">Contact</span>
            </div>
        </div>
    )
}