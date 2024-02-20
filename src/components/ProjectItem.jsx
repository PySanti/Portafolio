import React from "react";
import "../styles/ProjectItemStyles.css"

export function ProjectItem({name, videoFileName, repoLink}){
    return (
        <div className="project-item">
            <h3 className="project-item__name">{name}</h3>
            <video alt="loading ..."className="project-item__video" muted loop  src={videoFileName}  />
        </div>
    )
}
