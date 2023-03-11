// task 1
alert("My name is Kamila");

/* in order to place the command inside the html document it should be put inside the script
<script>
alert('My name is Kamila')
</script>
*/

// task 2
console.log("Kamila");

// task 3
let work;
work = "hard";
console.log(work);

work = "for pleasure";
console.log(work);

let x = 38;
let y = "male";
x = y;
console.log(y); //y = male
console.log(x); // x = male

/*
y = x;
console.log(y); //y = 38
console.log(x); // x = 38
*/

// task 4
let crocodile = {
  name: "Crocs",
  body: "long",
  legs: 4,
  tail: true,
  ears: undefined,
  pretty: null,
};
console.log(crocodile);

let name = "Crocs";
console.log(typeof name); // string
let body = "long";
console.log(typeof body); // string
let legs = 4;
console.log(typeof legs); // number
let tail = true;
console.log(typeof tail); // boolean
let ears = undefined;
console.log(typeof ears); // undefined
let pretty = null;
console.log(typeof pretty); // object

// task 5
let isAdult = confirm("Have you already reached the age of majority?");
alert(isAdult); // OK = true; Cancel = false

// task 6
let student = {
  firstName: "Kami",
  lastName: "Pol",
  group: "TA",
  birthYear: 1986,
  meritalStatus: true,
  hasSon: null,
  knowsScience: undefined,
};
console.log(student);

let birthYear = 1986;
console.log(typeof birthYear); // number
let meritalStatus = true;
console.log(typeof meritalStatus); // boolean
let group = "TA";
console.log(typeof group); // string
let hasSon = null;
console.log(typeof hasSon); // object
let knowsScience = undefined;
console.log(typeof knowsScience); //undefined

// task 7
let account = prompt("What is your email and password?");
console.log(account);

// task 8
let secondsInAMinute = 60;
let minutesinAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesinAnHour;
console.log(secondsInAnHour); // 3600

let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay); // 86400

let daysInAMonth = 31;
let secondsInAMonth = secondsInADay * daysInAMonth;
console.log(secondsInAMonth); // 2678400

/* wanted to choose between 28 - 31 days, but it does not work...
let daysInAMonth = function (howMany) {
    for (let i = 28; i < howMany; i++) {
        let secondsInAMonth = secondsInADay * daysInAMonth;
        console.log(secondsInAMonth);
    }
};
daysInAMonth (31);
*/

//let daysInAYear = 365; (variant 1)
//let secondsInAYear = secondsInADay * daysInAYear;
//console.log(secondsInAYear); // 31536000

let monthsInAYear = 12; // (variant 2)
let secondsInAYear = secondsInAMonth * monthsInAYear;
console.log(secondsInAYear); // 32140800 (in case each month would have had 31 day)