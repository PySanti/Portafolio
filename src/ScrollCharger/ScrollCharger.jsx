import React from "react"
import "./ScrollChargerStyles.css"
export function ScrollCharger(props){
    return (
        <div className="scroll-charger">
            <div className="scroll-charger__charge"></div>
            <div className="scroll-charger__content">0%</div>
        </div>
    )
}