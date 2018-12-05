var i, j = 0;// player posistion i and j
var p, g = 0;// ai position p g
var x, y = 0;// ai pos x y

var random = 0;

var walkable = false;
var gameRuns = false;
var fClickable = true;
var myColor = false;
var qClick = true;

var round2Start = false;
var seconds = 30;

var countDown = 25;

var interval;
var aiInterval;

var myscore = 0;
var aiscore = 0;
var finish = false;
var xpress = false;

var sac;
var pl;
var mov;
var pMov;
var superP;

document.addEventListener('keydown', press);// key down event listner 


function setup() { //initialize everything

  fillFunctionButtons();// 
  fillStatusText();
  fillMatrix();
  draw();// drawing the board
  setStatusText("Beat the AI for second round");


}

function fillMatrix() {// fill the matrix
  var matrix = document.getElementById("grid");
  for (i = 0; i < 10; i++) {`    `
    var newRow = createRow("justify-content-md-center");
    for (j = 0; j < 15; j++) {
      newRow.appendChild(createDefaultButton(i, j));
    }
    matrix.appendChild(newRow);
  }
}
function showInstruction(){// show the instruction when click INSTRUCTION Button
  setStatusText("The goal is to obtain the most territory by coloring the most blocks.(My version of (Splatoon). One block is score of 1, and each block is counted at a rate of 0.0005 sec How to Play: Use WASD to move, Press Start Game to start the game. Click Q to go to first minigame, click f to select the game and start game.");
}

function start() { //STARTING THE GAME SETTING PLAYER POS
    i=4;
    for(j = 0; j < 15; j++){
      setBlank(i, j, "white");
    }//redraw the board with white
  draw();
  
  i = 4;
  j = 0;
  setPlayerPos(i,j, "mario");
  setPrincess();
  setKey(4, 9, "key");
  setKey(4, 5, "key");
  walkable = false;
  myColor = false;
  fClickable = true;
    
}

function startMiniGame(){//STARTING THE GAME SETTING PLAYER POS
  setWalkable();
  reDrawMatrix();

  interval = setInterval(counter, 1000);

  callMovement();
  sac = setInterval(showAiScore, 50);
  pl = setInterval(showPlayerScore, 50);

}
function countDownToSuperPower(){// superpower count down
  if(countDown != 0){
    countDown--;
    if(countDown == 0){
    window.alert("looks like you need some help to beat the AI, ill give you a cheat. Press X!!!");

    }
  }else {
    clearInterval(superP);

  }
}

function round2(){// round 2 function setting the grid for round 2
  finish = false;
  round2Start = true;
  p = 9;
  g = 0;
  setPrincessPos(p, g, "princess");
  pMov = setInterval(princessMov, 100);// interval for princess movement
  window.alert("round 2 starts!!! Facing two ai");
  uperP = setInterval(countDownToSuperPower, 1000);// interval for super power counut down

  interval = setInterval(round2counter, 1000);// interval for round2 timer

  callMovement();// calling the ai movement
  var sac = setInterval(showAiScore, 50);//  ai score
  var pl = setInterval(showPlayerScore, 50);// player score 

}

function reDrawMatrix(){// redrawing the matrix
  walkable = true;// setting walkable so that player cant walk in the first face before the game starts, when selecting the minigames
  fClickable = false;// setting if f is clickable, f is  to start the game when position is on the first key   
  myColor = true;
  for(i = 0; i < 10; i++){
    for(j = 0; j < 15; j++){
      setBlank(i, j, "white");
    }
  }
  i = 0;
  j = 0;
  setPlayerPos(i, j, "mario");
  setBowser();

}
function draw(){
  for(i = 0; i < 4; i++){
    for(j = 0; j < 15; j++){
      setBlank(i, j, "gray");
    }
  }
  for(i = 5; i< 10; i++){
    for(j = 0; j< 15; j++){
      setBlank(i, j, "gray");
    }
  }
}

function setPrincess(){// peach loc
  setPrincessPos(4, 14, "peach");
  
}

