import React from "react";
import "./ProjectStyles.css"
import { ProjectItem } from "./ProjectItem/ProjectItem";

export function Projects(props){
    return (
        <section className="projects-container">
            <h2 className="projects-container__title">Projects that i <span className="projects-container__title__made page-title-selected-text"> made </span></h2>
            <div className="projects-container__projects_list">
                <ProjectItem 
                name="Kill the madafaka" 
                context="This is a game that i made in 2021, i last like 6 months doing this. This is my first and last 'big game project'. It has not been finished yet." 
                repoLink="https://github.com/PySanti/kill-the-madafaka.git"
                videoFileName ="./projectVideos/ktm.mp4"
                id ="pi-1"
                />

                <ProjectItem 
                name="Bouncing Ball" 
                context="This was one of my firts PyGame projects. It is just a ball that's bouncing hehe." 
                repoLink="https://github.com/PySanti/bouncing-ball.git"
                videoFileName ="./projectVideos/bb.mp4"
                id ="pi-2"
                />
                <ProjectItem 
                name="Calc It" 
                context="My first JS calculator. It was made using React" 
                repoLink="https://github.com/PySanti/calc-it.git"
                videoFileName ="./projectVideos/ci.mp4"
                id ="pi-3"
                />
                <ProjectItem 
                name="Facebook initial page clon" 
                context="This is a clon of the initial page facebook website" 
                repoLink="https://github.com/PySanti/InitialFacebookPageClon.git"
                videoFileName ="./projectVideos/fip.mp4"
                id ="pi-4"
                />
                <ProjectItem 
                name="Firefox initial page clon" 
                context="This is a clon of the initial page firefox website" 
                repoLink="https://github.com/PySanti/InitialFirefoxPageClon.git"
                videoFileName ="./projectVideos/ffip.mp4"
                id ="pi-5"
                />
                <ProjectItem 
                name="Graphic Binary Trees" 
                context="This is a graphical display of binary trees in the terminal. Personally this was one of the projects I am most proud of. I had to develop on my own a graphical sorting algorithm to be able to aesthetically render the tree on the terminal. It is a project made specifically in C but it can be executed from a Python script." 
                repoLink="https://github.com/PySanti/Graphic-Binary-Trees.git"
                videoFileName ="./projectVideos/gbt.mp4"
                id ="pi-6"
                />
                <ProjectItem 
                name="JS input" 
                context="This is a simple JS project. I just wanted to develop my own JS input. This was one of my firts JavaScript projects" 
                repoLink="https://github.com/PySanti/JS-input.git"
                videoFileName ="./projectVideos/jsi.mp4"
                id ="pi-7"
                />
                <ProjectItem 
                name="MegaKiller" 
                context="This was the first 'game' I made in PyGame, based on Megaman. It was never finished :(" 
                repoLink="https://github.com/PySanti/megakiller.git"
                videoFileName ="./projectVideos/mk.mp4"
                id ="pi-8"
                />
                <ProjectItem 
                name="Moving Madafaka Rect" 
                context="Visual effect of a moving rectangle. Made with Python and PyGame." 
                repoLink="https://github.com/PySanti/moving-madafaka-rect.git"
                videoFileName ="./projectVideos/mmr.mp4"
                id ="pi-9"
                />
                <ProjectItem 
                name="Pagina Figo" 
                context="This was my first page made with HTML and CSS, it is a page based on the life and history of Luis Figo." 
                repoLink="https://github.com/PySanti/LuisFigoPage.git"
                videoFileName ="./projectVideos/pf.mp4"
                id ="pi-10"
                />
                <ProjectItem 
                name="SpriteTester" 
                context="Sprite Tester is a tool created for testing sprites designed for simple games. The test drivers are programmed in the terminal." 
                repoLink="https://github.com/PySanti/SpriteTester.git"
                videoFileName ="./projectVideos/st.mp4"
                id ="pi-12"
                />
                <ProjectItem 
                name="Weder" 
                context="This was mi first project consuming an api. It is a project made for weather getting. It was mader with JS, HTML and CSS" 
                repoLink="https://github.com/PySanti/wederapp.git"
                videoFileName ="./projectVideos/wed.mp4"
                id ="pi-13"
                />
                <ProjectItem 
                name="Zombies JS" 
                context="Zombies JS is a project made to experiment with the movement of elements in HTML. Made in HTML, CSS and JavaScript" 
                repoLink="https://github.com/PySanti/zombies-js.git"
                videoFileName ="./projectVideos/zjs.mp4"
                id ="pi-14"
                />
            </div>
        </section>
    )
}