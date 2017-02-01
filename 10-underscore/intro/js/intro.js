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


// FIND ////////////////////////////////////////////////////////////////////////
var nums = [1, 1, 1, 5, 7, 11, 14, 7, 3, 20, 8, 5, 17];
var result = _(nums).find(function (n) {
  return n % 2 === 0; // Is n even?
});

console.log(result);

var brother = _(bros).find(function (b) {
  return b.includes('i');
});
console.log(brother);

// FILTER //////////////////////////////////////////////////////////////////////
// REJECT //////////////////////////////////////////////////////////////////////
var evens = _(nums).filter(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( evens );

// WHERE ///////////////////////////////////////////////////////////////////////
var actors = [
  {name: 'Groucho', gender: 'male'},
  {name: 'Harpo', gender: 'male'},
  {name: 'Mrs Dumont', gender: 'female'},
  {name: 'Chico', gender: 'male'}
];

// var maleActors = _(actors).filter(function (a) {
//   return a.gender === 'male';
// });
var maleActors = _(actors).where( {gender: 'male'} );
var femaleActors = _(actors).where( {gender: 'female'} );
console.log(maleActors, femaleActors);

// PLUCK ///////////////////////////////////////////////////////////////////////
var names = _(actors).pluck('name');
console.log(names);

// MAX /////////////////////////////////////////////////////////////////////////
var max = _(nums).max();
console.log('maxiumum', max);

// SHUFFLE /////////////////////////////////////////////////////////////////////
console.log( _(nums).shuffle() );

// SAMPLE //////////////////////////////////////////////////////////////////////
console.log( _(nums).sample(3) );
