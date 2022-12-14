import {   mainContainerClassName, mapItemClassName, mapItemSelectedClassName, pagesAnimation } from "../../..";

function setMapItemSelection(currentMapItem, mapItemList){
    for (let i = 0; i < mapItemList.length;i++){
        if (mapItemList[i].classList.contains(mapItemSelectedClassName)){
            mapItemList[i].classList.remove(mapItemSelectedClassName)
        }
    }
    currentMapItem.classList.add(mapItemSelectedClassName)
}

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
        setMapItemSelection(MAP_ITEM, MAP_ITEM_LIST)
    })
}

export function setMap(){
    const MAP_ITEMS = document.getElementsByClassName(mapItemClassName);
    const MAP_ITEMS_ARRAY = []
    const MAIN_CONTAINER = document.getElementsByClassName(mainContainerClassName)[0]
    for (let i = 0; i < MAP_ITEMS.length; i++){
        MAP_ITEMS_ARRAY.push(MAP_ITEMS[i])
    }
    for (let i = 0; i < MAP_ITEMS_ARRAY.length; i++){
        setMapItem(MAP_ITEMS_ARRAY[i], MAP_ITEMS_ARRAY, MAIN_CONTAINER)
    }
}