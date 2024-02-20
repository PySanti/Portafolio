import React from "react"
import {v4} from "uuid"
export function TecnoItem({tecnoName}){
    return (
        <li key={v4()} className="tecnos-container__list__item">
            <span className="tecno_check">✓</span>
            <span className="tecno_name">{tecnoName}</span>
        </li>
    )
}