function moveRight(){// movement
if(myColor == true)
{
  setBlank(i, j, getRandomImage());
}
else 
{
  setBlank(i, j, "white");
}
  Image = "mario";
  j++;
  checkPosition();
  setPlayerPos(i,j, Image);
}
function moveLeft(){
  if(myColor == true)
{
  setBlank(i, j, getRandomImage());
}
else 
{
  setBlank(i, j, "white");
  if(getButtonImage(i, j) == "princess"){
    j--;
    setPlayerPos(i, j, "mario");
  }
}
  Image = "mario";
  j--;
  checkPosition();
  setPlayerPos(i,j, Image);
  
}

function moveUp(){
  
if(myColor == true)
{
  setBlank(i, j, getRandomImage());
}
else 
{
  setBlank(i, j, "white");
}
if(walkable == true)
{
  Image = "mario";
  i--;
  checkPosition();
  setPlayerPos(i,j, Image);
  
  }
}

function moveDown(){
if(myColor == true)
  {
    setBlank(i, j, getRandomImage());
  }
  else 
  {
  setBlank(i, j, "white");
  }

 if(walkable == true)
  { 

    Image = "mario";
    i++;
    checkPosition();
    setPlayerPos(i,j, "mario");
  
  }
 
}

function checkPosition(){// checking and maks sure character dont go out of the border
    if(i <= -1){
      i++; 
      setPlayerPos(i, j, "mario");
    }

    else if(i >= 10){
      i--;
      setPlayerPos(i, j, "mario");
    }
    else if(j >= 15 ){
      j--;
      setPlayerPos(i, j, "mario");
    }

    else if(j< 0 ){
      j++;
      setPlayerPos(i, j, "mario");
    }
   
}

function showAiScore(){// ai score
  if(seconds != 0){
    myAiScores();
    document.getElementById("p4").innerHTML = aiscore;
}else{
  clearInterval(sac);
}
  
}

function showPlayerScore(){// player score
  if(seconds != 0){
    myPlayerScores();
    document.getElementById("p3").innerHTML = myscore
  }else{
    clearInterval(pl);
  }
 

}

function press(e){//listening for key press  
   if ( e.keyCode === 87 /* w */){
     
     if(walkable==true){
      aiBowserMoveUp();
      // aiPrincessMoveRight();
      moveAi();
      moveUp();
     
   }
    
  }
  else if (e.keyCode === 68 /* d */){
      
    if(walkable == true){
      aiBowserMoveLeft()

      moveAi();
      moveRight();
      
    }
     
  }
  else if ( e.keyCode === 83 /* s */){
     
     if(walkable == true){
      aiBowserMoveDown();
      moveAi();
      moveDown();
      
    }    
  }
  else if ( e.keyCode === 65 /* a */){
      
      if(walkable == true){
       aiBowserMoveRight();
       moveAi();
       moveLeft();
       
    }     
  }
    else if(e.keyCode === 88 /** x */){
      if(countDown == 0){
       
       if(xpress == false){
        superPower();
       }
    }
  }
  else if( e.keyCode === 70 /** f */){
    if(fClickable == true){
      fClick();
      
    }
  }
  else if( e.keyCode === 81 /** q */){
      if(qClick == true){
        setBlank(i, j, "white");
        i = 4;
        j = 5;
        setPlayerPos(i, j, "mario");
    }
    qClick = false;
  }
 
}
function moveAi(){// additional ai movement
    if(randomM() == 1){

      aiBowserMoveRight();
    }
    else if(randomM() == 2){
      aiBowserMoveLeft();
    }
    else if (randomM() == 3){
      aiBowserMoveDown();
    }
    else if(randomM() == 4){
      aiBowserMoveUp();
    }

}

function movement(){// movement for bowser
    if(finish == false){
  
          if(randomM() == 1){

            aiBowserMoveRight();
          }
          else if(randomM() == 2){
            aiBowserMoveLeft();
          }
          else if (randomM() == 3){
            aiBowserMoveDown();
          }
          else if(randomM() == 4){
            aiBowserMoveUp();
            }
    }
    
}
function callMovement(){
 
   mov = setInterval(movement, 800);

    
  
}
function fClick(){
  
  if(i == 4 && j == 5 ){
    startMiniGame();
}
  
}

