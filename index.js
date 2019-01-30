// 1 identify the thing we want to do something

// no element needed if its global. so just use document
// its the document

//2 write the function that will happen

const moveDodgerLeft = () => {
  //get the dodger 
  const dodger = document.getElementById("dodger")
  //change the layout position of dodger so we need some CSS 
  const currentLeft = dodger.style.left // "180px"
  let currentLeftNumber = currentLeft.replace("px","") // "180"
  currentLeftNumber = parseInt(currentLeftNumber, 10) // 180
  if (currentLeftNumber > 0) {
  dodger.style.left = currentLeftNumber - 5 + "px" // "179px"
  }
}
  
const moveDodgerRight = () => {
  //get the dodger 
  const dodger = document.getElementById("dodger")
  //change the layout position of dodger so we need some CSS 
  const currentRight = dodger.style.left // "180px"
  let currentRightNumber = currentRight.replace("px","") // "180"
  currentRightNumber = parseInt(currentRightNumber, 10) // 180
  if (currentRightNumber < 360) {
  dodger.style.left = currentRightNumber + 5 + "px" // "181px"
  }
  
  
}

const moveDodgerHelper = (event) => {
  // going to see if we see if we moveDodgerHelperleft or moveDodgerHelperRight
  if (event.keyCode ===37) {
    moveDodgerLeft()
  }
  if (event.keyCode ===39) {
    moveDodgerRight()
  }
}

//3 add the listener
document.addEventListener("keydown", moveDodgerHelper)