import { aboutContainerPARAPHClassName, aboutContainerTITLEClassName } from "../../../index"
import { activateTitle } from "../../../GeneralFuncs/activateTitle";

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