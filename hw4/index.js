// task 1
function calcRectangleArea(width, height) {
  if (width === NaN || height === NaN) {
    throw new Error('Non-numeric parameters are entered');
  }
  return width * height;
}
try {
  //let width = 8; in case we comment this line -> ReferenceError index.js:18
  //width is not defined index.js:19
  //ReferenceError: width is not defined index.js:20
  //at index.js:15:29

  let height = 5;
  let S = calcRectangleArea(width, height);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}
console.log(calcRectangleArea(8, 5)); //40

// task 2
function checkAge() {
  let age = prompt('Please, enter your age:');

  try {
    if (!age) {
      throw new Error('The field is empty! Please, enter your age!');
    }
    let ageNum = parseInt(age, 7);
    if (isNaN(ageNum)) {
      throw new Error('Please enter a valid number for your age!');
    }
    if (ageNum < 14) {
      throw new Error('Sorry, you are not old enough to watch this movie');
    }
    alert('You can watch this movie!');

  } catch (error) {
    alert(error.name);
    alert(error.message);
    alert(error.stack);
  }
}
checkAge();

// task 3
class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = 'MonthException';
    }
  }
  function showMonthName(month) {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    if (month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
    return monthNames[month - 1];
  }
  
  try {
    let monthNumber = +prompt('Enter month number:', 10); // October
    let monthName = showMonthName(monthNumber);
    console.log(monthName);
  } catch (error) {
    if (error instanceof MonthException) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    } else {
      console.log(error);
    }
  }
  // in case of "0" -> MonthException index.js:70
  //Incorrect month number index.js:71
  // MonthException: Incorrect month number at showMonthName (http://127.0.0.1:5500/hw4/index.js:59:13) at http://127.0.0.1:5500/hw4/index.js:66:21 index.js:72 

  // task 4
  function showUser(id) {
    if (id < 0) {
      throw new Error('Invalid user id');
    }
    return { id };
  }
  
  function showUsers(ids) {
    let results = {};
    for (let i = 0; i < ids.length; i++) {
      try {
        let user = showUser(ids[i]);
        results[user.id] = user;
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
      }
    }
    return Object.values(results);
  }
  
  console.log(showUsers([6, 94, -3, 76]));

  /* Error
index.js:97 Invalid user id
index.js:98 Error: Invalid user id
    at showUser (index.js:84:13)
    at showUsers (index.js:93:20)
    at index.js:104:15
index.js:104 Array(3)0: {id: 6}1: {id: 76}2: {id: 94}length: 3[[Prototype]]: Array(0)
*/
