class Person {}

// 1 class vs Prototype
// const pollapat = new Person();
// console.log(pollapat);

// 2 what's prototype
// const name = "pollapat";
// console.log(name.__proto__);

// 3 prototype chain
// const name = "pollapat";
// console.log(name.__proto__);

// 4 extend a prototype
const name = "pollapat";
function sayHello(val) {
  console.log(`hello ${val}`);
}

String.prototype.sayHello = sayHello;
console.log(name.__proto__);

name.sayHello("world");
