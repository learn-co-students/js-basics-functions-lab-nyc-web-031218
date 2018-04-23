// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  let distance = someValue - 42;
  return Math.abs(distance);
}

function distanceFromHqInFeet (someValue) {
  let distance = distanceFromHqInBlocks(someValue);
  return distance * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  let difference = Math.abs(startingBlock - endingBlock)
  return difference * 264
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet (start, destination);

  if (distance <= 400)  {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
