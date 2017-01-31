$(document).ready(function () {
  $('form').on('submit', function (event) {

    event.preventDefault(); // Prevent the form being submitted to the server.

    var title = $('#title').val();
    var url = 'http://omdbapi.com/?t=' + title;

    $.ajax({
      url: url
    }).done(function (movieInfo) {
      var $img = $('<img>').attr('src', movieInfo['Poster']);
      $img.appendTo('body');
    });

  });
});
