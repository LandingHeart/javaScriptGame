// var clickHistory = [];
// var progress;
// var udCount = 0;
// var lrCount = 0;
// var i, j = 0;
// var life = 3;
// var taken = false;
// var key = false;
// var x, y = 0;
// var obtainkey = false;
// var random = 0;
// var num = 0;
// document.addEventListener('keydown',press)

// function setup() { //initialize everything
//   fillFunctionButtons();
//   fillStatusText();
//   fillMatrix();
//   setStatusText("Clean the mess Luigi made");

// }

// function fillFunctionButtons() {
//   var headDiv = document.getElementById("head");
//   var funcBtnRow = createRow(); 
//   funcBtnRow.appendChild(createButton("Start game", "btn btn-light m-3", "start()"));
//   funcBtnRow.appendChild(createButton("Reset", "btn btn-dark m-3", "reset()"));
//   funcBtnRow.appendChild(createButton("fireWorks", "btn btn-dark m-3", "fireWorks()"));
//   headDiv.appendChild(funcBtnRow);
// }

// function fillStatusText() {
//   var headDiv = document.getElementById("head");
//   var infoTextRow = createRow("ml-3");
//   infoTextRow.id = "infoText"; //set id of this element so we can change it later
//   headDiv.appendChild(infoTextRow);
// }
// function getInfo(){
//   return infoTextRow.id;
// }

// function setStatusText(text, style) {
//   var textDiv = document.getElementById("infoText");
//   var newText = document.createElement("p");
//   if (style != null) {
//     newText.className = style;
//   }
//   newText.appendChild(document.createTextNode(text));
//   textDiv.innerHTML = "";
//   textDiv.appendChild(newText);
// }

// function fillProgressBar() {
//   var headDiv = document.getElementById("head");
//   var progessRow = createRow("progress");
//   progress = 0;
//   var bar = createProgressBar("bar", "bg-success", progress);
//   progessRow.appendChild(bar);
//   headDiv.appendChild(progessRow);
// }

// function fillMatrix() {
//   var matrix = document.getElementById("grid");
//   for (i = 0; i < 10; i++) {
//     var newRow = createRow("justify-content-md-center");
//     for (j = 0; j < 10; j++) {
//       newRow.appendChild(createDefaultButton(i, j));
//     }
//     matrix.appendChild(newRow);
//   }
// }

// function start() { //STARTING THE GAME SETTING PLAYER POS

//   for (i = 0; i < 8; i++) {
//     for (j = 0; j < 8; j++) {
//       setButtonColor(i, j, "white");
//       setButtonText(i, j, "");
//     }
//   }
//   i = 0;
//   j = 0;
//   setPlayerPos(i,j, "mario");
//   setStatusText("Fill in the white blanks, mystery box contains clues, step on white blank change color find the correct color", "text-bold" );

  
// }

// function reset(){
// taken = false;
//   for (i = 0; i < 8; i++) {
//     for (j = 0; j < 8; j++) {
//       setButtonColor(i, j, "white");
//       setButtonText(i, j, "");
//     }
//   }
//   i = 7;
//   j = 0;
//   setPlayerPos(i,j, "mario");
//   setStatusText("RESCUE PRINCESS PEACH!!!", "text-bold" );
//   characterPos();
//   drawBlock();
//   boxPos();
//   setObstacles();
  
// }

// //create row
// function createRow(className) {
//   var rowDiv = document.createElement("div");
//   if (className == null) {
//     rowDiv.className = "row";
//   } else {
//     rowDiv.className = "row " + className;
//   }
//   return rowDiv;
// }

// function createButton(buttonText, styleClass, functionName) {
//   var button = document.createElement("button");
//   button.className = styleClass;
//   button.appendChild(document.createTextNode(buttonText));
//   button.setAttribute("onclick", functionName);
//   return button;
// }

// function createProgressBar(bar_id, color, value) {
//   var bar = document.createElement("div");
//   bar.id = bar_id;
//   bar.className = "progress-bar " + color;
//   bar.setAttribute("style", "width: " + value + "%");
//   return bar;
// }

// function setProgressBar(bar_id, color, value) {
//   var bar = document.getElementById(bar_id);
//   bar.className = "progress-bar " + color;
//   bar.setAttribute("style", "width: " + value + "%");
//   bar.innerHTML = value + "%";
// }

// function createDefaultButton() {
//   var button = document.createElement("div");
//   button.className = "thumbnail";
//   //the image part
//   var img = document.createElement("img");
//   img.id = "img_" + i + "_" + j;
//   img.setAttribute("src", "images/white.jpg");
//   img.setAttribute("alt", "white");
//   img.setAttribute("class", "");
//   img.setAttribute("width", "50");
//   img.setAttribute("height", "50");

//   //the text part
//   var text = document.createElement("label");
//   text.setAttribute("class", "caption unselectable");
//   text.id = "text_" + i + "_" + j;

//   button.appendChild(img);
//   button.appendChild(text);
//   return button;
// }
// function setItems(x, y, color){
//   var button = document.getElementById("img_" + x + "_" + y);
//   button.setAttribute("src", "images/" + color + ".jpg");
//   button.setAttribute("alt", color);
// }


