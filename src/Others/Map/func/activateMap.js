import { mapContainerACTIVATEDClassName, mapContainerClassName, mapItemSelectedClassName } from "../../..";
import { setMap } from "./setMap";


function activateFirstMapItem(MAP_ITEM_LIST){
    for (let i = 0; i < MAP_ITEM_LIST.length; i++ ){
        if (MAP_ITEM_LIST[i].classList.contains(mapItemSelectedClassName)){
            return false;
        }
    }
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