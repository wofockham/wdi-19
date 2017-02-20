////////////////////////////////////////////////////////////////////////////////
// Block scope with let
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// console.log( i ); // Error

////////////////////////////////////////////////////////////////////////////////
// Default parameters
const hello = function (name="world") {
  console.log('hello ' + name);
}

hello('Chris');
hello();

////////////////////////////////////////////////////////////////////////////////
// String Interpolation
const name = "Wayne";
const message = `It's ${ name }'s World`; // Backticks!
console.log( message );

////////////////////////////////////////////////////////////////////////////////
// Short (Arrow) Functions
const shortHello = (name="world") => 'hello ' + name; // Implicit return
shortHello();

const add = (a, b) => a + b;

$("body").click((e) => console.log("Hello"));

// Multiline function bodies require curlies and have no implicit.
$("body").click((e) => {
  console.log("Hello");
  console.log('Goodbye');
});

const brother = (name) => `${name} Marx`;

////////////////////////////////////////////////////////////////////////////////
// Spread and rest parameters
var add = function (...nums) {
  var total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

///////////////////////////////////////////////////////////////////////////////
// Destructuring
let [firstNum, secondNum] = [1, 2];

const user = { name: 'Jonesy', age: 55, allergies: {shellfish: true, gluten: false}}
let { name, age, allergies: {shellfish} } = user;
console.log( shellfish ); // true;

// const {random} = require('lodash');
