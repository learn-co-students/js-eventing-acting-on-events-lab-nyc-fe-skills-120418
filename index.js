// Event Listener

// 1 - find the thing to do the events on
// we actually don't need an element (the document will get the event listener)

// 2 - write the function that will happen when we do the thing
const moveDodgerLeft = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  // next thing is change the layout/position of dodger
  // which means we need some css changes
  const currentLeft = dodger.style.left // '180px'
  let currentLeftNumber = currentLeft.replace('px', '') // '180'
  currentLeftNumber = parseInt(currentLeftNumber, 10)  // 180
  if (currentLeftNumber > 0) {
    dodger.style.left = currentLeftNumber - 3 + 'px' // '179px'  
  }
}

const moveDodgerRight = () => {
  const dodger = document.getElementById('dodger')
  // next thing is change the layout/position of dodger
  // which means we need some css changes
  const currentRight = dodger.style.left // '180px'
  let currentRightNumber = currentRight.replace('px', '') // '180'
  currentRightNumber = parseInt(currentRightNumber, 10)  // 180
  if (currentRightNumber < 360) {
    dodger.style.left = currentRightNumber + 5 + 'px' // '185px'
  }
}


const moveDodgerHelper = (event) => {
  // going to figure out do we moveDodgerLeft or moveDodgerRight
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } if (event.keyCode === 39) {
    moveDodgerRight()
  }
}


// 3 - add the event listener
document.addEventListener('keydown', moveDodgerHelper)

// if (left arrow is pressed)