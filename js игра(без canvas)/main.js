
class Player{
    constructor(){
        this.width = 100,
        this.height = 20,
        this.x = 300,
        this.y = 300,
        this.maxX = 400,
        this.maxY = 400,
        this.minX = 200,
        this.minY = 200,
        this.colorObj = "red",
        this.element = document.querySelector(".player")
    }
    onClick(e){
        switch(e.code){
            
            case "ArrowUp":
                this.y = this.y - 5
                break
            case "ArrowDown":
                this.y = this.y + 5
                break
            case "ArrowLeft":
                this.x = this.x - 5
                break
            case "ArrowRight":
                player.x = player.x + 5
                break
        }
    }
    updateLocation(){
        console.log(this.y);
        if(this.x>this.maxX)this.x=this.maxX
        if(this.x<this.minX)this.x=this.minX
        if(this.y>this.maxY)this.y=this.maxY
        if(this.y<this.minY)this.y=this.minY
        this.element.style.left = this.x +'px'
        this.element.style.top = this.y +'px'
    }
    updateSize(){
        this.element.style.width = this.width +'px'
        this.element.style.height = this.height +'px'
        this.element.style.backgroundColor = this.colorObj
        // colorPlayer
    }




}

class Ball{
    constructor(){
        this.width = 20,
        this.height = 20,
        this.x = 350,
        this.y = 150,
        this.maxX = 400,
        this.maxY = 400,
        this.minX = 200,
        this.minY = 200,
        this.colorObj = "green",
        this.element = document.querySelector(".ball")
    }
    updateLocation(){
        if(this.x>this.maxX)this.x=this.maxX
        if(this.x<this.minX)this.x=this.minX
        if(this.y>this.maxY)this.y=this.maxY
        if(this.y<this.minY)this.y=this.minY
        this.element.style.left = this.x +'px'
        this.element.style.top = this.y +'px'
    }
    updateSize(){
        this.element.style.width = this.width +'px'
        this.element.style.height = this.height +'px'
        this.element.style.backgroundColor = this.colorObj
        // colorPlayer
    }
    ballDown(){
        console.log(this.y);
        this.y = this.y-5
        // console.log(this.y);
        this.updateLocation()
    }
    
}

const player = new Player()
const ball = new Ball()


setInterval(()=>{
    ball.ballDown()
},500)

player.updateLocation()
ball.updateLocation()


document.body.addEventListener("keydown",(e)=>{
    player.onClick(e)
    player.updateLocation()
        
})



player.updateSize()
ball.updateSize()