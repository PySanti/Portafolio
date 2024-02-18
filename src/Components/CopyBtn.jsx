import React from "react"
import {useRef, useEffect} from "react"
import "../styles/CopyBtnStyles.css"
import { EMAIL} from "../utils/constants";

export function CopyBtn(){

    const copyBtnClassNameACTIVATED                  = "copy-btn__ACTIVATED"
    const copyBtnSuccessMsgACTIVATED                 = "success-msg__ACTIVATED"
    let successMsgRef = useRef()
    let copyBtnRef =  useRef()

    const observingHandling = ([entry])=>{
        if (entry.isIntersecting) {
            // crear state global con object para saber que pages ya han sido activadas
            setTimeout(()=>{
                copyBtnRef.current.classList.add(copyBtnClassNameACTIVATED)
            },1000)
        }
    }
    const copyText = (text)=>{
        const input = document.createElement("input")
        const body = document.getElementsByTagName('body')[0]
        input.setAttribute('value', text)
        body.appendChild(input)
        input.select()
        document.execCommand("copy")
        body.removeChild(input)
    }
    const activateSuccessMsg = ()=>{
        successMsgRef.current.classList.add(copyBtnSuccessMsgACTIVATED)
        setTimeout(()=>{
            successMsgRef.current.classList.remove(copyBtnSuccessMsgACTIVATED)
        }, 1000)
    }
    const handleClick = ()=>{
        copyText(EMAIL)
        activateSuccessMsg()
    }
    useEffect(()=>{
        if (copyBtnRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(copyBtnRef.current);
        }
    }, [])
    return (
        <div ref={copyBtnRef} className="copy-btn">
            <span className="material-symbols-outlined copy-btn__img" onClick={handleClick}>
                content_copy
            </span>
            <span ref={successMsgRef} className="success-msg">copied!</span>
        </div>
    )
}