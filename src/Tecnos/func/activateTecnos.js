import { tecnosTitleClassName, tenocsTitleDOMClassName, tecnosListClassName, tecnoCountClassName, tecnoBarClassName } from "../.."


function activateTecnosTitle(title,titleDOM){
    title.style.opacity = "1"
    setTimeout(() => {
        titleDOM.style.margin = "2vw"
        titleDOM.style.color = "var(--base-color)"
        titleDOM.style.textShadow = "0px 0px 10px var(--base-color)"
    }, 2000);
}

function getElements(tecnoItem){
    let tecnoItemElements = tecnoItem.childNodes
    let elements = [0,0] // elemento 0 sera el tecnoCount y el elemento 1 sera el tecno-bar
    for (let i = 0; i < tecnoItemElements.length; i++){
        if (tecnoItemElements[i].classList[0] === tecnoCountClassName){
            elements[0] = Number(tecnoItemElements[i].textContent)
        } else if (tecnoItemElements[i].classList[0] === tecnoBarClassName){
            elements[1] = tecnoItemElements[i]
        }
    }
    return elements
}
let index = 0;
let timer = 100
function renderTecnosBar(tecnosElementsList){
    setTimeout(() =>{
        if (index < tecnosElementsList.length){
            let [tecnoCount,tecnoBar] = tecnosElementsList[index]
            tecnoBar.childNodes[0].style.left = `${-100+(tecnoCount)}%`
            index+=1
            renderTecnosBar(tecnosElementsList)
        }
    }, timer) 
}


function activateTecnosList(){
    let tecnosContainer = document.getElementsByClassName(tecnosListClassName)[0]
    let tecnosList = tecnosContainer.childNodes
    let tecnoCount = undefined
    let tecnoBar = undefined
    let tecnosElementsList = []
    for (let i = 0; i < tecnosList.length;i++){
        [tecnoCount,tecnoBar] = getElements(tecnosList[i])
        tecnosElementsList.push([tecnoCount,tecnoBar])
    }
    renderTecnosBar(tecnosElementsList)
}
export function activateTecnos(){
    const title = document.getElementsByClassName(tecnosTitleClassName)[0]
    const titleDOM = document.getElementsByClassName(tenocsTitleDOMClassName)[0]
    activateTecnosTitle(title, titleDOM)
    activateTecnosList()
}