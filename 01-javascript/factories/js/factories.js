// Cat Factory
var catFactory = function (name, age, furColor) {
  return {
    "name": name,
    "age": age,
    "furColor": furColor,
    "hello": function () {
      console.log("Hello, my name is " + this.name);
    },
    "miaow": function () {
      console.log("Miaow");
    },
    "eat": function (food) {
      console.log("Yum I love to eat " + food);
    }
  };
}

var cuteCats = [
		// { name: "Angel", age: 18, furColor: "grey" },
		// { name: "Evil", age: 14, furColor: "red" },
		// { name: "Meh", age: 12, "Fur Color": "white" }

    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')
];

// PROTOTYPAL INHERITANCE //////////////////////////////////////////////////////
// Constructor (these things are WEIRD)
// var Cat = function (name, age, furColor) {
//   this.name = name;
//   this.age = age;
//   this.furColor = furColor;
// };
