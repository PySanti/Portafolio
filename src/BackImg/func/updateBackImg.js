import { moveBackImg } from "./moveBackImg"

export function updateBackImg({currentPage}){
    console.log("Actualizando back img")
    if (currentPage === 0){
        moveBackImg({
            left:5,
            top :5,
            rotate:false,
            size:[10,10]
            })
    } else if (currentPage === 1){
        moveBackImg({
            left:5,
            top : 70,
            rotate:true,
            size:[30,30]
            })

    } else if (currentPage === 2){
        moveBackImg({
            left:80,
            top :80,
            rotate:false,
            size:[30,30]
            })
    } else if (currentPage === 3){
        moveBackImg({
            left:90,
            top :-5,
            rotate:false,
            size:[20,20]
            })
    } else if (currentPage === 4){
        moveBackImg({
            left:40,
            top :20,
            rotate:false,
            size:[20,20]
            })
    }
}