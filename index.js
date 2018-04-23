// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42
  } else {
    return 42 - street
  }
}

function distanceFromHqInFeet(street) {
  return street >= 42 ? (distanceFromHqInBlocks(street)) * 264 : (distanceFromHqInBlocks(street)) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start - end >= 0) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) > 2500) {
    return 'cannot travel that far'
  } else if (distanceTravelledInFeet(start, end) > 2000){
    return 25
  } else if (distanceTravelledInFeet(start, end) > 400) {
    return (distanceTravelledInFeet(start, end) - 400) * 0.02
  } else {
    return 0
  }
}
