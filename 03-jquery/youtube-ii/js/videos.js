var links = document.querySelectorAll('ul a');

for (var i = 0; i < links.length; i++) {
  var l = links[i]; // Retrieve the current link.

  var href = l.getAttribute('href'); // The same as l.href;

  var thumbnailURL = youtube.generateThumbnailUrl( href );
  var img = document.createElement('img'); // This creates <img> as a detached DOM node
  img.setAttribute('src', thumbnailURL); // Equivalent to img.src = thumbnailURL;

  l.appendChild( img ); // This attaches the img to our DOM.
}
