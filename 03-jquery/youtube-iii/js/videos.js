var $links = $('ul a');

var thumbnailify = function (_) {
  var $l = $( this ); // Retrieve the jQuery version of the current link.

  var href = $l.attr('href'); // Using .attr() as a getter.

  var thumbnailURL = youtube.generateThumbnailUrl( href );
  var $img = $('<img>');
  $img.attr('src', thumbnailURL); // Using .attr() as a setter.

  $l.append($img);

  $l.on('click', function (event) {
    event.preventDefault(); // Don't visit the link and leave this page.

    var href = $(this).attr('href');

    var embed = '<iframe width="560" height="315" src="' + youtube.generateEmbedUrl(href) + '" frameborder="0" allowfullscreen></iframe>';

    $('#player').hide().html( embed ).fadeIn(4000); // Chaining
  });

};

$links.each(thumbnailify);
