import { aboutContainerTITLEClassName, aboutContainerTITLE_COMPClassName } from "../.."
export function activateAboutContainerTitle(){
    const title = document.getElementsByClassName(aboutContainerTITLEClassName)[0]
    const titleComp = document.getElementsByClassName(aboutContainerTITLE_COMPClassName)[0]
    title.style.opacity = "1"
    setTimeout(() =>{
        titleComp.style.margin      = "2vw"
        titleComp.style.color       = "var(--base-color)"
        titleComp.style.textShadow  = "0px 0px 10px var(--base-color)"
    }, 1000)
}