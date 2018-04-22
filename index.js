// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42);
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs((block1 - block2) * 264)
}
function calculatesFarePrice(start, destination) {
 let feet = distanceTravelledInFeet(start, destination)
 if (feet > 2500) {
   return 'cannot travel that far'
 }
 if (feet > 2000) {
   return 25
 }
 else if (feet > 400) {
   return (feet - 400) * 0.02
 }
 else {
   return 0
 }
}
