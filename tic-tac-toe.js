// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn ="player1"
var buttonClicked = 0

function makeshape1(){
if (buttonClicked == 0) {
  buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",55)
  circle.setAttribute("cy",45)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape2(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",155)
  circle.setAttribute("cy",45)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape3(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",255)
  circle.setAttribute("cy",45)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape4(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",55)
  circle.setAttribute("cy",145)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape5(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",155)
  circle.setAttribute("cy",145)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape6(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",255)
  circle.setAttribute("cy",145)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape7(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",55)
  circle.setAttribute("cy",245)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape8(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",155)
  circle.setAttribute("cy",245)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
function makeshape9(){
  if (buttonClicked == 0) {
    buttonClicked = 1
  var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",255)
  circle.setAttribute("cy",245)
  circle.setAttribute("r",45)
  if(turn =="player1"){
  circle.setAttribute("fill","yellow")
  turn = "player2"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}else{
  if(turn=="player2")
  circle.setAttribute("fill","blue")
  turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
    }
  }
}
