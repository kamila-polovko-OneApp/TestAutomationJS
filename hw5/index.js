// task 1
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS for TA",
  duration: 7,
  direction: "AQA",
  sphere: "IT",
};
console.log(propsCount(mentor)); // 4

// task 2
function showProps(obj) {
  let propNames = Object.keys(obj);
  let propValues = [];
  for (let i = 0; i < propNames.length; i++) {
    propValues.push(obj[propNames[i]]);
  }
  console.log(propNames); // (5) ['name', 'months', 'weather', 'air', 'mood']
  console.log(propValues); // (5) ['spring', Array(3), 'warm', 'fresh', 'inspiring']
}

let season = {
  name: "spring",
  months: ["March", "April", "May"],
  weather: "warm",
  air: "fresh",
  mood: "inspiring",
};
showProps(season);

// task 3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname); // Kamila Polovko
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    console.log(this.name + " " + middleName + " " + this.surname); // Max Jackson Brighton
  }
  showCourse() {
    let currentYear = new Date().getFullYear();
    let course = currentYear - this.year + 1;
    console.log(course); // 4
  }
}

let person = new Person("Kamila", "Polovko");
person.showFullName();

let student = new Student("Max", "Brighton", 2020);
student.showFullName("Jackson");
student.showCourse();

// task 4
class Employee {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  set experience(value) {
    return (this.#experience = value);
  }
  get experience() {
    return this.#experience;
  }

  showSalary() {
    return this.dayRate * this.workingDays;
  }
  showSalaryWithExperience() {
    return this.showSalary * this.#experience;
  }
  showSalaryWithNewExperience() {
    return this.showSalary() * this.#experience;
  }
}

let employee1 = new Employee("Monica Smith", 18, 25);
console.log(employee1.fullName);
console.log(employee1.showSalary());
employee1._experience = 1.5;
console.log(employee1.showSalaryWithNewExperience());

let employee2 = new Employee("Bill Black", 20, 27);
console.log(employee2.fullName);
console.log(employee2.showSalary());
employee2._experience = 1.5;
console.log(employee2.showSalaryWithNewExperience());

let employee3 = new Employee("Jack Bold", 22, 20);
console.log(employee3.fullName);
console.log(employee3.showSalary());
employee3._experience = 1.5;
console.log(employee3.showSalaryWithNewExperience());

let employees = [employee1, employee2, employee3];
function sortBySalary(employees) {
  for (let i = 0; i < employees.length; i++);
}
console.log(employees);

/*
Monica Smith
index.js:95 450
index.js:97 540
index.js:100 Bill Black
index.js:101 540
index.js:103 648
index.js:106 Jack Bold
index.js:107 440
index.js:109 528
index.js:115 
(3) [Employee, Employee, Employee]
0
: 
Employee {fullName: 'Monica Smith', dayRate: 18, workingDays: 25, _experience: 1.5, #experience: 1.2}
1
: 
Employee {fullName: 'Bill Black', dayRate: 20, workingDays: 27, _experience: 1.5, #experience: 1.2}
2
: 
Employee {fullName: 'Jack Bold', dayRate: 22, workingDays: 20, _experience: 1.5, #experience: 1.2}
length
: 
3
[[Prototype]]
: 
Array(0)
*/