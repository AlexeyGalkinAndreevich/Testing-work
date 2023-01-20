


let player = {
    width:100,
    height:20,
    x:300,
    y:300,
    maxX:400,
    maxY:400,
    minX:200,
    minY:200,
    colorObj:"red",
    element:document.querySelector(".player")
}


let ball = {
    width:20,
    height:20,
    x:350,
    y:150,
    maxX:400,
    maxY:400,
    minX:200,
    minY:200,
    colorObj:"green",
    element:document.querySelector(".ball")
}

function ballDown(obj){
    obj.y = obj.y-5
    updateLocation(obj)
}
setInterval(()=>{
    console.log(1);
    ballDown(ball)
},500)

updateLocation(player)
updateLocation(ball)

document.body.addEventListener("keydown",(e)=>{
    switch(e.code){
            
        case "ArrowUp":
            player.y = player.y - 5
            break
        case "ArrowDown":
            player.y = player.y + 5
            break
        case "ArrowLeft":
            player.x = player.x - 5
            break
        case "ArrowRight":
            player.x = player.x + 5
            break
    }
    updateLocation(player)
        
})

function updateLocation(obj){
    if(obj.x>obj.maxX)obj.x=obj.maxX
    if(obj.x<obj.minX)obj.x=obj.minX
    if(obj.y>obj.maxY)obj.y=obj.maxY
    if(obj.y<obj.minY)obj.y=obj.minY
    obj.element.style.left = obj.x +'px'
    obj.element.style.top = obj.y +'px'
}

function updateSize(obj){
    console.log(obj);
    obj.element.style.width = obj.width +'px'
    obj.element.style.height = obj.height +'px'
    obj.element.style.backgroundColor = obj.colorObj
    // colorPlayer
}
updateSize(player)
updateSize(ball)