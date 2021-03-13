
let isError = true;

function parseStrToNumber(str) {
    return parseInt(str)
}

function pairNumber({itemOne, itemTwo, itemThree}) {
    if ((itemOne + itemTwo + itemThree) % 2 === 0)
        return true
    return false
}

function lastDigitIsGreater({itemOne, itemTwo, itemThree}) {
    if (itemTwo >= itemThree || itemOne >= itemThree)
        return false
    return true
}

function validateChildren({index, itemOne, itemTwo, itemThree }) {
  if (isError)
    return;

  switch(index) {
    case 0:
      if (!pairNumber({itemOne, itemTwo, itemThree}))
        return isError = true

      if (!lastDigitIsGreater({itemOne, itemTwo, itemThree}))
        return isError = true

      break
    case 1:
      if (pairNumber({itemOne, itemTwo, itemThree}))
        return isError = true

      if (!lastDigitIsGreater({itemOne, itemTwo, itemThree}))
        return isError = true

      break
    case 2:
     if (!lastDigitIsGreater({itemOne, itemTwo, itemThree}))
        return isError = true
      break
    default:
      break
  }
}

function validateItems(list) {
    for (let i = 0; i < list.length; i++) {
      let itemArr = list[i].split("")

      let itemOne = parseStrToNumber(itemArr[0])    
      let itemTwo = parseStrToNumber(itemArr[1])    
      let itemThree = parseStrToNumber(itemArr[2])    
      
      if (!isError) {
        validateChildren({
          index: i,
          itemOne,
          itemTwo,
          itemThree,
        })
      }
    }
}

function SerialNumber(str) {
  isError = false
  let strArr = str.split(".")

  if (strArr.length > 3)
    return false
  
  let isValid = strArr.find(item => item.length === 3)

  if (!isValid)
    return false
  

  validateItems(strArr)

  if (isError)
    return false
  return true
}

console.log(SerialNumber("11.124.667"),'11.124.667') // false
console.log(SerialNumber("114.568.112"),'114.568.112') // true