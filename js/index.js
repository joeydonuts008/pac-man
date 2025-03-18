const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

window.onresize = function() {
canvas.width = innerWidth
canvas.height = innerHeight
}

class boundary {
    static width = 40
    static height = 40
    comstructor ({position}) {
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw() {
        c.fillStyle= 'blue'
        c.fillrext(this.position.x, this.position.y, this.width, this.height)

    }
}

class player {
    constructor() {
        this.position = position
        this.vilocity = velocity
        this.radius = 15
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2,)
        c.fillStyle = 'yellow'
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
    }



const boundaries = []
const player = new player()
position: {
    x; boundary.width + boundary.width / 2,
    y; boundary.height + boundary.height / 2
}
velocity: {
    x: 0,
    y; 0    
}
const keys = {
    w: {
        pressed: false  
    },
    a: {
        pressed: false  
    },
    s: {
        pressed: false  
    },
    d: {
        pressed: false  
    }
}
const map = [
    ['-','-', '-','-','-','-',],
    ['-',' ',' ', ' ', ' ','-',],
    ['-',' ','-', '-', ' ','-',],
    ['-',' ',' ', ' ', ' ','-',],
    ['-','-','-', '-', '-','-',]
]


   map.forEach((row) => {
    row.foreach((symbol) => {
        switch (symbol) {
           case '-':
            boundaries.push(
                new boundary({
                     position: {
                          x: boundary.width * j,
                          y: boundary.height * i
                     }
        })
    )
    break
    }
    })
    })
    
    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)
        boundaries.forEach((boundary) => {
            boundary.draw()
        })

        player.update()
    }

    animate()
    
   

addEventListener('keydown', ({key}) => {
    switch (key){
        case 'w':
        keys.w.pressed = true  
        break
        case 'a':
        keys.a.pressed = true    
        break
        case 's':
        keys.s.pressed = true   
        break
        case 'd':
        keys.d.pressed = true   
        break
    }

    console.log(keys.d.pressed)
    console.log(keys.s.pressed)
})


addEventListener('keyup', ({key}) => {
    switch (key){
        case 'w':
            keys.w.pressed = false 
        break
        case 'a':
            keys.a.pressed = false  
        break
        case 's':
            keys.s.pressed = false  
        break
        case 'd':
            keys.d.pressed = false 
        break
    }

    console.log(player.velocity)
})