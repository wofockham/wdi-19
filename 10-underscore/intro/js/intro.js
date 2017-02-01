// EACH ////////////////////////////////////////////////////////////////////////
var bros = "groucho harpo chico".split(' ');

_(bros).each(function (b) {
  console.log( b.toUpperCase() );
});

_.each(bros, function (b, index) {
  console.log( b );
});


var groucho = {
  name: 'groucho',
  instrument: 'guitar',
  vice: 'cigars'
}

// for (var key in groucho) {
//   console.log(key);
// }

_(groucho).each(function (value, key) {
  console.log(key, 'is', value);
});

// MAP /////////////////////////////////////////////////////////////////////////
var fullBrothers = _(bros).map(function (b, index, entireArray) {
  return '<h1>' + b + ' Marx' + '</h1>';
})

console.log(bros, fullBrothers);

var nums = [5, 7, 23];
var squares = _(nums).map(function (n) {
  return n * n;
});
console.log(nums, squares);


// REDUCE //////////////////////////////////////////////////////////////////////
var total = _(nums).reduce(function (sum, n) { // sum => accumulator
  console.log('sum:', sum, 'n:', n);
  return sum + n;
});

console.log(total);
