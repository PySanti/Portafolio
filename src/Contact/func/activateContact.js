import { 
    contactContentTITLEClassName, 
    contactContentTITLE_MEClassName, 
    contactContentPARAPH_P1ClassName, 
    contactContentPARAPH_P2ClassName } 
    from "../..";

function activateContactTitle(){
    const title = document.getElementsByClassName(contactContentTITLEClassName)[0]
    const titleMe = document.getElementsByClassName(contactContentTITLE_MEClassName)[0]
    setTimeout(() =>{
        title.style.left = "0vw"
        title.style.opacity = "1"
        setTimeout(() =>{
            titleMe.style.color = "var(--base-color)"
            titleMe.style.textShadow = "0px 0px 10px var(--back-color)"
            titleMe.style.margin = "3vw"
        }, 1000)
    }, 1000)
}

function activateContactParaph(){
    const paraphP1 = document.getElementsByClassName(contactContentPARAPH_P1ClassName)[0] 
    const paraphP2 = document.getElementsByClassName(contactContentPARAPH_P2ClassName)[0]
    const paraphList = [paraphP1, paraphP2]
    setTimeout(() =>{
        paraphList.forEach((element) =>{
            element.style.top = "0vw"
            element.style.opacity = "1"
        })
    }, 500)
}


export function activateContact(){
    activateContactParaph()
    activateContactTitle()
}