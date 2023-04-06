// task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;

console.log(x); // Tom
console.log(y); // Sam
console.log(z); // [Bob]

// task 2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

console.log(name2); // Tom
console.log(age2); // 24
console.log(name4); // Bob
console.log(age4); // 26

// task 3
function mul(...parameters) {
  let product = 1;
  let hasNumber = false;

  for (let parameter of parameters) {
    if (typeof parameter === "number") {
      product *= parameter;
      hasNumber = true;
    }
  }
  return hasNumber ? product : 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// task 4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => `${this.data}`);
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },

  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);
console.log(client.result); // 123
console.log(typeof client.result); // string

// task 5
let map = new Map ();
let mapBuilder = (keysArray, valuesArray) => {
    let keys = [1, 2, 3, 4];
    let values = ["div", "span", "b", " i "];
    for (let i = 0; i < keys.length; i++) {
        map.set(keys[i], values[i]);
      }
      return map;
};
mapBuilder();
console.log(map.size); // 4
console.log(map.get(2)); // span
console.log(map); //Map(4) {1 => 'div', 2 => 'span', 3 => 'b', 4 => ' i '}