function setWalkable(){
    walkable = true;
  
}

function getRandomImage() {// random images not
 

  return "skyblue"; 
}
function randomM(){
  random = Math.floor(Math.random()* 4) + 1;

  return random;
}


function checkAiPos(){//check ai pos
    if(x <= -1){
      x++; 
      setBowserPos(x, y, "bowser");
    
    }

    else if(x >= 10){
      x--;
      setBowserPos(x, y, "bowser");
    }

    else if(y >= 15 ){
      y--;
      setBowserPos(x, y, "bowser");
    }

    else if(y < 0 ){
      y++;
      setBowserPos(x, y, "bowser");
    }
}

function checkPrincessPos(){// check princess pos, redundant so just to be clear
    if(p <= -1){
      p++; 
      setPrincessPos(p, g, "princess");
    
    }

    else if(p >= 10){
      p--;
      setPrincessPos(p, g, "princess");
    }

    else if(g >= 15 ){
      g--;
      setPrincessPos(p, g, "princess");
    }

    else if(g < 0 ){
      g++;
      setPrincessPos(p, g, "princess");
    }
}

function aiBowserMoveLeft(){// ai movement
 
  setBlank(x, y, "purple");
  y--;
  checkAiPos();
  setBowserPos(x, y, "bowser");
  
}
function aiBowserMoveRight(){
  setBlank(x, y, "purple");
  y++;
  checkAiPos();
  setBowserPos(x, y, "bowser");
}
function aiBowserMoveUp(){
  setBlank(x, y, "purple");
  x--;
  checkAiPos();
  setBowserPos(x, y, "bowser");
  
}
function aiBowserMoveDown(){
  setBlank(x, y, "purple");
  x++;
  checkAiPos();
  setBowserPos(x, y, "bowser");
  
}

function setBowser(){// bowser pos
  x = 0;
  y = 14;
  setBowserPos(x, y, "bowser");
}
function setPeach(){// peach location
  p = 9;
  g = 0;
  setButtonImage(p, g, "princess");
}


function myPlayerScores(){// player socore
 
  for(n = 0; n< 10; n++){
    for(m = 0; m< 15; m++){
      if(getButtonImage(n, m) == "skyblue"){
        myscore = myscore + 1;
        }
      } 
    }
  
}

function myAiScores(){// ai score

  for(n = 0; n< 10; n++){
    for(m = 0; m< 15; m++){
      if(getButtonImage(n, m) == "purple"){
        aiscore = aiscore + 1;
        }
      } 
    }    
}

function counter(){//clock counter function

  var counts = document.getElementById('clockCounter');
  if(seconds > -1){
    counts.innerHTML = seconds--;
  }else{
    clearInterval(interval);
    reset();
    if(myscore > aiscore) {
      window.alert("round 2 startes when you click ok");
      myscore = 0; //reset score
      aiscore = 0; 
      round2();
    }

  }

}

function round2counter(){// round 2 clock counter function
  var counts = document.getElementById('clockCounter');
  if(seconds > -1){
    counts.innerHTML = seconds--;
  }else{
    clearInterval(interval);
    clearInterval(pMov);
    clearInterval(superP);
    reset();
    window.alert("Game Finish Thank You for playing my Game. Game finished!!!");
    
  }

}

function checkScores(){// checks the scores of ai and player 
  myPlayerScores();  //upate myscore
  myAiScores();  //update aiscore
  window.alert("Your Score is: " + myscore + "computer Score is: " + aiscore);
  if(aiscore > myscore ){
    window.alert("You lost, refresh the page to try again.");
  }else {
    window.alert("You win");
  }
}
 
function reset(){// reseting the board
  finish = true;
  setWalkable();
  reDrawMatrix();
  checkScores();
  seconds = 30;
  clearInterval(mov);
}
 
