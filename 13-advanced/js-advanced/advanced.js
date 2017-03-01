// .call and .apply and .bind
var groucho = {
  name: 'Groucho Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.name;
  }
};

var chico = {
  name: 'Chico Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.name;
  }
};

// .bind lets you permanently attach a particular object as `this`,
// regardless of where you actually call the function.
var grouchoGreeting = groucho.greeting.bind(groucho);
console.log( grouchoGreeting() ); // => '... Groucho'
// EVEN THO we're using the window call site.

//someFunction.bind(this); // This is partly why I hate JS

// .apply lets us pass an argument array into a function which expects a list
// .call doesn't
var numbers = [134, 34, 3, 4, -1001, 0, 12, 100000];
// Math.max( numbers ); // Doesn't work: NaN
Math.max.apply( null, numbers ); // Does work, returns 100000
// The null is used as the value of `this` (here we don't need one).

// closures
var idMaker = function () {
  var id = 0; // This variable will persist through the closure.
  return function () {
    id++;
    return id;
  }
};

var bikeID = idMaker();
console.log( bikeID() ); // 1
console.log( bikeID() ); // 2
console.log( bikeID() ); // 3

var carID = idMaker();
console.log( carID() ); // 1
console.log( carID() ); // 2

console.log( bikeID() ); // 4

// Closures are one of the best parts of JS (imo)
var tag = function (tagName) {
  // var privateTag = tagName; // This variable persists through a closure.
  return function (content) {
    return '<' + tagName + '>' + content + '</' + tagName + '>';
  }
};

var h1 = tag('h1');
var h2 = tag('h2');
var p = tag('p');
var span = tag('span');

h1('please kill me');
