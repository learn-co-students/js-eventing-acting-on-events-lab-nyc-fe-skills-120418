//Event Listener
// 1 FInd the thing to do the Event on 
// we actually dont need an element (can skip 1, document will get event listener)
//2 write the Function that will happen when we do the thing

const moveDodgerLeft = () => {
  //get the dodger 
  const dodger = document.getElementById('dodger')
  //change the layout/position of dodger - need some css changes
  const currentLeft = dodger.style.left //'180px'
  let currentLeftNumber = currentLeft.replace('px', '')//'180'
  currentLeftNumber = parseInt(currentLeftNumber, 10)//180
  if (currentLeftNumber >0 ) {
  dodger.style.left = currentLeftNumber - 5 + 'px' //'179px'
  }
}

const moveDodgerRight = () => {
  const dodger = document.getElementById('dodger')
  //change the layout/position of dodger - need some css changes
  const currentRight = dodger.style.left //'180px'
  let currentRightNumber = currentRight.replace('px', '')//'180'
  currentRightNumber = parseInt(currentRightNumber, 10)//180//
  if (currentRightNumber <360 ){
  dodger.style.left = currentRightNumber + 5 + 'px' //'181px'
  }
}

//dgoing to figure out do we move dodger left or move dodger right

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37){
    moveDodgerLeft()
  } if (event.keyCode === 39){
    moveDodgerRight()
  }
}

//3 add event listener

document.addEventListener('keydown', moveDodgerHelper)