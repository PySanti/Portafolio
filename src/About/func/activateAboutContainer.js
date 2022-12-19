import { 
    aboutContainerPARAPHClassName, 
    aboutContainerPARAPH_WORDSClassName, 
    aboutContainerPARAPH_KEYWORDSClassName, 
    aboutContainerKeyWords } from "../.."
import { activateAboutContainerTitle } from "./activateAboutContainerTitle";

let wordI = 0
const wordsShowTimer = 50
function activateWords(words){
    if (wordI < words.length){
        setTimeout(() =>{
            words[wordI].style.opacity = 1;
            wordI +=1
            activateWords(words)
        },wordsShowTimer)
    }
}

export function activateAboutContainer(){
    const aboutContainer = document.getElementsByClassName(aboutContainerPARAPHClassName)[0]
    const textContent = aboutContainer.textContent
    let wordsList = textContent.split(" ")
    aboutContainer.innerHTML = ""
    const keyWordsLen = aboutContainerKeyWords['content'].split(" ").length
    let currentSlice = ""

    for (let i = 0; i < wordsList.length; i++){
        currentSlice = wordsList.slice(i, i+keyWordsLen).join(" ")
        if (currentSlice.toLowerCase() === aboutContainerKeyWords['content'].toLowerCase()){
            let newElement = document.createElement("a")
            newElement.href = aboutContainerKeyWords['href']
            newElement.textContent = currentSlice
            newElement.classList.add(aboutContainerPARAPH_KEYWORDSClassName)
            aboutContainer.appendChild(newElement)
            i += keyWordsLen
        } else {
            let newElement = document.createElement("span")
            newElement.textContent = wordsList[i]+" "
            newElement.classList.add(aboutContainerPARAPH_WORDSClassName)
            aboutContainer.appendChild(newElement)
        }
    }
    activateWords(aboutContainer.childNodes)
    setTimeout(() => {
        activateAboutContainerTitle()
    }, wordsShowTimer*(aboutContainer.childNodes.length+2))
}