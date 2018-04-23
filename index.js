// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  return Math.abs(42 - number)
}

function distanceFromHqInFeet(number) {
  return distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let number = distanceTravelledInFeet(start, end)
  let answer = 0
  switch (true) {
    case number < 400:
      break
    case number >= 400 && number < 2000:
      answer = (number - 400) * 2 / 100
      break
    case number >= 2000 && number <= 2500:
      answer = 25
      break
    default:
      answer = "cannot travel that far"
  }
  return answer
}
