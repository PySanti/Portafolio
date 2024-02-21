import React from "react";
import {useState} from "react"
import "../styles/ProjectItemStyles.css"

export function ProjectItem({name, videoFileName, repoLink, wil}){
    let [projectActivated, setProjectActivated] = useState(false)
    return (
        <>
            <div className="project-item" onClick={()=>setProjectActivated(true)}>
                <h3 className="project-item__name">{name}</h3>
            </div>
            <div className={projectActivated? "modal-container displayed" : "modal-container"}>
                <div className="project-display">
                    <header className="project-display-header">
                        <h2 className="project-title">{name}</h2>
                        <div className="close-button" onClick={()=>setProjectActivated(false)}>X</div>
                    </header>
                    <div className="content-container">
                        <p className="wil-container">{wil}. Visit the repo <a href={repoLink} target="__blank">here</a>!</p>
                        <div className="video-container">
                            <video alt="loading ..."className="project-item__video" controls src={videoFileName}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
