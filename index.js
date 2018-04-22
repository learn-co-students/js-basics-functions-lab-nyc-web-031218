// Code your solution in this file!
function distanceFromHqInBlocks(n){
  return Math.abs(n - 42);
};
function distanceFromHqInFeet(n){
  return distanceFromHqInBlocks(n) * 264;
};
function distanceTravelledInFeet(startingBlock, endingBlock){
return (Math.abs(startingBlock - endingBlock) * 264);
};

function calculatesFarePrice(start, destination){
  distance = distanceTravelledInFeet(start, destination);
  var free400 = (Math.abs(distance - 400)* .02);
  console.log(`distance is ${distance}`)
  if (distance <= 400) {
    return (0)
  } else if (distance < 2000){
    return ((Math.abs(distance - 400))* .02);
  } else if (distance >= 2000 && distance < 2500){
    return (25)
  }
   else {
    return ('cannot travel that far')
  }
};
