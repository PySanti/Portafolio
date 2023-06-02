import React from "react"
import "./CopyBtnStyles.css"
export function CopyBtn(){
    return (
        <div className="copy-btn">
            <span className="material-symbols-outlined copy-btn__img">
                content_copy
            </span>
            <span className="success-msg">copied!</span>
        </div>
    )
}