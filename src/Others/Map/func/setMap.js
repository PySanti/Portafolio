import {   mainContainerClassName, mapContainerFILLClassName, mapItemClassName, pagesAnimation } from "../../..";
function setMapItemsColor(currentMapItemIndex, mapItemList){
    for (let i = 0; i < mapItemList.length; i++){
        if ((i < currentMapItemIndex) ){
            mapItemList[i].style.backgroundColor = "var(--back-color)"
        } else if (i >= currentMapItemIndex){
            mapItemList[i].style.backgroundColor = "var(--base-color)"
        }
    }
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
function moveFill(newLeft, fill){
    fill.style.left = `${-newLeft}%`
}

function setMapItem(MAP_ITEM, MAP_ITEM_LIST, MAP_FILL, MAIN_CONTAINER){
    let index = MAP_ITEM_LIST.indexOf(MAP_ITEM)
    const newLeft = 89-(index*20)
    MAP_ITEM.addEventListener("click", (e) =>{
        moveMainContainer(index, MAIN_CONTAINER)
        activateCurrentPage(index)
        moveFill(newLeft, MAP_FILL)
        setMapItemsColor(index, MAP_ITEM_LIST)
    })
}

export function setMap(){
    const MAP_ITEMS = document.getElementsByClassName(mapItemClassName);
    const MAP_ITEMS_ARRAY = []
    const MAP_FILL = document.getElementsByClassName(mapContainerFILLClassName)[0]
    const MAIN_CONTAINER = document.getElementsByClassName(mainContainerClassName)[0]
    let CURRENT_MAP_ITEM = undefined
    for (let i = 0; i < MAP_ITEMS.length; i++){
        MAP_ITEMS_ARRAY.push(MAP_ITEMS[i])
    }
    for (let i = 0; i < MAP_ITEMS_ARRAY.length; i++){
        CURRENT_MAP_ITEM = MAP_ITEMS_ARRAY[i]
        setMapItem(CURRENT_MAP_ITEM, MAP_ITEMS_ARRAY, MAP_FILL, MAIN_CONTAINER)
    }
}