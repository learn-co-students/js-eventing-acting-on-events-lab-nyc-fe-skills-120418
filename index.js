// 1. Find the getElementById

const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this?
  
  const currentPosition = parseInt(dodger.style.left)
  // currentPosition  -? 180 ('180px' -> 180 from parseInt)
  
  if (currentPosition - 5 >= 0) {
    dodger.style.left = currentPosition - 5 + 'px'  // (175)
   }
   
  }  else if (event.keyCode === 39) {
     const currentPosition = parseInt(dodger.style.left)
  
   if (currentPosition + 5 <= 360) {
    dodger.style.left = currentPosition + 5 + 'px'
}
    
  }
}
function moveDodgerRight() {
  const currentPosition = parseInt(dodger.style.left)
  
   dodger.style.left = currentPosition + 5 + 'px'
}

// 2. Add eventListener

document.addEventListener('keydown', onKeyDown)


