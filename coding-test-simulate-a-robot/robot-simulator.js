class Robot {
    constructor(x, y, bearing, manover) {
        this.x = x;
        this.y = y;
        this.bearing = bearing
        this.manover = manover
        this.execute(manover)


    }

    execute(manover) {
        console.log(manover);
    }

    advance(){
        // Move forward in the current direction 
        
    }

    turnRight() {
        // Turn clockwise

    }

    turnLeft() {
        // Turn anticlock wise 

    }

}



const robot = new Robot(7, 3, "West", "e")

console.log(robot);