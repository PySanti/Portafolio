export function activateTitle(pageTitleClassName){
    const pageTitle = document.getElementsByClassName(pageTitleClassName)[0]
    setTimeout(() =>{
        pageTitle.style.left = "0vw"
        pageTitle.style.top = "0vh"
        pageTitle.style.opacity = "1"
        if (pageTitle.hasChildNodes()){
            setTimeout(()=>{
                pageTitle.children[0].style.margin = "2vw"
                pageTitle.children[0].style.color = "var(--base-color)"
                pageTitle.children[0].style.textShadow = "0px 0px 10px var(--base-color)"
                pageTitle.children[0].style.opacity = "1"
                pageTitle.children[0].style.left = "0vw"
            }, 1000)
        }
    }, 100)
}