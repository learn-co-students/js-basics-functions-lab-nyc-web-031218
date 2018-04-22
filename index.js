// Code your solution in this file!

function distanceFromHqInBlocks(num) {
  diff = 42 - num

  return Math.abs(diff)
}

function distanceFromHqInFeet(block) {
  feet = distanceFromHqInBlocks(block) * 264
  return feet
}



function distanceTravelledInFeet(block1, block2) {
  diff =  Math.abs(block1 - block2)

  return diff * 264
}

function calculatesFarePrice(start, destination) {
  let trip = distanceTravelledInFeet(start, destination)
  let tripCost = 0

  if (trip < 400 ) {
    return tripCost
  }else if (trip >= 400 && trip <=2000) {
    tripCost = (trip - 400) * 0.02
    return tripCost
  }else if (trip > 2000 && trip < 2500) {
    tripCost = 25
  }else{
    return 'cannot travel that far'
  }


  return tripCost
}
