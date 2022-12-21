import { 
    projectItemClassName, 
    projectItem_ACTIVATEDClassName, 
    projectItem_SHOWEDClassName, 
    projectsTitleClassName, 
} from "../../../index";
import { activateTitle } from "../../../GeneralFuncs/activateTitle";

const timer = 100
let i = 0
let currentZindex = 1;


function setPI(pi){
    pi.addEventListener("mouseenter", (e)=>{
        currentZindex+=1
        pi.style.zIndex = currentZindex
        pi.classList.add(projectItem_SHOWEDClassName)
        pi.childNodes.forEach(element => {
            element.style.top = "-100%"
            if (element.localName === "video"){
                element.play();
            }
        });
    })
    pi.addEventListener("mouseleave", (e)=>{
        pi.classList.remove(projectItem_SHOWEDClassName)
        pi.childNodes.forEach(element => {
            element.style.top = "0%"
            if (element.localName === "video"){
                element.pause();
            }
        });
    })

}
function activateProjectItems(projectItems){
    setTimeout(() =>{
        if (i < projectItems.length){
            projectItems[i].classList.add(projectItem_ACTIVATEDClassName)
            setPI(projectItems[i])
            i++
            activateProjectItems(projectItems)
        }
    },timer)
}



export function activateProjects(){
    const projectItems = document.getElementsByClassName(projectItemClassName)
    activateTitle(projectsTitleClassName)
    activateProjectItems(projectItems)
}