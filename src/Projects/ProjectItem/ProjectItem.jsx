import React from "react";
import "./ProjectItem.css"

export function ProjectItem({name, context, videoFileName, repoLink}){
    let downloadLink = repoLink.split(".git")[0]
    return (
        <div className="project-item">
            <h3 className="project-item__name">{name}</h3>
            <p className="project-item__context">
                {context} 
                <a className="project-item__context__repoLink" href={repoLink} target="__blank"> repo-link</a>
                <a className="project-item__context__download" download="Prueba" href={`${downloadLink}/archive/refs/heads/master.zip`} > download</a>
            </p>
            <video src={videoFileName}/>
        </div>
    )
}
