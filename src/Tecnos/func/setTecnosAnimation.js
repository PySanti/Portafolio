import { Tecno } from "./Tecno"
import { tecnosClassName } from "../.."

export function setTecnosAnimation(){
    let tecnosHTMLList = Array(document.getElementsByClassName(tecnosClassName))[0]
    let tecnosOBJList = [] 
    let currentTecno = undefined
    let newTecnoObj = undefined
    for (let i = 0; i < tecnosHTMLList.length; i++){
        currentTecno = tecnosHTMLList[i]
        newTecnoObj = new Tecno(currentTecno)
        tecnosOBJList.push(newTecnoObj)
    }
    return tecnosOBJList
}

