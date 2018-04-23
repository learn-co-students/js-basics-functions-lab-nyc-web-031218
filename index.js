// Code your solution in this file!
function distanceTravelledInFeet(num1,num2) {
 return Math.abs(((num2-num1)*264));
};


function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num)
};

function distanceFromHqInFeet(num)  {
  return distanceFromHqInBlocks(num)*264;
};

function distanceTravelledInFeet(num1,num2) {
 return Math.abs(((num2-num1)*264));
};


function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start,destination) < 400) {
    return 0
  }else if ((distanceTravelledInFeet(start,destination) > 2000) && (distanceTravelledInFeet(start,destination) < 2500)) {
    return 25
  }else if ((distanceTravelledInFeet(start,destination) > 400) && (distanceTravelledInFeet(start,destination)< 2000)) {
    return (distanceTravelledInFeet(start,destination) - 400) * 0.02
  }else{
    return `cannot travel that far`
  };
};
