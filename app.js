

var idArray = document.getElementsByClassName("squares");

for (var i = 0; i < idArray.length; i++) {
  idArray[i].addEventListener("click", changeColor);
}

function changeColor() {
  var square = document.getElementById(this.id);
  if (square.style.backgroundColor === brush.style.backgroundColor) {
    square.style.backgroundColor = "white";
  } else {
  square.style.backgroundColor = brush.style.backgroundColor;
}
}

//**************************** Brush color ************************************
//Add an event listener to these `div` tags so when clicked the brush color is saved.
var red = document.getElementById("rot");
var blue = document.getElementById("blau");
var yellow = document.getElementById("gelb");
var green = document.getElementById("gruen");
var orange = document.getElementById("orange");
var purple = document.getElementById("lila");
var pink = document.getElementById("rosa");
var brown = document.getElementById("braun");
var black = document.getElementById("schwarz");
var white = document.getElementById("weiss");
var grey = document.getElementById("grau");
var brush = document.getElementById("brush");

red.addEventListener("click", saveColor);
blue.addEventListener("click", saveColor);
yellow.addEventListener("click", saveColor);
green.addEventListener("click", saveColor);
orange.addEventListener("click", saveColor);
purple.addEventListener("click", saveColor);
pink.addEventListener("click", saveColor);
brown.addEventListener("click", saveColor);
black.addEventListener("click", saveColor);
white.addEventListener("click", saveColor);
grey.addEventListener("click", saveColor);

function saveColor(event) {
  switch(event.target.id) {
    case "rot":
      brush.style.backgroundColor = "red";
      break;
    case "blau":
      brush.style.backgroundColor = "blue";
      break;
    case "gelb":
      brush.style.backgroundColor = "yellow";
      break;
    case "gruen":
      brush.style.backgroundColor = "green";
      break;
    case "orange":
      brush.style.backgroundColor = "orange";
      break;
    case "lila":
      brush.style.backgroundColor = "purple";
      break;
    case "rosa":
      brush.style.backgroundColor = "pink";
      break;
    case "braun":
      brush.style.backgroundColor = "brown";
      break;
    case "schwarz":
      brush.style.backgroundColor = "black";
      break;
    case "weiss":
      brush.style.backgroundColor = "white";
      break;
    case "grau":
      brush.style.backgroundColor = "grey";
      break;
  }
}
