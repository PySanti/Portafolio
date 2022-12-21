import { mapContainerACTIVATEDClassName, mapContainerClassName } from "../../..";
import { setMap } from "./setMap";

export function activateMap(){
    const MAP = document.getElementsByClassName(mapContainerClassName)[0]
    setTimeout(() => {
        MAP.classList.add(mapContainerACTIVATEDClassName)
    }, 500);
    setMap()
}