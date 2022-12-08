import { aboutContainerTITLEClassName } from "../.."
export function activateAboutContainerTitle(){
    const title = document.getElementsByClassName(aboutContainerTITLEClassName)[0]
    const titleComp = document.getElementsByClassName(aboutContainerTITLEClassName+"__comp")[0]
    title.style.opacity = "1"
    setTimeout(() =>{
        titleComp.style.margin = "2vw"
        titleComp.style.color = "var(--base-color)"
        titleComp.style.textShadow = "0px 0px 10px var(--base-color)"
    }, 1000)
}