var i, j = 0;
var p, g = 0;
var x, y = 0;

var rand = 0;
var random = 0;
var seconds2 = 5;
var walkable = false;
var gameRuns = false;
var fClickable = true;
var myColor = false;
var qClick = true;
var a = 10;
var round2Start = false;
var seconds = 60;
var aicounter = 5;
var plcounter = 5;
var countDown = 50;

var interval;
var aiInterval;
var gStart;
// var l, r, d, u = 0;

var myscore = 0;
var aiscore = 0;
var finish = false;
var xpress = false;

var sac;
var pl;
var mov;
var pMov;
var superP;
document.addEventListener('keydown', press);


function setup() { //initialize everything

  fillFunctionButtons();
  fillStatusText();
  fillMatrix();
  draw();
  setStatusText("Beat the AI for second round");


}

function fillMatrix() {
  var matrix = document.getElementById("grid");
  for (i = 0; i < 10; i++) {`    `
    var newRow = createRow("justify-content-md-center");
    for (j = 0; j < 15; j++) {
      newRow.appendChild(createDefaultButton(i, j));
    }
    matrix.appendChild(newRow);
  }
}
function showInstruction(){
  setStatusText("The goal is to obtain the most territory by coloring the most blocks.(My version of (Splatoon). One block is score of 1, and each block is counted at a rate of 0.0005 sec How to Play: Use WASD to move, Press Start Game to start the game. Click Q to go to first minigame, click f to select the game and start game.");
}

