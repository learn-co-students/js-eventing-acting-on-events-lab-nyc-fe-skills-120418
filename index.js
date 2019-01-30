const moveDodgerLeft = () => {
  const dodger = document.getElementById ('dodger')
  const currentLeft = dodger.style.left
  let currentLeftNumber = currentLeft.replace('px', '')
  currentLeftNumber = parseInt(currentLeftNumber, 10)
  if (currentLeftNumber > 0) {
  dodger.style.left = currentLeftNumber - 5 + 'px'
  }
}

const moveDodgerRight = () => {
  const dodger = document.getElementById ('dodger')
  const currentRight = dodger.style.left
  let currentRightNumber = currentRight.replace('px', '')
  currentRightNumber = parseInt(currentRightNumber, 10)
  if (currentRightNumber < 360) {
  dodger.style.left = currentRightNumber + 5 + 'px'
  }
}

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } if (event.keyCode === 39){
    moveDodgerRight()
  }
}

document.addEventListener('keydown', moveDodgerHelper)