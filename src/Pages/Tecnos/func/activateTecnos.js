import { tecnosTitleClassName, tecnosListClassName, activatedTecnosClassName } from "../../../index"
import { activateTitle } from "../../../GeneralFuncs/activateTitle"

function setTecnosCheck(current_tecno, current_timer){
    setTimeout(()=>{
        current_tecno.children[0].classList.add('tecno_check__activated')
    }, current_timer+100)
}


function activateTecnosSkills(tecnos,current_tecno){
    setTimeout(()=>{
        tecnos[current_tecno].classList.add(activatedTecnosClassName)
        setTecnosCheck(tecnos[current_tecno], current_tecno*200)
    }, current_tecno*200)
    if (current_tecno < tecnos.length){
        activateTecnosSkills(tecnos, current_tecno+1)
    }
}


export function activateTecnos(){
    let tecnos = document.getElementsByClassName(tecnosListClassName)[0].children
    activateTecnosSkills(tecnos, 0)
    activateTitle(tecnosTitleClassName)
}