// Event Listener

// 1 - find the thing to do the events on
// we actually don't need an element (the document will get the event listener)

// 2 - write the function that will happen when we do the thing
const moveDodgerLeft = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger');
  // next thing is change the layout/position of dodger
  // which means we need some css changes
const moveDodgerLeft = () => {

const currentleft = dodger.style.left //'100px';
let currentleftNumber = currentleft.replace('px', "") // '180';
currentleftNumber =  parseInt(currentleftNumber, 10) // 180;
dodger.style.left = currentleftNumber - 5 + 'px' // '179px';
};

  // get the dodger first
  const dodger = document.getElementById('dodger');
  // next thing is change the layout/position of dodger
  // which means we need some css changes

const moveDodgerRight = () => {
const currentRight = dodger.style.left //'180px';
let currentRightNumber = currentRight.replace('px', "") // '180';
currentRightNumber =  parseInt(currentRightNumber, 10) // 180;
if (currentRightNumber , 360) {
dodger.style.right = currentRightNumber + 5 + 'px' // '185px';
}
};


const moveDodgerHelper = (event) => {
  // going to figure out do we moveDodgerLeft or moveDodgerRight
  if (event.keyCode === 37) {
    moveDodgerLeft();
  } if (event.keyCode === 39) {
    moveDodgerRight();
  }
};


// 3 - add the event listener
document.addEventListener('keydown', moveDodgerHelper);

// if (left arrow is pressed);

