// task 1
let x = 1;
let y = 2;

let res1 = "1" + "2";
console.log(res1); // 12
console.log(typeof res1); // string

let res2 = Boolean(1) + "2";
console.log(res2); // true2
console.log(typeof res2); // string

let res3 = Boolean(1 + 2);
console.log(res3); // true
console.log(typeof res3); // boolean

let res4 = 1 * "y";
console.log(res4); // NaN
console.log(typeof res4); // number

// task 2
let enterAnumber = prompt("Please, enter a number", "1");
let message = enterAnumber > 0 && enterAnumber * 7
    ? "Your number is correct"
    : "Your number is not correct";
alert(message);

// task 3
const arr = [];
arr.push(4, "whatsup", true, null);
console.log(arr);
console.log(arr.length);

let enterAnyValue = prompt("Please, enter any value", "Hi");
arr.push("Hi");
console.log(arr[4]); // Hi

arr.shift();
console.log(arr); // (4) ['whatsup', true, null, 'Hi']

// task 4
let subjects = ["English", "PE", "Literature", "Music"];
let result = subjects[0] + "*" + subjects[1] + "*" + subjects[2] + "*" + subjects[3];
console.log(result); // English*PE*Literature*Music

// task 5
let userAge = prompt("What is your age?", "18");
let isAdult = userAge > 17
    ? "You have reached the age of majority"
    : "You are still too young";
alert(isAdult);

// task 6
let a = +prompt("Please, enter the first side of the triangle", "5");
let b = +prompt("Please, enter the second side of the triangle", "7");
let c = +prompt("Please, enter the third side of the triangle", "9");
let validate = a > 0 && a !== NaN && b > 0 && b !== NaN && c > 0 && c !== NaN
    ? "Correct data"
    : "Incorrect data";
alert(validate); // Correct data
console.log(a, b, c); // 5, 7, 9

let P = (a + b + c) / 2;
let S = Math.sqrt(P * (P - a) * (P - b) * (P - c)).toFixed(3); // 17.412
console.log(S);

let triangleType =
  Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) 
  ? "This triangle is rectangular" 
  : "This triangle is not rectangular";
alert(triangleType); // This triangle is not rectangular
console.log(triangleType); // This triangle is not rectangular

// task 7
let timeOfDay = new Date().getHours();
if (timeOfDay >= 23 && timeOfDay >= 4) {
  console.log("Good night");
} else if (timeOfDay >= 5 && timeOfDay <= 10) {
  console.log("Good morning");
} else if (timeOfDay >= 11 && timeOfDay <= 18) {
  console.log("Good day"); // (14:20) Good day
} else if (timeOfDay >= 19 && timeOfDay <= 22) {
  console.log("Good evening");
} else {
  console.log("Hi");
}

switch (true) {
  case timeOfDay >= 23 && timeOfDay >= 4:
    console.log("Good night");
    break;
  case timeOfDay >= 5 && timeOfDay <= 10:
    console.log("Good morning");
    break;
  case timeOfDay >= 11 && timeOfDay <= 18:
    console.log("Good day"); // (14:20) Good day
    break;
  case timeOfDay >= 19 && timeOfDay <= 22:
    console.log("Good evening");
    break;
  default:
    console.log("Hi");
}
