function distanceFromHqInBlocks (someValue) {
  return Math.abs(42 - someValue);
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  let dist = Math.abs(num2 - num1);
  return dist * 264;
}

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination)
  if(dist < 400){
    return 0;
  } else if (dist > 400 && dist < 2000){
    return (dist-400) * 0.02
  } else if (dist > 2000 & dist < 2500) {
    return 25;
  } else{
    return "cannot travel that far"
  }
}
