import { EMAIL, copyBtnClassName, copyBtnClassNameACTIVATED, copyBtnSuccessMsg, copyBtnSuccessMsgACTIVATED } from "../../..";


function copyText(text){
    const input = document.createElement("input")
    const body = document.getElementsByTagName('body')[0]
    input.setAttribute('value', text)
    body.appendChild(input)
    input.select()
    document.execCommand("copy")
    body.removeChild(input)
}


function activateSuccessMsg(){
    let msg = document.getElementsByClassName(copyBtnSuccessMsg)[0]
    msg.classList.add(copyBtnSuccessMsgACTIVATED)
    setTimeout(()=>{
        msg.classList.remove(copyBtnSuccessMsgACTIVATED)
    }, 1000)
}
function setCopyBtn(copyBtn){
    copyBtn.addEventListener("click",()=>{
        copyText(EMAIL)
        activateSuccessMsg()
    })
}




export function activateCopyBtn(){
    const copyBtn = document.getElementsByClassName(copyBtnClassName)[0];
    setTimeout(()=>{
        copyBtn.classList.add(copyBtnClassNameACTIVATED)
    },1000)
    setCopyBtn(copyBtn)
}