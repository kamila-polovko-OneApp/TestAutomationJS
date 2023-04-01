// task 1
let id = document.getElementById("test");
console.log(id); // First

let x = document.querySelectorAll("div.test");
console.log(x); // First

let elem = (document.getElementById("test").innerHTML = "Last");
console.log(elem); // Last

// task 2
let image = document.querySelector(".image");
image.onclick = function () {
  this.src = "dog.jpg";
};
console.log(image);

let image2 = (image.scr = "cat.jpg");
image2.onclick = function () {
  this.src = "cat.jpg";
};
console.log(image2);

// task 3
let p = document.querySelectorAll("div>p");
for (let i = 0; i < p.length; i++) {
  console.log("Selector text " + i + ": " + p[i].innerText);
}
// Selector text 0: AQA index.js:27
// Selector text 1: I'm loving it index.js:27
// Selector text 2: Never give up!

// task 4
let list1 = document.querySelectorAll("#list li")[0].innerText;
let list2 = document.querySelectorAll("#list li")[4].innerText;
let list3 = document.querySelectorAll("#list li")[1].innerText;
let list4 = document.querySelectorAll("#list li")[3].innerText;
let list5 = document.querySelectorAll("#list li")[2].innerText;
console.log(
  list1 + "," + " " + list2 + " " + list3 + " " + list4 + " " + list5 + "!"
); // Hi, I'm AQA engineer now!

let l1 = document.querySelector("#list").firstElementChild.textContent;
let l2 = document.querySelector("#list").lastElementChild.textContent;
let l3 =
  document.querySelector("#list").firstElementChild.nextElementSibling
    .textContent;
let l4 =
  document.querySelector("#list").lastElementChild.previousElementSibling
    .textContent;
let l5 =
  document.querySelector("#list").firstElementChild.nextElementSibling
    .nextElementSibling.textContent;
console.log(l1 + "," + " " + l2 + " " + l3 + " " + l4 + " " + l5 + "!"); // Hi, I'm AQA engineer now!

// task 5
let newP = document.querySelectorAll("div>p");
let header = document.querySelector("h1");

header.style.background = "lightgreen";
newP[0].style.fontWeight = "bold";
newP[1].style.color = "red";
newP[2].style.textDecoration = "underline";
newP[3].style.fontStyle = "italic";

let l6 = document.querySelectorAll("#myList li");
l6.forEach(element => {
    element.style.display = "inline"; // I need my time
})
document.querySelector("span").style.visibility = "hidden";

// task 6
let prompt1 = prompt("Please, enter your name: ");
let input1 = document.getElementById("my-input1"); // Molly
input1.value = prompt1;

let prompt2 = +prompt("Please, enter your age: ");
let input2 = document.getElementById("my-input2"); // 16
input2.value = prompt2;

input1.setAttribute("value", prompt2);
input2.setAttribute("value", prompt1);

console.log(input1, input2);

// task 7
let main = document.createElement("main");
let div7 = document.createElement("div");
let p7 = document.createElement("p");

main.setAttribute("class", " mainClass");
div7.setAttribute("id", "myClass");
p7.textContent = "My Main Class";
div7.appendChild(p7);
main.appendChild(div7);

console.log(main, div7, p7);