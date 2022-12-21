import { aboutContainerPARAPHClassName } from "../..";

export function activateAboutContainerParaph(){
    const aboutContainer = document.getElementsByClassName(aboutContainerPARAPHClassName)[0]
    aboutContainer.style.left = "0vw";
    aboutContainer.style.opacity = 1;
}