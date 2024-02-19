import React from "react"
import "../styles/MapItemStyles.css"

export function MapItem({name, pageNumber}){
    return (
        <div className="map-item">      
            {name}
        </div>
    )
}