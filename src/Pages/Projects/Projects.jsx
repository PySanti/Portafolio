import React from "react";
import "./ProjectStyles.css"
import {ProjectItem} from "../../Others/ProjectItem/ProjectItem"

export function Projects(props){
    return (
        <section className="projects-container">
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