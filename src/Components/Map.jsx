import React from "react"
import {useEffect, useRef} from "react"
import "../styles/MapStyles.css"
import { mainContainerClassName} from "../utils/constants";


export function Map(){

    const mapContainerClassName                      = "map-container"
    const mapContainerACTIVATEDClassName             = "map-container__ACTIVATED"
    const mapItemClassName                           = "map-item"
    const mapItemSelectedClassName                   = "map-item__SELECTED"


    let mapContainerRef = useRef()
    useEffect(()=>{
        setTimeout(() => {
            mapContainerRef.current.classList.add(mapContainerACTIVATEDClassName)
            setTimeout(()=>{
                const MAP_ITEM_LIST = mapContainerRef.current.children
                for (let i = 0; i < MAP_ITEM_LIST.length; i++ ){
                    if (MAP_ITEM_LIST[i].classList.contains(mapItemSelectedClassName)){
                        return false;
                    }
                }
                MAP_ITEM_LIST[0].classList.add(mapItemSelectedClassName)
            },2000)
        }, 500);
        const MAP_ITEMS_ARRAY = document.getElementsByClassName(mapItemClassName);
        const MAIN_CONTAINER = document.getElementsByClassName(mainContainerClassName)[0]
        for (let i = 0; i < MAP_ITEMS_ARRAY.length; i++){
            let index = i 
            const MAP_ITEM = MAP_ITEMS_ARRAY[i]
            MAP_ITEM.addEventListener("click", (e) =>{
                MAIN_CONTAINER.style.left = `${index*-100}vw`
                for (let i = 0; i < MAP_ITEMS_ARRAY.length;i++){
                    if (MAP_ITEMS_ARRAY[i].classList.contains(mapItemSelectedClassName)){
                        MAP_ITEMS_ARRAY[i].classList.remove(mapItemSelectedClassName)
                    }
                }
                MAP_ITEMS_ARRAY[i].classList.add(mapItemSelectedClassName)
            })
        }
    }, [])
    return (
        <div ref={mapContainerRef}className="map-container">
            <div className="map-item">      
                Home
            </div>
            <div className="map-item">      
                About
            </div>
            <div className="map-item">     
                Skills
            </div>
            <div className="map-item">   
                Projects
            </div>
            <div className="map-item">    
                Contact
            </div>
        </div>
    )
}