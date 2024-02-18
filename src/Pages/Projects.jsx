import {useEffect ,useRef} from 'react'
import React from "react";
import "../styles/ProjectStyles.css"
import {ProjectItem} from "../Components/ProjectItem"
import { activateTitle } from "../utils/activateTitle";

export function Projects(props){

    const projectsTitleClassName                     = "projects-container__title"
    const projectsContainerTITLE_ACTIVATEDClassName  = "projects-container__title__ACTIVATED"
    const projectsContainerTITLE_UN_SHOWEDClassName  = "projects-container__title__UNSHOWED"
    const projectsTitleMADEClassName                 = "projects-container__title__made"
    const projectsTitleMADE__ACTIVATEDClassName      = "projects-container__title__made__ACTIVATED"


    const projectItemClassName                       = "project-item"
    const projectItemContainerClassName              = "projects-container__projects_list"
    const projectItem_ACTIVATEDClassName             = "project-item__ACTIVATED"
    const projectItem_SHOWEDClassName                = "project-item__SHOWED"
    const projectsContainerClassName                 = "projects-container"

    let projectsContainerRef = useRef()
    const timer = 100
    let i = 0
    let currentZindex = 1;
    const setPI = (pi)=>{
        pi.addEventListener("mouseenter", (e)=>{
            currentZindex+=1
            pi.style.zIndex = currentZindex
            pi.classList.add(projectItem_SHOWEDClassName)
            pi.childNodes.forEach(element => {
                element.style.top = "-100%"
                if (element.localName === "video"){
                    element.play();
                }
            });
        })
        pi.addEventListener("mouseleave", (e)=>{
            pi.classList.remove(projectItem_SHOWEDClassName)
            pi.childNodes.forEach(element => {
                element.style.top = "0%"
                if (element.localName === "video"){
                    element.pause();
                }
            });
        })

    }
    const activateProjectItems = (projectItems)=>{
        setTimeout(() =>{
            if (i < projectItems.length){
                projectItems[i].classList.add(projectItem_ACTIVATEDClassName)
                setPI(projectItems[i])
                i++
                activateProjectItems(projectItems)
            }
        },timer)
    }


    const observingHandling =  ([entry])=>{
        if (entry.isIntersecting) {
            // crear state global con object para saber que pages ya han sido activadas
            const projectItems = document.getElementsByClassName(projectItemClassName)
            activateTitle(projectsTitleClassName)
            activateProjectItems(projectItems)
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
            <h2 className="projects-container__title title">My <span className="projects-container__title__made title__selected-text"> Projects </span></h2>
            <div className="projects-container__projects_list">
                <ProjectItem 
                name="Geome Man" 
                repoLink="https://github.com/PySanti/kill-the-madafaka.git"
                videoFileName ="./projectVideos/ktm.mp4"
                id ="pi-1"
                />
                <ProjectItem 
                name="Bouncing Ball" 
                repoLink="https://github.com/PySanti/bouncing-ball.git"
                videoFileName ="./projectVideos/bb.mp4"
                id ="pi-2"
                />
                <ProjectItem 
                name="Calc It" 
                repoLink="https://github.com/PySanti/calc-it.git"
                videoFileName ="./projectVideos/ci.mp4"
                id ="pi-3"
                />
                <ProjectItem 
                name="Facebook clon" 
                repoLink="https://github.com/PySanti/InitialFacebookPageClon.git"
                videoFileName ="./projectVideos/fip.mp4"
                id ="pi-4"
                />
                <ProjectItem 
                name="Firefox clon" 
                repoLink="https://github.com/PySanti/InitialFirefoxPageClon.git"
                videoFileName ="./projectVideos/ffip.mp4"
                id ="pi-5"
                />
                <ProjectItem 
                name="Graphic Binary Trees" 
                repoLink="https://github.com/PySanti/Graphic-Binary-Trees.git"
                videoFileName ="./projectVideos/gbt.mp4"
                id ="pi-6"
                />
                <ProjectItem 
                name="JS input" 
                repoLink="https://github.com/PySanti/JS-input.git"
                videoFileName ="./projectVideos/jsi.mp4"
                id ="pi-7"
                />
                <ProjectItem 
                name="Mega Killer" 
                repoLink="https://github.com/PySanti/megakiller.git"
                videoFileName ="./projectVideos/mk.mp4"
                id ="pi-8"
                />
                <ProjectItem 
                name="Hypno Rect" 
                repoLink="https://github.com/PySanti/moving-madafaka-rect.git"
                videoFileName ="./projectVideos/mmr.mp4"
                id ="pi-9"
                />
                <ProjectItem 
                name="Pagina Figo" 
                repoLink="https://github.com/PySanti/LuisFigoPage.git"
                videoFileName ="./projectVideos/pf.mp4"
                id ="pi-10"
                />
                <ProjectItem 
                name="Sprite Tester" 
                repoLink="https://github.com/PySanti/SpriteTester.git"
                videoFileName ="./projectVideos/st.mp4"
                id ="pi-12"
                />
                <ProjectItem 
                name="Weder" 
                repoLink="https://github.com/PySanti/wederapp.git"
                videoFileName ="./projectVideos/wed.mp4"
                id ="pi-13"
                />
                <ProjectItem 
                name="Zombies JS" 
                repoLink="https://github.com/PySanti/zombies-js.git"
                videoFileName ="./projectVideos/zjs.mp4"
                id ="pi-14"
                />
                <ProjectItem 
                name="Kremess" 
                repoLink="https://kremess.netlify.app"
                videoFileName ="./projectVideos/kremess.mp4"
                id ="pi-15"
                />
            </div>
        </section>
    )
}