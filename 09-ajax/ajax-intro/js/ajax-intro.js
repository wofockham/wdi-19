var xhr = new XMLHttpRequest(); // A Javascript web browser.
xhr.onreadystatechange = function () {
  if (xhr.readyState < 4) { return; } // Request is still in progress, so abort.
  var movieInfo = xhr.responseText;
  var poster = movieInfo['Poster'];
  console.log(movieInfo);
  console.log(poster);
}
xhr.open('GET', 'http://omdbapi.com/?t=jaws');
xhr.send(); // Asynchronous


// Wrong approach
// setTimeout(function () {
//   console.log( xhr.responseText );
// }, 3000);
