import React from "react";

import "./ProjectItemStyles.css"

export function ProjectItem({name, videoFileName, repoLink, id}){
    return (
        <a target="__blank" href={repoLink} className="project-item" id={id}>
            <h3 className="project-item__name">{name}</h3>
            <video alt="loading ..."className="project-item__video" muted loop  src={videoFileName}  />
        </a>
    )
}
