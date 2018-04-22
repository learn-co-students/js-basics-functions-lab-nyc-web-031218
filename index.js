// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    return pickup - 42;
  }
  else {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet (pickup) {
  const blocks = distanceFromHqInBlocks(pickup);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
  return blocks * 264;
}
function distanceTravelledInFeet (pickup, dropoff) {
  if (pickup > dropoff) {
    return (pickup - dropoff) * 264;
  }
  else {
    return (dropoff - pickup) * 264;
  }
}

function calculatesFarePrice (pickup, dropoff) {
  const feet = distanceTravelledInFeet(pickup, dropoff)
  if (feet <= 400) {
    return 0;
  }
  else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 2 / 100;
  }
  else if (feet > 2000 && feet <= 2500) {
    return 25
  }
  else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
