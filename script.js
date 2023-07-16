let body = document.getElementById('body')
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let oreQanty = 15


let boom = new Audio('./sounds/explosion.mp3')
    hooray = new Audio('./sounds/win.mp3')
    destroy = [new Audio('./sounds/grass1.mp3'),  new Audio('./sounds/grass2.mp3'), new Audio('./sounds/grass3.mp3'), new Audio('./sounds/grass4.mp3')]
        
function bomb(obj){
    if(obj == tnt){
        boom.play()
        obj.src = "./texture/tnt.png"
        let explision = document.createElement('img')
        body.appendChild(explision)
        explision.src = "./texture/explosion.gif"
        explision.style.top = '0px'
        explision.style.zIndex = 3
        explision.draggable = false
        explision.className = 'final'
        explision.style.marginLeft = (body.offsetWidth - explision.offsetWidth)/2 + 'px'
        setTimeout(() => body.removeChild(explision), 750) 

        let over = document.createElement('img')
        body.appendChild(over)
        over.src = "./texture/game over.png"
        over.style.top = '0px'
        over.className = 'final'
        over.style.marginLeft = (body.offsetWidth - over.offsetWidth)/2 + 'px'
        over.draggable = false
        
        retstart()
    } else {
        obj.src = "./texture/diamond.png"
        oreQanty--
        if (oreQanty == 0){
            hooray.play()
            let win = document.createElement('img')
            body.appendChild(win)
            win.src = "./texture/you win.png"
            win.style.top = '0px'
            win.draggable = false
            win.className = 'final'
            win.style.marginLeft = (body.offsetWidth - win.offsetWidth)/2 + 'px'

            let winy = document.createElement('img')
            body.appendChild(winy)
            winy.src = "./texture/win.gif"
            winy.style.top = '0px'
            winy.style.zIndex = 3
            winy.draggable = false
            winy.className = 'final'
            winy.style.marginLeft = (body.offsetWidth - winy.offsetWidth)/2 + 'px'
            setTimeout(() => body.removeChild(winy), 800) 

            retstart()
        } else {
            destroy[randomInteger(0, 3)].play()
        }
    }
}

function retstart(){
    let retstart = document.createElement('img')
    body.appendChild(retstart)
    retstart.src = './texture/retstart.png'
    retstart.className = 'final'
    retstart.style.top = '125px'
    retstart.style.zIndex = 2
    retstart.style.marginLeft = (body.offsetWidth - retstart.offsetWidth)/2 + 'px'
    retstart.onclick = () => location.reload()    
}
let tnt = document.getElementById(randomInteger(1, 16))
