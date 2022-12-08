const Ymove = 0.5
export class Tecno{
    constructor(tecnoHTML){
        this.tecnoHTML = tecnoHTML
        this.move = (Math.random()*0.3)+0.1
        this.pos = 10
        this.moveCount = 0
        this.scaleCount = 0
    }
    updateScale(){
        this.scaleCount += this.move/20
        if (this.scaleCount < 0){
            this.scaleCount *=-1
        } 
        if (this.scaleCount > 1){
            this.scaleCount = 1
        }
    }
    updatePos(){
        if (this.pos > 20 || this.pos < -20){
            this.move = -this.move
        }
        this.pos += (this.move)
    }
    update(){
        this.updatePos()
        this.updateScale()
        this.tecnoHTML.style.transform = `scale(${this.scaleCount}, ${this.scaleCount})`
    }
    render(){
        this.tecnoHTML.style.top = `${this.pos}vh`
    }
}