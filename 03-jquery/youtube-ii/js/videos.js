var $links = $('ul a');

$links.each(function () {
    var $l = $( this ); // Retrieve the jQuery version of the current link.

    var href = $l.attr('href'); // Using .attr() as a getter.

    var thumbnailURL = youtube.generateThumbnailUrl( href );
    var $img = $('<img>');
    $img.attr('src', thumbnailURL); // Using .attr() as a setter.

    $l.append($img);
});
