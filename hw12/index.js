// task 1
function upperCase(string) {
  let regExp = /^[A-Z]/;
  let result = regExp.test(string);
  if (string.length === 0) {
    return false;
  } else {
    return string.charAt(0) === string.charAt(0).toUpperCase();
  }
}
console.log(upperCase("regexp")); // false
console.log(upperCase("Regexp")); // true

//task 2
function checkEmail(string) {
  let regExp2 = /\w+\W\w+\.\w/;
  return regExp2.test(string) ? true : false;
}
console.log(checkEmail("kpolovk@softserveinc.com")); // true
console.log(checkEmail("kpolovksoftserveinccom")); // false

//task 3
let str = "cdbBdbsbz ";
let regExp3 = /d(b+)(d)/i;
let result3 = regExp3.exec(str);
console.log(result3); //['dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz ', groups: undefined]

// task 4
let str4 = "Java Script";
let re = /;/;
console.log(str4.split(re)); // ['Java Script']
let swappedString = str4.replace(/(Java)\s(Script)/, "$2 $1");
console.log(swappedString); // Script Java

// task 5
function validateCardNumber(cardNumber) {
    const regExp5 = /^(\d{4}-){3}\d{4}$/;
    return regExp5.test(cardNumber);
  }
console.log(validateCardNumber('9999-9999-9999-9999')); // true

// task 6
function checkEmailData(data) {
    let regExp6 = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    return regExp6.test(data) ? 'Email is correct!' : 'Email is not correct!'
  }
  console.log(checkEmailData("my_mail@gmail.com")); // Email is correct!
  console.log(checkEmailData("#my_mail@gmail.com")); // Email is not correct!
  console.log(checkEmailData("my_ma--il@gmail.com")) // Email is not correct!
