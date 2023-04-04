// task 1
let myWindow = window.open("", "", "width=300, height=300");

setTimeout(function () {
  myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
  myWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  myWindow.close();
}, 6000);

console.log(myWindow);

// task 2
function changeCSS() {
  let p = document.getElementById("text");
  p.style.color = "orange";
  p.style.fontSize = "20px";
  p.style.fontFamily = "Comic Sans MS";
}

// task 3
function backgroundChange(color) {
  document.body.style.backgroundColor = color;
}

backgroundChange();

// task 4
function removeSelectedElement() {
  let myChoice = document.getElementById("myChoice");
  myChoice.remove(myChoice.selectedIndex);
}

// task 5
function displayMessage() {
  document.getElementById("liveBtn").innerHTML = "I was pressed!";
}
function mouseOver() {
  document.getElementById("liveBtn").innerHTML = "Mouse is on me!";
}
function mouseOut() {
  document.getElementById("liveBtn").innerHTML = "Mouse is not on me!";
}

// task 6
let widthWindow = document.getElementById("width-window");
let heightWindow = document.getElementById("height-window");

function updateSizeWindows() {
  widthWindow.innerText = window.innerWidth;
  heightWindow.innerText = window.innerHeight;
}
window.addEventListener("resize", updateSizeWindows);
updateSizeWindows();