
let tecnoI = 0
let intervalCode = undefined
function updateTecnos(tecnosList){
    setTimeout(()=>{
        console.log("actualizando")
        if (tecnoI < tecnosList.length){
            tecnosList[tecnoI].update()
            tecnosList[tecnoI].render()
            updateTecnos(tecnosList)
            tecnoI++
        }
    },200)
}

export function setTecnosInterval(tecnosList){
    intervalCode = setInterval(() =>{
        tecnoI=0
        updateTecnos(tecnosList)
    }, 20)
}

export function removeTecnosInterval(){
    clearInterval(intervalCode)
}