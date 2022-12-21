import React from "react";

import "./ProjectItemStyles.css"

export function ProjectItem({name, videoFileName, repoLink, id}){
    return (
        <a target="__blank" href={repoLink} className="project-item" id={id}>
            <h3 className="project-item__name">{name}</h3>
            <video className="project-item__video" muted loop  paused src={videoFileName} />
        </a>
    )
}
