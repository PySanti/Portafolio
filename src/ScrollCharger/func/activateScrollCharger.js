import {  scrollChargerClassName } from "../..";
export function activateScrollCharger(){
    const scrollCharger = document.getElementsByClassName(scrollChargerClassName)[0]

    setTimeout(() =>{
        scrollCharger.style.transform = "scale(1,1)"
    }, 2000)
}