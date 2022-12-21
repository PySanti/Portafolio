import { pagesAnimation }           from "../../../index"
import { scrollChargerClassName }   from "../../../index"
import { maxScrolling }             from "../../../index"
import { getScrollCount, setScrollCount } from "./updateScrollCount"



function setFunction(scrollRight, mainContainer, charger){
    let scrollCount         = getScrollCount()
    let currentLeft         = mainContainer.style.left.includes("px")? Number(mainContainer.style.left.split("px")[0]):Number(mainContainer.style.left.split("vw")[0]);
    const scrollMove = 50
    if ((scrollRight) && (scrollCount<100)){
        scrollCount+=scrollMove
    } else if ((!scrollRight) && (scrollCount>0)){
        scrollCount+=-scrollMove
    }
    if ((scrollCount === 100 && ((currentLeft*-1) < ((maxScrolling*100)-100))) || (scrollCount===0 && (currentLeft!==0))){
        currentLeft = scrollCount === 100? currentLeft-100:currentLeft+100
        mainContainer.style.left = `${currentLeft}vw`
        scrollCount = scrollCount === 100? 0:100;
        if (scrollCount === 100 || scrollCount === 0){
            let currentAnimation = (currentLeft/100)*-1
            if ((pagesAnimation[currentAnimation] !== undefined)){
                if (!pagesAnimation[currentAnimation].done){
                    pagesAnimation[currentAnimation].done = true
                    pagesAnimation[currentAnimation].func()
                }
            } 
        } 
    }
    setScrollCount(scrollCount)
    charger.style.left = `${scrollCount}%`
}

/*
En esta funcion se agregan listeners al html para que, cuando se haga un keydown de las flechas derecha o izquierda 
se aumente o disminuya el valor de scrollCount y se mueva el charger. Lo mismo para cuando se haga un wheel negativo o positivo
*/
export function setScrollCharger(){
    const mainContainer = document.getElementsByClassName("main-container")[0]
    const charger = document.getElementsByClassName(scrollChargerClassName)[0]
    const htmlElement = document.getElementsByTagName("html")[0]
    const keys = ["ArrowRight", "ArrowLeft", "Tab"]

    htmlElement.addEventListener("keydown", (e) => {
        if (keys.includes(e.key)){
            e.preventDefault()
            if (e.key !== keys[2]){
                setFunction(e.key==="ArrowRight", mainContainer, charger)
            }
        }
    })
    htmlElement.addEventListener("wheel", (e) => {
        e.preventDefault()
        setFunction(e.deltaY > 0, mainContainer, charger)
    }, )
}