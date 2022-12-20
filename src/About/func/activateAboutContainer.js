import { aboutContainerPARAPHClassName, aboutContainerTITLEClassName } from "../.."
import { activateTitle } from "../../generalFuncs/activateTitle";

function activateAboutContainerParaph(){
    const aboutContainer = document.getElementsByClassName(aboutContainerPARAPHClassName)[0]
    aboutContainer.style.left = "0vw";
    aboutContainer.style.opacity = 1;
}

export function activateAboutContainer(){
    activateTitle(aboutContainerTITLEClassName)
    setTimeout(()=>{
        activateAboutContainerParaph()}
    ,500)
}