import { tecnosTitleClassName, tecnosListClassName, activatedTecnosClassName } from "../../../index"
import { activateTitle } from "../../../GeneralFuncs/activateTitle"


function activateTecnosSkills(){
    let tecnos = document.getElementsByClassName(tecnosListClassName)[0].children
    let timer = 500
    for (let i = 0; i < tecnos.length; i++){
        setTimeout(()=>{
            tecnos[i].classList.add(activatedTecnosClassName)

            setTimeout(()=>{
                tecnos[i].children[0].classList.add('tecno_check__activated')
            }, timer+400)

        }, timer)
        timer+=100
    }
}


export function activateTecnos(){
    activateTecnosSkills()
    activateTitle(tecnosTitleClassName)
}