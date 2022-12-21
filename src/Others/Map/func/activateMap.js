import { mapContainerACTIVATEDClassName, mapContainerClassName } from "../../..";

export function activateMap(){
    const MAP = document.getElementsByClassName(mapContainerClassName)[0]
    setTimeout(() => {
        MAP.classList.add(mapContainerACTIVATEDClassName)
    }, 500);
}