// function setPlayerPos(i, j, color){
//   var button = document.getElementById("img_" + i + "_" + j);
//   button.setAttribute("src", "images/" + color + ".jpg");
//   button.setAttribute("alt", color);
   
// }

// function setBlank(i, j, color){
//   var button = document.getElementById("img_" + i + "_" + j);
//   button.setAttribute("src", "images/" + color + ".jpg");
//   button.setAttribute("alt", color);

// }



// function moveRight(){

//   setBlank(i, j, getRandomColor());
//   color = "mario";
//   j++;
//   checkPosition();
//   setPlayerPos(i,j, color);
//   pPos();

// }
// function moveLeft(){

//   setBlank(i, j, getRandomColor());
//   color = "mario";
//   j--;
//   checkPosition();
//   setPlayerPos(i,j, color);
//   pPos();
// }

// function moveUp(){

//   setBlank(i, j, getRandomColor());
//   color = "mario";
//   i--;
//   checkPosition();
//   setPlayerPos(i,j, color);
//   pPos();
//   changeColor();

 
// }

// function moveDown(){
  
//   setBlank(i, j, getRandomColor());
//   color = "mario";
//   i++;
//   checkPosition();
//   setPlayerPos(i,j, color);
//   pPos();
  
 
// }
// function open(){
//   setPlayerPos(3, 0, "mario");
// }
// function checkPosition(){

//     if(i == -1 || j == -1 || j == 10 || i == 10){
//     setStatusText("you DIED, CLICK START TO START AGAIN","text-bold");
//     window.alert("You Died");
//     start();
//   }
// }



// function press(e){//listening for key press  
//    if ( e.keyCode === 87 /* w */){
//      setBlank(i, j, getRandomColor());
//      moveUp();
    
//   }
//   if ( e.keyCode === 68 /* d */){
    
//       moveRight();
     
//   }
//   if ( e.keyCode === 83 /* s */){
     
//       moveDown();
     
      
//   }
//   if ( e.keyCode === 65 /* a */){
   
//       moveLeft();
      
//   }
//   if( e.keyCode === 32 /**space */){
//     if(i == 4){
//     space();
//   }
    
    
//   }

// }
// function space(){
//   i++;
//   setPlayerPos(i, j, "mario");

// }

// function setButtonColor(i, j, color) {
//   var button = document.getElementById("img_" + i + "_" + j);
//   button.setAttribute("src", "images/" + color + ".jpg");
//   button.setAttribute("alt", color);
// }

// function setButtonText(i, j, text) {
//   var button = document.getElementById("text_" + i + "_" + j);
//   button.innerHTML = text;
// }

// function getButtonColor(i, j) {
//   var img = document.getElementById("img_" + i + "_" + j);
//   return img.getAttribute("alt");
// }

// function getButtonText(i, j) {
//   var text = document.getElementById("text_" + i + "_" + j);
//   return text.innerHTML;
// }

// function getRandomColor() {
//   //you might want to change this to get more colors
 
//   random = Math.floor(Math.random() * 6);
//   if (random == 1) {
  
//     num = 1;
//     console.log(num);
//     return "red";//

//   } else if (random == 2) {
//     num = 2;
//     return "purple";
    
//   } else if (random == 3) {
//     num = 3;
//     return "skyblue";
    
//   }
//   else if (random == 4) {
//     num = 4
//     return "white";
  
//   }
//   else if (random == 5) {
//     return "orange";
//      var num = 5;
//   }
//   return "white";
// }
// function changeColor(){
//   if(i == 4 && j == 1){
//     // setTimeout(resetPlayerPos, 500);
//     setRandomColor(i, j, getRandomColor());
//   }
//   else if (i == 4 && j == 4){
//     setRandomColor(i, j, getRandomColor());
//   }
//     else if (i == 4 && j == 7){
//     setRandomColor(i, j, getRandomColor());
//   }
// }
// function setRandomColor(i, j, color){
//   var button = document.getElementById("img_" + i + "_" + j);
//   button.setAttribute("src", "images/" + color + ".jpg");
//   button.setAttribute("alt", color);
// }


// //console interaction functions
// function logAllHistory() {
//   if (clickHistory.length == 0) {
//     console.log("History is empty");
//     return;
//   }
//   for (i = 0; i < clickHistory.length; i++) {
//     console.log(clickHistory[i]);
//   }
// }

// function logLastClicked() {
//   if (clickHistory.length == 0) {
//     console.log("History is empty");
//   } else {
//     console.log(clickHistory[clickHistory.length - 1]);
//   }
// }

// //this is what's triggered when any button in the matrix is pressed

// function buttonClicked(i, j) { //this is where you should start
//   setStatusText("Button [" + i + ", " + j + "] pressed");
//   clickHistory.push(i*8 + j);
//   //set this button to a random color
//   setButtonColor(i, j, getRandomColor());
//   var currentText = getButtonText(i, j);
//   var textValue = 0;
//   if (currentText != "") {
//     textValue = parseInt(currentText, 10); //convert the text to base10 (decimal) number
//   }
//   setButtonText(i, j, textValue+1);
//   //increase the progress bar a bit
//   progress += textValue;
//   setProgressBar("bar", "bg-success", progress);
// }
