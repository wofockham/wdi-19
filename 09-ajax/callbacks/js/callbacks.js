console.log('A: hotdogs');

$(document).ready(function () {
  console.log('B: Document is ready');
});

console.log('C: butterflies');

// Output should be in this order: A, C, B

// Timers - asynchronous
setInterval(function () {
  console.log('3 seconds have elapsed', Math.random());
}, 3000);

var hello = function () {
  console.log('Hello world');
}

setTimeout(hello, 17000);

// Callbacks allow us to pass functions into other functions

// ['groucho', 'harpo', 'chico'].each do |b|
//   puts b.upcase
// end

// Anonymous callback function
['groucho', 'harpo', 'chico'].forEach(function (b) {
  console.log( b.toUpperCase() );
});

// Named function
var showName = function (b) {
  console.log( b.toUpperCase() );
};

// Named callback function
['groucho', 'harpo', 'chico'].forEach( showName );
