// script.js

// add and multiply functions defined as arrow functions because they are called
// by a called a regular function which is but they need to access parameters
// that are in an object in the regular function's parent object
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Define the 'internal' function as a regular function and use 'this' to access 'add' and 'multiply'
function internal() {
  let added = this.add(this.internal.a, this.internal.b);
  added = this.multiply(added, this.internal.c);
  return added;
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

console.log(example1.calculate());
console.log(example2.calculate());
