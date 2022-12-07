import { titleNAMEClassName } from "../.."
import { titleClassName } from "../.."
export function activateTitle(){
    const title = document.getElementsByClassName(titleClassName)[0]
    const titleName = document.getElementsByClassName(titleNAMEClassName)[0]
    title.style.left = `0vw`
    setTimeout(()=>{
        title.style.opacity = "1"
        setTimeout(()=>{
            titleName.style.margin = "1vw"
            titleName.style.textShadow = "0px 0px 20px var(--base-color)"
        },1000)
    },1000)
}