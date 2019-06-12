// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: ["(0,0)"]
}
// ======================
function turnLeft(rover){
  console.log('turnLeft was called!');
  console.log("the initial direction is: ", rover.direction);
	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'N';
			break;
	};

  console.log("the new direction is: ", rover.direction);
}
  

function turnRight(rover){
  console.log("turnRight was called!");
  console.log("the initial direction is: ", rover.direction);
  switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;

		case 'W':
			rover.direction = 'N';
			break;

		case 'S':
			rover.direction = 'W';
			break;

		case 'E':
			rover.direction = 'S';
			break;
	};

  console.log("the new direction is: ", rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  console.log("the direction is: ", rover.direction);
  console.log("the initial coordinates are: x: ", rover.x, " Y: ", rover.y);
  switch (rover.direction) {
		case 'N':
      if (rover.y === 0){
        console.log("we have reached the limit in this direction")
      }
      else {
			rover.y = rover.y - 1;};
			break;

		case 'W':
        if (rover.x === 0){
          console.log("we have reached the limit in this direction")
        } else {
      rover.x = rover.x - 1;
        };
			break;

		case 'S':
        if (rover.y === 9){
          console.log("we have reached the limit in this direction")
        } else {
			rover.y = rover.y + 1;};
			break;

		case 'E':
        if (rover.y === 9){
          console.log("we have reached the limit in this direction")
        } else {
			rover.y = rover.y + 1;}
			break;
  };
  rover.travelLog.push("("+ rover.x + "," + rover.y + ")");
  console.log("the present coordinates are: x: ", rover.x, " Y: ", rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  console.log("the direction is: ", rover.direction);
  console.log("the initial coordinates are: x: ", rover.x, " Y: ", rover.y);
  switch (rover.direction) {
		case 'N':
      if (rover.y === 9){
        console.log("we have reached the limit in this direction")
      }
      else {
			rover.y = rover.y + 1;};
			break;

		case 'W':
        if (rover.x === 9){
          console.log("we have reached the limit in this direction")
        } else {
      rover.x = rover.x + 1;
        };
			break;

		case 'S':
        if (rover.y === 0){
          console.log("we have reached the limit in this direction")
        } else {
			rover.y = rover.y - 1;};
			break;

		case 'E':
        if (rover.y === 0){
          console.log("we have reached the limit in this direction")
        } else {
			rover.y = rover.y - 1;}
			break;
  };
  rover.travelLog.push("("+ rover.x + "," + rover.y + ")");
  console.log("the present coordinates are: x: ", rover.x, " Y: ", rover.y);
}

function doCommands(listOfCommands, rover){
  console.log("moveBackward was called");
  for (let i = 0; i < listOfCommands.length; i++){
    switch (listOfCommands[i]){
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default:
        console.log("invalid command was passed");
        break;
    }
  }
  console.log("TravelLog - List of Locations: ", rover.travelLog);
}