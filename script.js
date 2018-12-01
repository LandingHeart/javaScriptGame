var i, j = 0;
var life = 3;
var p, g = 0;
var x, y = 0;

var rand = 0;
var random = 0;

var walkable = false;
var gameRuns = false;
var fClickable = true;
var myColor = false;
var qClick = true;
var a = 10;

var seconds = 5;
var aicounter = 5;
var plcounter = 5;

var interval;
var aiInterval;
var gStart;
var l, r, d, u = 0;

var myscore = 0;
var aiscore = 0;
var finish = false;
document.addEventListener('keydown', press);

function setup() { //initialize everything

  fillFunctionButtons();
  fillStatusText();
  fillMatrix();
  draw();

}

function fillMatrix() {
  var matrix = document.getElementById("grid");
  for (i = 0; i < 10; i++) {
    var newRow = createRow("justify-content-md-center");
    for (j = 0; j < 15; j++) {
      newRow.appendChild(createDefaultButton(i, j));
    }
    matrix.appendChild(newRow);
  }
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

function start2() { //STARTING THE GAME SETTING PLAYER POS
   alerta();

}

function startMiniGame(){
  setWalkable();
  reDrawMatrix();

  interval = setInterval(counter, 1000);
  // var c = setInterval(resetBowserPos, 5000);

  callMovement();
  var sac = setInterval(showAiScore, 50);
  var pl = setInterval(showPlayerScore, 50);

}
function round2(){
  finish = false;
  window.alert("round 2 starts!!! Facing two ai");

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
  var ai = document.getElementById("p4").innerHTML = checkPurple();
}else{
  clearInterval(sac);
}
  
}

function showPlayerScore(){
  if(seconds != 0){
    var pl = document.getElementById("p3").innerHTML = checkColor();
  }else{
    clearInterval(playerScore);
  }
 

}

function press(e){//listening for key press  
   if ( e.keyCode === 87 /* w */){
     
     if(walkable==true){
      aiBowserMoveUp();
      moveAi();
      moveUp();
     
   }
    
  }
  else if ( e.keyCode === 68 /* d */){
      
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
 
   var mov = setInterval(movement, 300);

    
  
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
  
  
  return myscore;
}

function checkPurple(){

  for(n = 0; n< 10; n++){
    for(m = 0; m< 15; m++){
      if(getButtonImage(n, m) == "purple"){
        aiscore = aiscore + 1;
        }
      } 
    }    
  
  return aiscore;
}

function counter(){
  var counts = document.getElementById('clockCounter');
  if(seconds > -1){
    counts.innerHTML = seconds--;
  }else{
    clearInterval(interval);
     reset();
  }

}
function checkScores(){
  var aiscore = checkPurple();
  var playerScore = checkColor();
  window.alert("Your Score is: " + playerScore + "computer Score is: " + aiscore);
  if(aiscore > playerScore ){
    window.alert("You lost");
  }else {
    window.alert("You win");
  }
}
 
function reset(){
  finish = true;
  setWalkable();
  reDrawMatrix();
  checkScores();
  setTimeout(round2, 5000);
  window.alert("round 2 is in 5 senconds");
  
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
  funcBtnRow.appendChild(createButton("Start game", "btn btn-light m-3", "start()"));

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

