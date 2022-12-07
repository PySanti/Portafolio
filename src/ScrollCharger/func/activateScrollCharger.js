import { scrollChargerClassName } from "../..";
export function activateScrollCharger(){
    const scrollCharger = document.getElementsByClassName(scrollChargerClassName)[0]

    setTimeout(() =>{
        scrollCharger.style.transform = "scale(1,1)"
        setTimeout(() =>{
            scrollCharger.style.boxShadow  = "0px 0px 20px var(--base-color)"
        },1000)
    }, 2000)
}