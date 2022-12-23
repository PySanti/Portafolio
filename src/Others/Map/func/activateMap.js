import { mapContainerACTIVATEDClassName, mapContainerClassName, mapItemSelectedClassName } from "../../..";
import { setMap } from "./setMap";


function activateFirstMapItem(MAP_ITEM_LIST){
    MAP_ITEM_LIST[0].classList.add(mapItemSelectedClassName)
}

export function activateMap(){
    const MAP = document.getElementsByClassName(mapContainerClassName)[0]
    setTimeout(() => {
        MAP.classList.add(mapContainerACTIVATEDClassName)
        setTimeout(()=>{
            activateFirstMapItem(MAP.children)
        },2000)
    }, 500);
    setMap()
}