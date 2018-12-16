var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.getElementsByClassName('mode-box__btn');

init();

function init(){
  // Mode Button Listeners
  setUpModeButtons();
  setUpSquares();
  reset();
}

function reset(){
  // Generate new colors
  colors = generateRandomColors(numSquares);
  // Pick new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares on the page
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  // Change button text back to reset
  resetButton.textContent = 'New Colors';
  // Change h1 background color back to default
  h1.style.backgroundColor = 'rgb(14, 208, 108)';
  // Winning or lose message dissapears
  messageDisplay.textContent = '';
}

function setUpModeButtons(){
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy Mode' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(var i=0; i<squares.length; i++){
    // Add colors tosquares
    // Add event listeners to colors
    squares[i].addEventListener('click', function(){
    // Grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // Compare to the winning number
    if(clickedColor === pickedColor){
        // If user got it right
        messageDisplay.textContent = 'Correct';
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?';
      } else {
        // If user got made wrong decision
        messageDisplay.textContent = 'Try Again';
        this.style.backgroundColor = '#fafafa';
      }
    });
  }
}

// reset button action
resetButton.addEventListener('click', function(){
  reset();
});

// Change square colors to the winning color
function changeColor(color){
  // Loop through all squares
  for(var i=0; i<squares.length; i++){
  // Change each color to match given color
  squares[i].style.backgroundColor = color;
  }
}

// Creating random index of colors array
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generating array of random colors
function generateRandomColors(colorsNumber){
  // make an array
  var arr = []
  // repeat num times
  for(var i=0;i<colorsNumber;i++){
    // Get random color
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

// Random color generator
function randomColor(){
  // Pick "R" red from 0 - 255
  var r = Math.floor(Math.random()*256);
  // Pick "G" green from 0 - 255
  var g = Math.floor(Math.random()*256);
  // Pick "B" blue from 0 - 255
  var b = Math.floor(Math.random()*256);
  // return random color
  return `rgb(${r}, ${g}, ${b})`;
}