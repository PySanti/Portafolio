import { 
    projectItemClassName, 
    projectItem_ACTIVATEDClassName, 
    projectItem_SHOWEDClassName, 
    projectsContainerTITLE_ACTIVATEDClassName, 
    projectsTitleClassName, 
    projectsTitleMADEClassName, 
    projectsTitleMADE__ACTIVATEDClassName 
} from "../..";

const timer = 100
let i = 0
let currentZindex = 1;

function activateProjectsTitle(){
    const title = document.getElementsByClassName(projectsTitleClassName)[0]
    const titleMade = document.getElementsByClassName(projectsTitleMADEClassName)[0]
    setTimeout(() =>{
        title.classList.add(projectsContainerTITLE_ACTIVATEDClassName)
        setTimeout(()=>{
            titleMade.classList.add(projectsTitleMADE__ACTIVATEDClassName)
        },1000)
    }, 1000)
}



function setPI(pi){
    pi.addEventListener("mouseenter", (e)=>{
        currentZindex+=1
        pi.style.zIndex = currentZindex
        pi.classList.add(projectItem_SHOWEDClassName)
        pi.childNodes.forEach(element => {
            element.style.top = "-100%"
            if (element.localName === "video"){
                element.autoplay = true;
            }
        });
    })
    pi.addEventListener("mouseleave", (e)=>{
        pi.classList.remove(projectItem_SHOWEDClassName)
        pi.childNodes.forEach(element => {
            element.style.top = "0%"
            if (element.localName === "video"){
                element.autoplay = false;
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
    activateProjectsTitle()
    activateProjectItems(projectItems)
}