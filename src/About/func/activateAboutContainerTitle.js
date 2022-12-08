import { aboutContainerTITLEClassName } from "../.."
export function activateAboutContainerTitle(){
    const title = document.getElementsByClassName(aboutContainerTITLEClassName)[0]
    title.style.opacity = "1"
}