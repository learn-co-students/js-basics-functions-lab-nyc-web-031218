// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264

}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(finish - start) * 264
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)

  if (distance > 2500) {
    return "cannot travel that far"
  } else if (distance <= 2500 && distance > 2000) {
    return 25
  } else if (distance > 400){
    return (distance - 400) * 0.02
  } else {
    return 0
  }

}
