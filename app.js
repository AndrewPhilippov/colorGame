var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector('#reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');

// Mode logic
easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function(){
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
  }
});


// reset button action
resetButton.addEventListener('click', function(){
  // Generate new colors
  colors = generateRandomColors(numSquares);
  // Pick new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares on the page
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  // Change button text back to reset
  resetButton.textContent = 'New Colors';
  // Change h1 background color back to default
  h1.style.backgroundColor = '#ddd';
});

// Game logic
for(var i=0; i<squares.length; i++){
  // Add colors tosquares
  squares[i].style.backgroundColor = colors[i];
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