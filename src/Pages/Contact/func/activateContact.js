import { 
    contactContentPARAPH_P1ClassName, 
    contactContentPARAPH_P2ClassName, 
    contactContentTITLEClassName} 
    from "../../../index";
import { activateTitle } from "../../../GeneralFuncs/activateTitle";
import { activateCopyBtn } from "../../../Others/CopyBtn/func/activateCopyBtn";

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
    activateTitle(contactContentTITLEClassName)
    activateCopyBtn()
}