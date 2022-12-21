export function diActivateKeys(){
    const HTML_ELEMENT = document.getElementsByTagName("html")[0]
    HTML_ELEMENT.addEventListener("keydown", (e)=>{
        e.preventDefault()
    })
}