class Robot {
  constructor() {
  }

  execute(command) {
    // Break down command
    const commandSplit = command.split(" ");
    const [x, y, bearing, manuover] = commandSplit;

    console.log("1.", x, y, bearing, manuover);

    const newPlace = this.makeManuover(x, y, bearing, manuover);
    const response = String(newPlace).replaceAll(",", " ")
    return response

  }

  makeManuover(x, y, bearing, manuover) {
    console.log("2.", x, y, bearing, manuover);

    const manuoverSplit = manuover.split("");
    console.log("3", manuoverSplit);

    let coOrd = [parseInt(x), parseInt(y)];
    console.log("4", coOrd);

    manuoverSplit.forEach((move) => {
      console.log("5", move);
      switch (move) {
        case "A":
          console.log("A", coOrd);
          coOrd = this.advance(coOrd, bearing);
          console.log("B", coOrd);
          break
        case "L":
          bearing = this.anticlockwise(bearing);
          break
        case "R":
          bearing = this.clockwise(bearing);
          break
        default:
          break;
      }

    });
    return [...coOrd, bearing]
  }

  advance(coOrd, bearing) {
    let [x, y] = coOrd
    switch (bearing) {
      case "NORTH":
        coOrd = [x, (y = y + 1)];
        return coOrd;
      case "EAST":
        coOrd = [(x = x + 1), y];
        return coOrd;
      case "SOUTH":
        coOrd = [x, (y -= 1)];
        return coOrd;
      case "WEST":
        coOrd = [(x -= 1), y];
        return coOrd;
      default:
        break;
    }

    return coOrd;
  }

  anticlockwise(bearing) {
    console.log("TurnLeft");

    switch (bearing) {
      case "NORTH":
        bearing = "WEST";
        console.log("Left", bearing);
        break;
      case "WEST":
        bearing = "SOUTH";
        console.log("Left", bearing);
        break;
      case "SOUTH":
        bearing = "EAST";
        console.log("Left", bearing);
        break;
      case "EAST":
        bearing = "NORTH";
        console.log("Left", bearing);
        break;
      default:
        break;
    }
    return bearing;
  }

  clockwise(bearing) {
    console.log("TurnRight");

    switch (bearing) {
      case "NORTH":
        bearing = "EAST";
        break;
      case "EAST":
        bearing = "SOUTH";
        break;
      case "SOUTH":
        bearing = "WEST";
        break;
      case "WEST":
        bearing = "NORTH";
        break;
      default:
        break;
    }
    return bearing;
  }
}


// const robot = new Robot();
// robot.execute("0 0 NORTH A");
// robot.execute("0 0 NORTH AAAALAAAALAAAALAAAAL")


module.exports = Robot;