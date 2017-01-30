var xhr = new XMLHttpRequest(); // Like HTTParty for JS

// To process the results of an asynchronous function like xhr.send()
// we MUST use a callback to wait for the request to complete.
xhr.onreadystatechange = function () {
  // If the request is still in progress, do nothing.
  if (xhr.readyState < 4) { return; }

  var movieInfo = xhr.responseText;
  console.log(movieInfo);
  var poster = movieInfo['Poster'];
  console.log(poster);
};

xhr.open('GET', 'http://omdbapi.com/?t=jaws'); // Set up
xhr.send(); // Asynchronous call!

// Wrong approach: we can't predict how long the request will take
// setTimeout(function () {
//   console.log( xhr.responseText );
// }, 3000);
