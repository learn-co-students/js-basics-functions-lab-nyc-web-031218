// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  const streetDistance = Math.abs(street1 - street2);
  return streetDistance * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  switch (true) {
    case (distanceInFeet <= 400):
      return 0;
    case (distanceInFeet <= 2000):
      const pricedDistance = distanceInFeet - 400;
      return pricedDistance * 0.02;
    case (distanceInFeet < 2500):
      return 25;
    default:
      return "cannot travel that far";
  }
}
