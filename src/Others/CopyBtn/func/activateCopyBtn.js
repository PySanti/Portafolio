import { EMAIL, copyBtnClassName, copyBtnClassNameACTIVATED } from "../../..";


function copyText(text){
    const input = document.createElement("input")
    const body = document.getElementsByTagName('body')[0]
    input.setAttribute('value', text)
    body.appendChild(input)
    input.select()
    document.execCommand("copy")
    body.removeChild(input)
}


function setCopyBtn(copyBtn){
    copyBtn.addEventListener("click",()=>{
        copyText(EMAIL)
    })
}


export function activateCopyBtn(){
    const copyBtn = document.getElementsByClassName(copyBtnClassName)[0];
    setTimeout(()=>{
        copyBtn.classList.add(copyBtnClassNameACTIVATED)
    },1000)
    setCopyBtn(copyBtn)
}