function princessMov(){// princess movement
    if(round2Start == true){

          if(randomM() == 1){
            aiPrincessMoveUp();
            
          }
          else if(randomM() == 2){
          aiPrincessMoveDown();
          }
          else if (randomM() == 3){
           aiPrincessMoveLeft();
          }
          else if(randomM() == 4){
            aiPrincessMoveRight();
          }
    }   
}

function superPower(){// super power
  for(v = 0; v < 10; v++){
    for(h = 0; h < 8; h ++){
      setButtonImage(v, h, "skyblue")
    }
  }
  xpress = true;
}

function aiPrincessMoveLeft(){ // ai princess movement 
 
  setBlank(p, g, "purple");
  g--;
  checkPrincessPos();
  setPrincessPos(p, g, "princess");
  
}
function aiPrincessMoveRight(){
  setBlank(p, g, "purple");
  g++;
  checkPrincessPos();
  setPrincessPos(p, g, "princess");
}
function aiPrincessMoveUp(){
  setBlank(p, g, "purple");
  p--;
checkPrincessPos();
  setPrincessPos(p, g, "princess");
  
}
function aiPrincessMoveDown(){
  setBlank(p, g, "purple");
  p++;
  checkPrincessPos();
  setPrincessPos(p, g, "princess");
  
}
function setButtonImage(i, j, Image) {// button image
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
}

function getButtonImage(i, j) {// get button images
  var img = document.getElementById("img_" + i + "_" + j);
  return img.getAttribute("alt");
}

function createRow(className) {
  var rowDiv = document.createElement("div");
  if (className == null) {
    rowDiv.className = "row";
  } else {
    rowDiv.className = "row " + className;
  }
  return rowDiv;
}

function fillStatusText() {
  var headDiv = document.getElementById("head");
  var infoTextRow = createRow("ml-3");
  infoTextRow.id = "infoText"; //set id of this element so we can change it later
  headDiv.appendChild(infoTextRow);
}

function setStatusText(text, style) {
  var textDiv = document.getElementById("infoText");
  var newText = document.createElement("p");
  if (style != null) {
    newText.className = style;
  }
  newText.appendChild(document.createTextNode(text));
  textDiv.innerHTML = "";
  textDiv.appendChild(newText);
}

function fireWorks(){// future idea to be implementd
  gameRuns = false;
  myColor = false;
  finish = true;
  for(n = 0; n< 10; n++){
    for(m = 0; m< 15; m++){
        setButtonImage(n, m, "white");
      } 
    }    
  setTimeout(fireWorks2, 1000);
}


function createButton(buttonText, styleClass, functionName) {
  var button = document.createElement("button");
  button.className = styleClass;
  button.appendChild(document.createTextNode(buttonText));
  button.setAttribute("onclick", functionName);
  return button;
}

function fillFunctionButtons() {
  var headDiv = document.getElementById("head");
  var funcBtnRow = createRow(); 
  funcBtnRow.appendChild(createButton("Start game", "btn btn-dark m-3", "start()"));
  funcBtnRow.appendChild(createButton("Instruction", "btn btn-dark m-3", "showInstruction()"));
  funcBtnRow.appendChild(createButton("Fireworks", "btn btn-light m-3", "fireWorks()"));
  headDiv.appendChild(funcBtnRow);
}

function createDefaultButton() {
  var button = document.createElement("div");
  button.className = "thumbnail";
  //the Image part
  var img = document.createElement("img");
  img.id = "img_" + i + "_" + j;
  img.setAttribute("src", "images/white.jpg");
  img.setAttribute("alt", "white");
  // img.setAttribute("class", "rounded-circle");
  img.setAttribute("width", "50");
  img.setAttribute("height", "50");

  //the text part
  var text = document.createElement("label");
  text.setAttribute("class", "caption unselectable");
  text.id = "text_" + i + "_" + j;

  button.appendChild(img);
  button.appendChild(text);
  return button;
}

function setPlayerPos(i, j, Image){
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
   
}
function setKey(i, j, Image){
    var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
}
function setPrincessPos(i, j, Image){
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
   
}
function setBowserPos(i, j, Image){
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
}
function setBlank(i, j, Image){
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);

}

function setRandomColor(i, j, Image){
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
}

