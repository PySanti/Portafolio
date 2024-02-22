import React from "react";
import {useState} from "react"
import "../styles/ProjectItemStyles.css"
import {Cloudinary} from "@cloudinary/url-gen"
import {AdvancedVideo} from "@cloudinary/react"

const cloud = new Cloudinary({
    cloud : {
        cloudName : 'dwcabo8hs'
    }
})

export function ProjectItem({name, videoId, repoLink, wil}){
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
                        <span class="material-symbols-outlined close-button"onClick={()=>setProjectActivated(false)}>
                            close
                        </span>
                    </header>
                    <div className="content-container">
                        <p className="wil-container">{wil} Visit the repo <a href={repoLink} target="__blank">here</a>!</p>
                        <div className="video-container">
                            <AdvancedVideo
                                className="project-item__video"
                                cldVid={cloud.video(`portafolio/${videoId}`).quality('auto')}
                                controls
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
