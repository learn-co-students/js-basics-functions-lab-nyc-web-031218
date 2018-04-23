function distanceFromHqInBlocks (pickup) {
  return Math.abs(42-pickup);
}

function distanceFromHqInFeet (someValue) {
  return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(beginning, destination) {
  return ((Math.abs(beginning - destination)) * 264);
}

function calculatesFarePrice (beginning, destination) {
  const distance = distanceTravelledInFeet(beginning, destination);
  let fare;
  if (distance <= 400) {
    return fare = 0;
  }
  if (distance > 400 && distance <= 2000) {
    return fare = (distance-400)*0.02;
  }
  if (distance <= 2500 && distance > 2000) {
    return fare = 25;
  }
  if (distance > 2500) {
    return 'cannot travel that far'
  }
}
