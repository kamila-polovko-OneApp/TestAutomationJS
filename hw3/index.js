// task 1
// "for" loop
let arr = [2, 3, 4, 5];
let result = 1;

/*
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result); // 120
*/

//"while" loop
let i = 0;
while (i < arr.length) {
  result *= arr[i];
  i++;
}
console.log(result); //120

// task 2
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
// 0 is even, 1 is odd, 2 is even, 3 is odd, 4 is even, 5 is odd, 6 is even, 7 is odd, 8 is even, 9 is odd, 10 is even, 11 is odd, 12 is even, 13 is odd, 14 is even, 15 is odd

// task 3
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}
console.log(randArray(7)); // [149, 161, 24, 154, 354, 211, 73]

// task 4
function raiseToDegree(a, b) {
  return Math.pow(parseInt(a), parseInt(b));
}
let a = +prompt("Please, enter a number", "4");
let b = +prompt("Please, enter a number", "7");
console.log(raiseToDegree(a, b)); // 16384

// task 5
function findMin() {
  let min = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}
console.log(findMin(5, 9765, 66, 866, 8)); //5

// task 6
function findUnique(arr) {
    let unique = true;
    for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            unique = false;
        }
       }
    }
    return unique; 
}
console.log(findUnique([659, 90, 659, 42, 7])); // false
console.log(findUnique([3, 6, 88, 567, 30])); // true

// task 7
function lastElem(arr, num) {
    return arr.slice(-num);
  }
console.log(lastElem([7, 488, 10, 6, 87, 0], 4)); // (4) [10, 6, 87, 0]

// task 8
let string = 'i love java script';
let stringArray = string.split(' ');
for(let i = 0; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
}
let capitalizedString = stringArray.join(' ');
console.log(capitalizedString); // I Love Java Script