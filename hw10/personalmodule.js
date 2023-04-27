// task 2
exports.greeting = function(username) {
  let hour = new Date().getHours();
  let day = new Date();

  let greeting = '';
  if (hour < 12) {
    greeting = `Good morning, ${username}`;
  } else if (hour > 12 && hour < 18) {
    greeting = `Good afternoon, ${username}`;
  } else {
    greeting = `Good evening, ${username}`;
  }

  return "Date of request: " + day + " " + greeting ;
}

