import {v4} from "uuid"
import {useEffect ,useRef} from 'react'
import React from "react";
import "../styles/ProjectStyles.css"
import {ProjectItem} from "../components/ProjectItem"
import { activateTitle } from "../utils/activateTitle";
import {updateRenderingState} from "../utils/updateRenderingState"
import {pageRendered} from "../utils/pageRendered"
import {PROJECTS_LIST} from "../utils/constants"



export function Projects(props){
    const projectsTitleClassName                     = "projects-container__title"
    const projectItemClassName                       = "project-item"
    const projectItem_ACTIVATEDClassName             = "project-item__ACTIVATED"
    let projectsContainerRef                         = useRef()

    const activateProjectItems = (projectItems)=>{
        for (let i = 0; i < projectItems.length; i++){
            setTimeout(() =>{
                projectItems[i].classList.add(projectItem_ACTIVATEDClassName)
            },100*i)
        }
    }


    const observingHandling =  ([entry])=>{
        if (entry.isIntersecting && !pageRendered("projects")) {
            updateRenderingState("projects")
            activateTitle(projectsTitleClassName)
            activateProjectItems(document.getElementsByClassName(projectItemClassName))
        }
    }
    useEffect(()=>{
        if (projectsContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(projectsContainerRef.current);
        }
    }, [])

    return (
        <section ref={projectsContainerRef} className="projects-container">
            <div className="projects-title-father-container">
                <h2 className="projects-container__title title">
                    My <span className="projects-container__title__made title__selected-text"> Projects </span>
                </h2>
                <div className="project-legend">
                    <h3 className="normal-project-legend">Normal project</h3>
                    <h3 className="medium-project-legend">Medium project</h3>
                    <h3 className="top-project-legend">Top project</h3>
                </div>
            </div>
            <div className="projects-container__projects_list">
                {
                    PROJECTS_LIST.map((project)=>{
                        return (
                            <ProjectItem
                                key={v4()}
                                name={project["name"]}
                                videoId={project["videoId"]}
                                repoLink={project["repoLink"]}
                                wil={project["wil"]}
                                mountedLink={project["mountedLink"]}
                            />
                            )
                    })
                }
            </div>
        </section>
    )
}