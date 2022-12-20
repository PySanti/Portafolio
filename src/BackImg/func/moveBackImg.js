import { backImgClassName } from "../.."

export function moveBackImg({left=0, top=0, rotate=false, size=null}){
    const backImg = document.getElementsByClassName(backImgClassName)[0]
    backImg.style.left = `${left}vw`
    backImg.style.top = `${top}vh`
    if (size !== null){
        backImg.style.width = `${size[0]}vw`
        backImg.style.height = `${size[1]}vh`
    } 
    if (rotate){
        backImg.style.transform = "rotateY(180deg)"
    }  else {
        backImg.style.transform = "rotateY(0deg)"
    }
}