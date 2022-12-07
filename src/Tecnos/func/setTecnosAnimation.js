import { Tecno } from "./Tecno"
import { tecnosClassName } from "../.."


export function setTecnosAnimation(){
    let tecnosHTMLList = Array(document.getElementsByClassName(tecnosClassName))[0]
    let tecnosOBJList = [] 
    let currentTecno = undefined
    for (let i = 0; i < tecnosHTMLList.length; i++){
        currentTecno = tecnosHTMLList[i]
        tecnosOBJList.push(new Tecno(currentTecno))
    }
}

