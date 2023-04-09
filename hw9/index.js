// task 1
function getPromise(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}
getPromise("I'll be back in 3 sec", 3000).then(function (data) {
  console.log(data);
});

// task 2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        reject("Error! Incorrect array!");
        return;
      }
      product *= arr[i];
    }
    resolve(product);
  });
}
calcArrProduct([7, 3, 2]).then((result) => console.log(result)); // 42
calcArrProduct([2, "hello", 10, 8]).then((result) => console.log(result)); // Error! Incorrect array!