class Robot {
    constructor() {
    }

    execute(command) {
        const commandSplit = command.split(" ")
        const [ x, y, bearing, manuover] = commandSplit
        console.log(commandSplit);
        console.log(x, y, bearing, manuover);
    }

}


const robot = new Robot()
robot.execute("0 0 North FFASD")