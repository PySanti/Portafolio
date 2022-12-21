import {   mainContainerClassName, mapItemClassName, pagesAnimation } from "../../..";

function moveMainContainer(currentPageIndex, mainContainer){
    mainContainer.style.left = `${currentPageIndex*-100}vw`
}
function activateCurrentPage(index){
    if ((index !== 0 ) && (!pagesAnimation[index].done)){
        pagesAnimation[index].done = true
        pagesAnimation[index].func()
    }
}


function setMapItem(MAP_ITEM, MAP_ITEM_LIST, MAIN_CONTAINER){
    let index = MAP_ITEM_LIST.indexOf(MAP_ITEM)
    MAP_ITEM.addEventListener("click", (e) =>{
        moveMainContainer(index, MAIN_CONTAINER)
        activateCurrentPage(index)
    })
}

export function setMap(){
    const MAP_ITEMS = document.getElementsByClassName(mapItemClassName);
    const MAP_ITEMS_ARRAY = []
    const MAIN_CONTAINER = document.getElementsByClassName(mainContainerClassName)[0]
    let CURRENT_MAP_ITEM = undefined
    for (let i = 0; i < MAP_ITEMS.length; i++){
        MAP_ITEMS_ARRAY.push(MAP_ITEMS[i])
    }
    for (let i = 0; i < MAP_ITEMS_ARRAY.length; i++){
        CURRENT_MAP_ITEM = MAP_ITEMS_ARRAY[i]
        setMapItem(CURRENT_MAP_ITEM, MAP_ITEMS_ARRAY, MAIN_CONTAINER)
    }
}