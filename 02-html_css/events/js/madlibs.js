// Add an event listener to the button so that it calls a makeMadLib function when clicked.

// Fetch the button DOM node from the DOM
var libItButton = document.getElementById('lib-button');

// Define our callback/event listener
var makeMadLib = function () {
  var name = document.getElementById('person').value;
  var adjective = document.getElementById('adjective').value;
  var noun = document.getElementById('noun').value;

  var story = [name, 'really likes', adjective, noun].join(' ');

  document.getElementById('story').innerHTML = story;
};

// Attach our callback to the DOM node
libItButton.addEventListener('click', makeMadLib);
