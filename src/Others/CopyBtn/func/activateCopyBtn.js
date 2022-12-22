import { copyBtnClassName, copyBtnClassNameACTIVATED } from "../../..";

function setCopyBtn(copyBtn){
    copyBtn.addEventListener("click",()=>{
        console.log("Copy btn clicked!!")
    })
}


export function activateCopyBtn(){
    const copyBtn = document.getElementsByClassName(copyBtnClassName)[0];
    console.log(copyBtn)
    setTimeout(()=>{
        copyBtn.classList.add(copyBtnClassNameACTIVATED)
    },1000)
    setCopyBtn(copyBtn)
}