function start() { //STARTING THE GAME SETTING PLAYER POS
    i=4;
    for(j = 0; j < 15; j++){
      setBlank(i, j, "white");
    }
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
function countDownToSuperPower(){
  if(countDown != 0){
    countDown--;
    if(countDown == 0){
        window.alert("looks like you need some help to beat the AI, ill give you a cheat. Press X!!!");

    }
  }else {
    clearInterval(superP);

  }
}

function round2(){
  finish = false;
  round2Start = true;
  p = 9;
  g = 0;
  setPrincessPos(p, g, "princess");
  pMov = setInterval(princessMov, 100);
  window.alert("round 2 starts!!! Facing two ai");
  uperP = setInterval(countDownToSuperPower, 1000);

  interval = setInterval(round2counter, 1000);

  callMovement();
  var sac = setInterval(showAiScore, 50);
  var pl = setInterval(showPlayerScore, 50);

}

function reDrawMatrix(){
  walkable = true;
  fClickable = false;
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

function setPrincess(){
  setPrincessPos(4, 14, "peach");
  
}

function moveRight(){
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

function checkPosition(){
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

function showAiScore(){
  if(seconds != 0){
    checkPurple();
    document.getElementById("p4").innerHTML = aiscore;
}else{
  clearInterval(sac);
}
  
}

function showPlayerScore(){
  if(seconds != 0){
    checkColor();
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
      aiBowserMoveLeft();

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
function moveAi(){
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

function movement(){
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
 
   mov = setInterval(movement, 300);

    
  
}
function fClick(){
  
  if(i == 4 && j == 5 ){
    startMiniGame();
}
  
}

function setWalkable(){
    walkable = true;
  
}

function getRandomImage() {
  //you might want to change this to get more Images

  return "skyblue"; 
}
function randomM(){
  random = Math.floor(Math.random()* 4) + 1;

  return random;
}

function changeImage(){
  if(i == 4 && j == 1){
    
    setRandomImage(i, j, getRandomImage());
  }
  else if (i == 4 && j == 4){
    setRandomImage(i, j, getRandomImage());
  }
    else if (i == 4 && j == 7){
    setRandomImage(i, j, getRandomImage());
  }
}

function checkAiPos(){
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

function checkPrincessPos(){
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

function aiBowserMoveLeft(){
 
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

function setBowser(){
  x = 0;
  y = 14;
  setBowserPos(x, y, "bowser");
}
function setPeach(){
  p = 9;
  g = 0;
  setButtonImage(p, g, "princess");
}

function checkColor(){
 
  for(n = 0; n< 10; n++){
    for(m = 0; m< 15; m++){
      if(getButtonImage(n, m) == "skyblue"){
        myscore = myscore + 1;
        }
      } 
    }
  
}

function checkPurple(){

  for(n = 0; n< 10; n++){
    for(m = 0; m< 15; m++){
      if(getButtonImage(n, m) == "purple"){
        aiscore = aiscore + 1;
        }
      } 
    }    
  

}

function counter(){
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

function round2counter(){
  var counts = document.getElementById('clockCounter');
  if(seconds > -1){
    counts.innerHTML = seconds--;
  }else{
    clearInterval(interval);
    clearInterval(pMov);
    clearInterval(superP);
    reset();
    window.alert("Game Finish Thank You for playing my Game");

  }

}



function checkScores(){
  checkColor();  //upate myscore
  checkPurple();  //update aiscore
  window.alert("Your Score is: " + myscore + "computer Score is: " + aiscore);
  if(aiscore > myscore ){
    window.alert("You lost, refresh the page to try again.");
  }else {
    window.alert("You win");
  }
}
 
function reset(){
  finish = true;
  setWalkable();
  reDrawMatrix();
  checkScores();
  seconds = 60;
  clearInterval(mov);
}

function princessMov(){
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
function superPower(){
  for(v = 0; v < 10; v++){
    for(h = 0; h < 8; h ++){
      setButtonImage(v, h, "skyblue")
    }
  }
  xpress = true;
}
function aiPrincessMoveLeft(){
 
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
function setButtonImage(i, j, Image) {
  var button = document.getElementById("img_" + i + "_" + j);
  button.setAttribute("src", "images/" + Image + ".jpg");
  button.setAttribute("alt", Image);
}

function setButtonText(i, j, text) {
  var button = document.getElementById("text_" + i + "_" + j);
  button.innerHTML = text;
}

function getButtonImage(i, j) {
  var img = document.getElementById("img_" + i + "_" + j);
  return img.getAttribute("alt");
}

function getButtonText(i, j) {
  var text = document.getElementById("text_" + i + "_" + j);
  return text.innerHTML;
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
function getInfo(){
  return infoTextRow.id;
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

function fillProgressBar() {
  var headDiv = document.getElementById("head");
  var progessRow = createRow("progress");
  progress = 0;
  var bar = createProgressBar("bar", "bg-success", progress);
  progessRow.appendChild(bar);
  headDiv.appendChild(progessRow);
}
function logAllHistory() {
  if (clickHistory.length == 0) {
    console.log("History is empty");
    return;
  }
  for (i = 0; i < clickHistory.length; i++) {
    console.log(clickHistory[i]);
  }
}

function logLastClicked() {
  if (clickHistory.length == 0) {
    console.log("History is empty");
  } else {
    console.log(clickHistory[clickHistory.length - 1]);
  }
}
function fireWorks(){
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
function fireWorks2(){
  for(i = 0; i< 10; i++){
    for(j = 0; j< 15; j++){
      setInterval(setButtonImage(i, j, "heart"), 50);
    }
  }
  
}

function createButton(buttonText, styleClass, functionName) {
  var button = document.createElement("button");
  button.className = styleClass;
  button.appendChild(document.createTextNode(buttonText));
  button.setAttribute("onclick", functionName);
  return button;
}

function createProgressBar(bar_id, Image, value) {
  var bar = document.createElement("div");
  bar.id = bar_id;
  bar.className = "progress-bar " + Image;
  bar.setAttribute("style", "width: " + value + "%");
  return bar;
}

function setProgressBar(bar_id, Image, value) {
  var bar = document.getElementById(bar_id);
  bar.className = "progress-bar " + Image;
  bar.setAttribute("style", "width: " + value + "%");
  bar.innerHTML = value + "%";
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

