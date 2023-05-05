class Robot {
  execute(command) {
    // Check the command is valid
    const check = this.validateCommand(command);

    if (check) {
      // Split command, and deconstruct the items
      const commandSplit = command.split(" ");
      const [x, y, bearing, maneuver] = commandSplit;

      // Call makeManeuver function to get newPostion
      const newPosition = this.makeManeuver(x, y, bearing, maneuver);
      return String(newPosition).replaceAll(",", " ");
    } else {
      console.log("Invalid Entry, try again");
    }
  }
  

  validateCommand(command) {
    const commandSplit = command.split(" ");
    const [x, y, bearing, maneuver] = commandSplit;
    const manuoverSplit = maneuver.split("");

    let validation = true;

    if (!Number.isInteger(parseInt(x)) || !Number.isInteger(parseInt(y))) {
      validation = false;
    } else if (
      bearing != "NORTH" &&
      bearing != "EAST" &&
      bearing != "SOUTH" &&
      bearing != "WEST"
    ) {
      validation = false;
    }

    manuoverSplit.forEach((letter) => {
      if (letter != "A" && letter != "L" && letter != "R") {
        console.log(letter);
        validation = false;
      }
    });

    return validation;
  }

  makeManeuver(x, y, bearing, maneuver) {
    // This takes the current coordinates and bearing and makes a maneuver based on the instructions
    const manuoverSplit = maneuver.split(""); // split string into an array of individual moves
    let coOrd = [parseInt(x), parseInt(y)]; // converting to coordinates into integers

    manuoverSplit.forEach((move) => {
      // For each individual move, run the corrosponding method
      switch (move) {
        case "A":
          coOrd = this.advance(coOrd, bearing);
          break;
        case "L":
          bearing = this.anticlockwise(bearing);
          break;
        case "R":
          bearing = this.clockwise(bearing);
          break;
        default:
          break;
      }
    });
    // spread the coOrd array, and return with bearing at same level.
    return [...coOrd, bearing];
  }


  advance(coOrd, bearing) {
    // This takes the current coordinates and depending on bearing will maneuver one space along the x or y axis
    let [x, y] = coOrd;
    switch (bearing) {
      case "NORTH":
        coOrd = [x, (y += 1)];
        return coOrd;
      case "EAST":
        coOrd = [(x += 1), y];
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
    // This takes the current bearing and turns left, taking the next directional postion in an antu clockwise direction
    switch (bearing) {
      case "NORTH":
        bearing = "WEST";
        break;
      case "WEST":
        bearing = "SOUTH";
        break;
      case "SOUTH":
        bearing = "EAST";
        break;
      case "EAST":
        bearing = "NORTH";
        break;
      default:
        break;
    }
    return bearing;
  }


  clockwise(bearing) {
    // This takes the current bearing and turns right, taking the next directional postion in a clockwise direction
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

module.exports = Robot;
