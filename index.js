// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
        hq = 42;
      return Math.abs(distance-= hq);
}

function distanceFromHqInFeet(distance){

    return distanceFromHqInBlocks(distance) * 264;
}


function distanceTravelledInFeet(pointA, pointB, distance) {

     distance = pointA - pointB;
      return Math.abs(distance) * 264;
}

function calculatesFarePrice(start,destination,distance) {
        let distanceSample = 400,
            charge = 0.02,
          d = distanceTravelledInFeet(start, destination, distance);
          farePrice =  (d - distanceSample) * charge;
          if (d > 2500) {
            return 'cannot travel that far';
          }  else if (d > 2000) {
            return 25;
          } else if (d > 400 && d < 2000) {
            return farePrice;
          } else if (distanceSample) {
            return 0;
          } 



    }
